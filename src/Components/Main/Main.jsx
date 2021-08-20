
import { Search,Card,DailyUsage,MyDevice } from ".."

export const Main = () => {
    return (
        <div className='col-span-9 ml-24'>
            <div className='flex items-center justify-between px-12 w-full'>
                <div className='flex justify-between'>
                    <h1>My Dashboard</h1>
                </div>
                <div>
                    <Search/>
                </div>
            </div>
            <div className='px-12'>
                <h1>Overview</h1>
            </div>
            <div className='flex '>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <DailyUsage/>
            <MyDevice/>
           
            
        </div>
    )
}
