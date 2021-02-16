import React from 'react'
import ProductList from './ProductList'

const HomePage = (props) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", margin: "25px" }}>
            <ProductList products={props.frontPageBeanies} category={"Beanies"} />
            <ProductList products={props.frontPageFacemasks} category={"Facemasks"} />
            <ProductList products={props.frontPageGloves} category={"Gloves"} />
        </div>
    )
}

export default HomePage