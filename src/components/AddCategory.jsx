import { useState } from "react"

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event)=>
    {
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=>
    {
        event.preventDefault();
        if (inputValue.trim().length >= 1)
        {
            onNewCategory(inputValue.trim())
            setInputValue('');
        }
        else
        {
            return;
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange= {(event) => onInputChange(event)}
        />
        <input type="submit" className="submit" value='Buscar gifs'/>
    </form>
  )
}

export
{
    AddCategory
} 