import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ModeToggle from './mode-toggle'
import { UserIcon,ShoppingCart } from 'lucide-react'
import { Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription } from '@/components/ui/sheet'
import { EllipsisVerticalIcon } from 'lucide-react'
const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
        <nav className="hidden md:flex w-full max-w-xs gap-1">
                  {/* Toggle Mode */}
                              <ModeToggle />
                            <Button asChild variant='ghost'>
                                <Link href='/cart'>
                                <ShoppingCart /> Cart
                                </Link>
                            </Button>
            
                             <Button asChild>
                                <Link href='/sign-in'>
                                <UserIcon/> Sign-in
                                </Link>
                            </Button>
        </nav>


        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                   <EllipsisVerticalIcon/>
                </SheetTrigger>
                 <SheetContent className='flex flex-col items-start ml-3 pl-4'>
                    <SheetTitle className='m-2 pt-2'>
                        Menu
                    </SheetTitle>
                     <ModeToggle />
                            <Button asChild variant='ghost'>
                                <Link href='/cart'>
                                <ShoppingCart /> Cart
                                </Link>
                            </Button>

                             <Button asChild>
                                <Link href='/sign-in'>
                                <UserIcon/> Sign-in
                                </Link>
                            </Button>
            
                    <SheetDescription></SheetDescription>
                 </SheetContent>
            </Sheet>
        </nav>
    </div>
  )
}

export default Menu