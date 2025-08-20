'use client'
import React from 'react'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const NotfoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={48} height={48} priority={true}/>
        
        <div className="p-6 rounded-large shadow-md text-center">
            <h1 className="text-3xl font-bold mb-4">Not Found</h1>
            <p className="text-destructive">Could not found the Page.</p>
            
            <Button variant='outline' className='mt-4 ml-2' onClick={()=> (window.location.href = '/')}>Back to Home</Button>
      
        </div>
      
    </div>
  )
}

export default NotfoundPage