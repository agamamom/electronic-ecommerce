
import React from 'react';

const FormInput = ({ label, ...otherProps }) => {
    return (
        // <div className='group'>
        //     <input className='form-input' {...otherProps} />
        //     {label && (
        //         <label
        //             className="form-input-label"
        //         >
        //             {label}
        //         </label>
        //     )}
        // </div>
        <div className='form'>
            <input className='form__input' {...otherProps} placeholder=" " />

            <label className="form__label">
                {label}
            </label>

        </div>
    );
};

export default FormInput;