import React from 'react'

function Select({label, id,valueInput, setValueInput, form, ...props}) {
    function handleChange(event){

        setValueInput(event.target.value)
    }
    return (
        <fieldset>
            <label htmlFor = {id} form = {form} >{label}</label>
            <select value = {valueInput}
                   onChange={handleChange}
                   id = {id}
                   name = {id}
                   {...props}>
                       <option value = "Arial" > Arial </option>
                       <option value = "serif" > serif </option>
                       <option value = "Helvetica" > Helvetica </option>

            </select>
        </fieldset>
    )
}

export default Select
