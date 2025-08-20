import React from 'react';
import AppText from './AppText';


function ErrorMessages({error,visible}) {
    if (!visible || !error) return null;
    return (
        <AppText style={{color:"red",}}>
            {error}
        </AppText>
    );
}




export default ErrorMessages;