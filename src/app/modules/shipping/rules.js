export const rules = (totalAmount) => {
    return {
        formIsValid: false,
        formControls: {
            name: {
                value: '',
                label: 'Name',
                placeholder: 'What is your name',
                valid: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true
                },
                isRequired: true,
                touched: false,
            },
            address: {
                value: '',
                label: 'Address',
                placeholder: 'What is your address?',
                valid: false,
                validationRules: {
                    minLength: 5,
                    isRequired: true
                },
                isRequired: true,
                touched: false
            },
            email: {
                value: '',
                label: 'Email',
                placeholder: 'What is your email',
                valid: false,
                validationRules: {
                    isRequired: true,
                    isEmail: true
                },
                isRequired: false,
                touched: false
            },
            phone: {
                value: '',
                type: 'phone',
                label: 'Phone',
                placeholder: 'What is your phone',
                valid: false,
                validationRules: {
                    isRequired: true,
                    isPhone: true
                },
                isRequired: false,
                touched: false
            },
            shipping: {
                value: totalAmount < 300 ? 'free shipping' : 'free express shipping',
                label: 'Shipping options',
                placeholder: '',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                },
                options: totalAmount < 300 ? [
                    { value: 'free shipping', cost: 0, displayValue: 'Free shipping' },
                    { value: 'express shipping', cost: 9.99, displayValue: 'Express shipping' },
                    { value: 'courier shipping', cost: 19.99, displayValue: 'Courier shipping' },
                ] : [{ value: 'free express shipping', cost: 0, displayValue: 'Free express shipping' }]
            }
        }
    }
};