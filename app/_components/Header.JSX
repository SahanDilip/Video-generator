
'use client'
import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import Link from 'next/link';


export default function Header() {
    const {user} = useAuthContext()

  return (
    <div className='p-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <Image src={'/logo.svg'}
                alt='logo'
                width={40}
                height={40}
            />
            <h2 className='text-2xl font-bold'>Video Gen</h2>
        </div>
        <div>
            {!user?(
            <Authentication>
                <Button>
                    Get Started
                </Button>
            </Authentication>
            ):(<div className='flex items-center gap-3'>
                <Link href={'/dashboard'}>
                    <Button>
                        DashBoard
                    </Button>
                </Link>
                {user?.pictureURL && <Image src={user?.pictureURL} alt="userImage" width={40} height={40} className='rounded-full'/>}
            </div>
            )}
        </div>
    </div>
  )
}
