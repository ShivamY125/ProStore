import React from 'react'
import { Button } from '@/components/ui/button'
const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                    text-white text-4xl font-extrabold p-10 rounded-2xl shadow-2xl">
      Tailwind is Working 🎉
      <Button variant="ghost">ShadCN is Also Working</Button>
    </div>
  )
}

export default Home