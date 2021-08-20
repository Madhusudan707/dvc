import React from 'react'

export const Card = () => {
    return (
        <div className='flex px-12 mt-8 w-full'>
            <div className='flex w-72 h-24 border items-center justify-between p-2'>
                <div className="rounded-full h-16 w-16 flex items-center justify-center border">78%</div>
                <div className='flex flex-col items-center text-sm'>
                    <span>Daily Usage</span>
                    <p>8h 41m</p>
                </div>
            </div>
            
        </div>
    )
}
