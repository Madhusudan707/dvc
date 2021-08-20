
import { Status } from "./Status"
export const Aside = () => {
    return (
        <div className='w-full  col-span-3 fixed right-0 space-y-4 bg-red-500  '>
           <div className='flex justify-around m-1 w-full p-2  '>
                <div className='flex justify-around items-center w-52'>
                    <div className='flex  w-12'>
                        <span><i className="fas fa-user fa-2x"></i></span>
                    </div>
                    <div className='flex flex-col w-full  text-sm ml-4 '>
                        <p>Pro</p>
                        <p>Hello, Maddy!</p>
                    </div>
                    <div className='flex '>
                        <span className=" px-2"> <i className="fas fa-bell"></i></span>
                    </div>
                  
                </div>
           </div>
           <Status/>
        </div>
    )
}
