import React from 'react'

export const DailyUsage = () => {
    return (
        <div className='px-12 mt-10'>
            <div className='flex items-center justify-between '>
                    <h3>Daily Usage</h3>
                    <div className='flex p-4 space-x-4'>
                        <span className=' '>Sort By</span>
                        <span>Week</span>
                    </div>
                   
                    
            </div>
            <div className='flex flex-col '>
                    <img src='/images/dailyusage.png'  alt='chart'/>
                    </div>
        </div>
    )
}
