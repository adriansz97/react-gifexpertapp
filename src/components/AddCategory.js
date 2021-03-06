import React, {useState} from 'react'

const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('Hola mundo');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(category => [ inputValue,...category])
      setInputValue('');
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}/>
    </form>
  )
}

export default AddCategory