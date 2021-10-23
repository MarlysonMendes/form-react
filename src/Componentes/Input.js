import React from 'react'

export const Input = ({label, id,valueInput, setValueInput, form, type, ...props}) => {
    function handleChange(event){

        setValueInput(event.target.value)
    }
    return (
        <fieldset>
            <label style={{display: "block"}} htmlFor = {id} form = {form} >{label}</label>
            <input value = {valueInput}
                   onChange={handleChange}
                   type = {type}
                   id = {id}
                   name = {id}
                   {...props}

            />
        </fieldset>
    )
}
