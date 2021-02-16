import React from 'react'
import ProductList from './ProductList'

const CategoryPage = (props) => {
  return (
    <div>
        <ProductList products={props.categoryProducts} category={props.category} />
    </div>
  )
}

export default CategoryPage