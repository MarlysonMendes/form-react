import React from 'react'
import { Input } from './Componentes/Input'
import Select from './Componentes/Select';
import { TextArea } from './Componentes/TextArea';

export const Form = () => {
    const  [textInput, setTextInput] = React.useState("Text Button");
    const  [colorInput, setColorInput] = React.useState("#ffffff");
    const  [backgroundColor, setBackgroundColor] = React.useState("#000000");
    const  [height, setHeight] = React.useState("50");
    const  [width, setWidth] = React.useState("100");
    const  [border, setBorder] = React.useState(3);
    const  [boderRadius, setBoderRadius] = React.useState("0");
    const  [fontSize, setFontSize] = React.useState("12");
    const  [fontFamily, setFontFamily] = React.useState("Arial");
    const  [cssGerado, setCssGerado] = React.useState("2");
       
       React.useEffect(() => {

              const css = `
              .btn {
              background-color: ${backgroundColor};
              color: ${colorInput};
              height: ${height}px;
              width: ${width}px;
              border: ${border}px solid ${backgroundColor};
              border-radius: ${boderRadius}px;
              font-size: ${fontSize}px;
              font-family: ${fontFamily};
              }
              `;
              setCssGerado(css);
       }, [textInput, colorInput, backgroundColor, height, width, border, boderRadius, fontSize, fontFamily, cssGerado]);
    return (
        <form style={{width: "50%"}} form = "buttonCreate">
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
                       max = "400"                /> {height}
                
                <Input label="Width"
                       id = "width"
                       valueInput = {width}
                       setValueInput = {setWidth}
                       form = "buttonCreate"
                       type = "range"
                       min = "0"
                       max = "400"                /> {width}
                
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
                       max = "100"
                       step="0.1"                /> {boderRadius}

              <Input label="Font-Size"
                       id = "fontSize"
                       valueInput = {fontSize}
                       setValueInput = {setFontSize}
                       form = "buttonCreate"
                       type = "number"             />
              
              <Select label="Font-Family"
                       id = "fontFamily"
                       valueInput = {fontFamily}
                       setValueInput = {setFontFamily}
                       form = "buttonCreate"     />
              <TextArea disabled = {true}
                       label="CSS Gerado"
                       id = "cssGerado"
                       valueInput = {cssGerado}
                       setValueInput = {setCssGerado}
                       form = "buttonCreate" />


              <button disabled="true"  style={{margin: "30px", 
                            color: colorInput , 
                            backgroundColor: backgroundColor, 
                            height: height+"px", 
                            width: width+"px", 
                            border: border+"px solid", 
                            borderRadius: boderRadius+"%", 
                            fontSize: fontSize+"px", 
                            fontFamily: fontFamily}}>{textInput}</button> 
              

        </form>
    )
}
