import { MouseEventHandler } from 'react';
import { Button } from "@/components/ui/button"

interface ButtonPorps{
    value:string,
    color:string,
    width:string,
    navigate:MouseEventHandler<HTMLButtonElement>;
}

const MyButton= ({value,color,width,navigate}:ButtonPorps)=>{
  return(
    <Button 
      style={{ backgroundColor: color, width: width }}
      onClick={navigate}
      className='mt-4'
    >
     {value}
    </Button>
  )
}

export default MyButton;