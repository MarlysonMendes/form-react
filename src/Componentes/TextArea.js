import React from 'react'

export const TextArea = ({label, setValueInput, id,valueInput, form, type, ...props}) => {

    return (
        <fieldset>
            <label style={{display: "block"}} htmlFor = {id} form = {form} >{label}</label>
            <textarea value = {valueInput}
                   id = {id}
                   name = {id}
                   style ={{height: "200px", width: "400px"}}
                   {...props}
                   />
        </fieldset>
    )
}
