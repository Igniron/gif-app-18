import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategories = (newCategory)=> 
  {
    if (categories.includes(newCategory))
    {
      return;
    }
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory onNewCategory={onAddCategories}/>
        
        {
          categories.map(category => 
            (
              <GifGrid key={category} category={category}/>
            )
          )
        }
    </>
  )
}

export default GifExpertApp