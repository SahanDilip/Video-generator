import React from 'react'
import {Button} from '@/components/ui/button'

export default function Hero() {
  return (
    <div className=' px-10 flex flex-col justify-center items-center mt-24 md:px-20 lg:px-36 xl:px-48'>
        <div className='text-6xl font-bold text-center'>
            AI Youtube Short Video Generator
        </div>
            <p className='mt-4 text-2xl text-center text-gray-500'>
            Create short videos with AI in seconds, effortlessly transforming your ideas into engaging visual content 🎬✨. With cutting-edge AI technology 🤖, you can quickly generate professional-grade videos, no prior video editing experience needed 🎥.</p>
            <div className='mt-7 gap-8 flex'>
                    <Button variant='secondary'>
                        Explore
                    </Button>
                    <Button>
                        Get Started
                    </Button>
            </div>
    </div>
  )
}
