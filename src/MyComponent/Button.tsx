import { MouseEventHandler } from 'react';
import { Button } from "@/components/ui/button"
import Loader from "@/utils/Loader"

interface ButtonPorps{
    value:string,
    color:string,
    width:string,
    onClick:MouseEventHandler<HTMLButtonElement>;
    loading?:boolean,
    disabled?:boolean
}

const MyButton= ({value,color,width,onClick, loading, disabled}:ButtonPorps)=>{
  return(
    <Button 
      style={{ backgroundColor: color, width: width }}
      onClick={onClick}
      disabled={disabled}
      className='mt-4'
    >
     {loading? < Loader/>:value}
    </Button>
  )
}

export default MyButton;