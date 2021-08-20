


export const Status = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center w-full mt-16 '>
                <h1 >Apple Airpods Max</h1>
                <img src='/images/airpod_max.jpg' className='w-36 h-24 mt-8' alt='airpod max'/>
                <div className='absolute top-44'>
                        <div className="rounded-full h-12 w-12 flex items-center justify-center border bg-gray-400">
                        <i className="fab fa-apple fa-2x  "></i>
                            </div>
                </div>
                <h3 className='mt-24'>Hourly Usage</h3>
                <div className='flex'>
                    <img src='/images/hourly_usage.png' alt='hourly usage graph'/>
                </div>
                <h3 className='mt-24'>Usage Limits</h3>
                <div className='flex'>
                    <img src='/images/usage_limits.png' alt='hourly usage graph'/>
                </div>
               
            </div>
        </div>
    )
}
