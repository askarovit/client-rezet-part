import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextInput, Select } from '../shared';
import validate from '../../utils/validate';
import { rules as rulesDefault } from './rules';
import { httpRequest } from '../../../core/api/http';
import './style.scss';

const ShippingFormComponent = () => {
  const { order } = useSelector(state => state.carts);
  const [ rules, setRules ] = useState({ ...rulesDefault(order.totalAmount)});
  const [ finalPrice, setFinalPrice ] = useState(order.totalAmount);
  const [ delivery, setDelivery ] = useState(0);
  const [ isPayed, setAnotherStatusPayed ] = useState(false);

  const handlerPay = async () => {
    if (order.totalAmount <= 0) {
        return false;
    }

    const formData = {};
    for (let formElementId in rules.formControls) {
      formData[formElementId] = rules.formControls[formElementId].value;
    }

    const { data } = await httpRequest({
      url: 'carts/makepayment',
      method: 'post',
      data: { userInfo: formData, order }
    });

    if (data.payment === 'payed') {
        setAnotherStatusPayed(true)
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedControls = { ...rules.formControls };
    const updatedFormElement = { ...updatedControls[name] };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      if (updatedControls[inputIdentifier].isRequired) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }
    }

    for(let item of rules.formControls.shipping.options) {
      if (item.value === value) {
        setDelivery(item.cost);
      }
    }

    setRules({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  };

  return (
    <div className='pay-form-container'>
      <div>
        <TextInput
          name='name'
          label={rules.formControls.name.label}
          isRequired={rules.formControls.name.isRequired}
          placeholder={rules.formControls.name.placeholder}
          touched={rules.formControls.name.touched}
          valid={rules.formControls.name.valid}
          onChange={handleChange}
        />
        <TextInput
          name='address'
          label={rules.formControls.address.label}
          isRequired={rules.formControls.address.isRequired}
          placeholder={rules.formControls.address.placeholder}
          touched={rules.formControls.address.touched}
          valid={rules.formControls.address.valid}
          onChange={handleChange}
        />

        <TextInput
          name='phone'
          label={rules.formControls.phone.label}
          type={rules.formControls.phone.type}
          isRequired={rules.formControls.phone.isRequired}
          placeholder={rules.formControls.phone.placeholder}
          touched={rules.formControls.phone.touched}
          valid={rules.formControls.phone.valid}
          onChange={handleChange}
        />
        <TextInput
          name='email'
          label={rules.formControls.email.label}
          isRequired={rules.formControls.email.isRequired}
          placeholder={rules.formControls.email.placeholder}
          touched={rules.formControls.email.touched}
          valid={rules.formControls.email.valid}
          onChange={handleChange}
        />
        <Select
          name='shipping'
          value={rules.formControls.shipping.value}
          label={rules.formControls.shipping.label}
          onChange={handleChange}
          options={rules.formControls.shipping.options}
          touched={rules.formControls.shipping.touched}
          valid={rules.formControls.shipping.valid}
        />
        <div className='submit-form'>
          {
            !isPayed &&
            <button disabled={!rules.formIsValid} onClick={handlerPay}>
              <span>PAY</span>
              <span>&nbsp;{ finalPrice + delivery } &#8364;</span>
            </button>
          }
          {
            isPayed &&
            <>
              <span className='notification-green'>Transaction was successful</span>
                <button onClick={()=> window.location.href = '/cart'}>
                  <span>Go to carts</span>
                </button>
            </>
          }
        </div>
      </div>
    </div>
  )
};

export default ShippingFormComponent;