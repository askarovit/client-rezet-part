import React from 'react';
import { useMediaQuery } from 'react-responsive'

export const ScreenResolutionContainer = (props) => {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    return (
        <>
            {
                React.cloneElement(props.children, { isDesktop })
            }
        </>
    )
};