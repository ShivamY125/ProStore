import React from 'react'
import { cn } from '@/lib/utils';
export const ProductPrice = ({value, className}: {value:number; className?:string;}) => {
  
    // Ensure two decimal Places.
    const StringValue = value.toFixed(2);
   // get Int and then float.
    const [intVal, floatVal] =  StringValue.split('.');
    return (
    <p className={cn('text-2xl', className)}>
        <span className='text-xs align-super'>$</span>
        {intVal}
        <span className='text-xs align-super'>.{floatVal}</span>
    </p>
  )
}

 