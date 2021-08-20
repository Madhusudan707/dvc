import { DeviceLogo } from "./DeviceLogo"
import { DeviceStatus } from "./DeviceStatus"
export const IconCard = () => {
    return (
        <div className='flex flex-col w-48 relative h-36 '>
            <img src='/images/airpod_max.jpg' className='w-36 h-24' alt='airpod max'/>
            <div className="">
                <DeviceLogo/>
            </div>
            <div className='flex w-full justify-center'>
                <DeviceStatus/>
            </div>
            
        </div>
    )
}
