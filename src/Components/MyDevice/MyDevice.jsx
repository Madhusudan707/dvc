import { IconCard} from "./IconCard";


export const MyDevice = () => {
  return (
    <div className='px-12 mt-10'>
      <div className="flex items-center justify-between ">
        <h3>My Device</h3>
        <div className='flex space-x-4'>
          <span>
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
          <span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      </div>
     
        <div className='flex flex-nowrap item-center justify-center space-x-4 overflow-x '>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            <IconCard/>
            
           
        </div>
     
      
     
      
    </div>
  );
};
