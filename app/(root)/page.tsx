import React from 'react'
import ProductList from '@/components/shared/product/product-list'
import { GetLatestProduct } from '@/lib/actions/product.actions'
//const delay=(ms)=> new Promise((resolve)=> setTimeout(resolve,ms));

const HomePage = async () => {
//await delay(5000);
  
  const latestProduct = await GetLatestProduct();
  
  return (
    
   <>
   <ProductList data={latestProduct} title='Newest Arrivals'/>
   </>
  )
}

export default HomePage