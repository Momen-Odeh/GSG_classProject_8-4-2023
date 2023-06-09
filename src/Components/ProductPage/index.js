import React from 'react'
import ProductPreview from '../ProductPreview'
import ProductContainer from '../ProductContainer'


function ProductPage({data}) {
  
  return (
    <>
    <ProductContainer />
    <ProductPreview data={data} secTitle="Related Item" clickable/>
    </>
  )
}

export default ProductPage