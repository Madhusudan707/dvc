

export const DeviceStatus = () => {
    return (
        <div className='   space-y-4 w-24 mt-16'>
            <div className='flex  justify-center '>
                <span className='text-sm'>Airpods Max</span>
            </div>
            <div className='flex justify-around '>
                <span><i className="fab fa-bluetooth-b"></i></span>
                <i className="fas fa-battery-three-quarters fa-rotate-270"></i>
            </div>
            <div className='flex text-sm justify-around  '>
                <span>Mads</span>
                <span>80%</span>
            </div>
        </div>
    )
}
