import React, { useState } from 'react'
import { Input } from './Componentes/Input'

export const Form = () => {
    const  [textInput, setTextInput] = React.useState("Text Button");
    const  [colorInput, setColorInput] = React.useState();
    const  [backgroundColor, setBackgroundColor] = React.useState();
    const  [height, setHeight] = React.useState("200");
    const  [width, setWidth] = React.useState("200");
    const  [border, setBorder] = React.useState();
    const  [boderRadius, setBoderRadius] = React.useState();
    return (
        <form form = "buttonCreate">
                <Input label="Texto"
                       id = "text"
                       valueInput = {textInput}
                       setValueInput = {setTextInput}
                       form = "buttonCreate"
                       type = "text"                />
               
                <Input label="Color"
                       id = "color"
                       valueInput = {colorInput}
                       setValueInput = {setColorInput}
                       form = "buttonCreate"
                       type = "color"                />
                
                <Input label="Background-Color"
                       id = "backgroundColor"
                       valueInput = {backgroundColor}
                       setValueInput = {setBackgroundColor}
                       form = "buttonCreate"
                       type = "color"                />
                       
                <Input label="Height"
                       id = "height"
                       valueInput = {height}
                       setValueInput = {setHeight}
                       form = "buttonCreate"
                       type = "range"
                       min = "0"
                       max = "400"                />{height}
                
                <Input label="Width"
                       id = "width"
                       valueInput = {width}
                       setValueInput = {setWidth}
                       form = "buttonCreate"
                       type = "range"
                       min = "0"
                       max = "400"                />{width}
                
                <Input label="Border"
                       id = "border"
                       valueInput = {border}
                       setValueInput = {setBorder}
                       form = "buttonCreate"
                       type = "number"             />
                
                <Input label="Boder-radius"
                       id = "boderRadius"
                       valueInput = {boderRadius}
                       setValueInput = {setBoderRadius}
                       form = "buttonCreate"
                       type = "range"
                       min = "0"
                       max = "1"
                       step="0.01"                />{boderRadius}

        </form>
    )
}
