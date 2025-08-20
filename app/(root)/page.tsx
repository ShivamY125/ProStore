import React from 'react'
import { SampleData } from '@/db/sample-data'
import ProductList from '@/components/shared/product/product-list'
//const delay=(ms)=> new Promise((resolve)=> setTimeout(resolve,ms));

const HomePage = () => {
//await delay(5000);
  
  return (
    
   <>
   <ProductList data={SampleData.products} title='Newest Arrivals' limit={4}/>
   </>
  )
}

export default HomePage