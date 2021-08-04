import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories }/>

      <hr></hr>
       <ul>
        {
          categories.map((category, index) => (
            <GifGrid key={category} category={category}/>
          ))
        }
      </ul>
    </>
  )
}

export default GifExpertApp