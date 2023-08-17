import React from 'react';
import { SAppInput } from './styled';

const AppInput = (props) => {
    const {
        label,
        theme,
        isInverted,
        errorTitle,
        ...otherProps
    } = props
    return (
        <SAppInput.Container>
            {label && (
                 <SAppInput.Label>
                 {label}
             </SAppInput.Label>
            )}
            <SAppInput.Input
            isInverted={isInverted}
            theme={theme}
            {...otherProps}
            />
            {errorTitle && (
                <SAppInput.Error>
                    {errorTitle}
                </SAppInput.Error>
            )}
        </SAppInput.Container>
    );
};

export default AppInput;