import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from './AppTextInput';
import ErrorMessages from './ErrorMessages';

function AppFormField({name,width,height,...otherProps}) {
const {setFieldTouched,handleChange,errors,touched,values}=   useFormikContext();
    return (
        <>
             <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                value={values[name]}
                style={{flex:1}}
                width={width}
                height={height}
                placholderTextcolor="white"
                {...otherProps}

                 
            />
            {/* <AppText style={{color:"red",}}>{errors.email}</AppText> */}
            <ErrorMessages error={errors[name]}  visible={touched[name]}/>
        </>
    );
}

export default AppFormField;