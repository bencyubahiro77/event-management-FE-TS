import { Input } from "@/components/ui/input"

interface InputPorps{
    value?:string,
    width:string,
}

const MyInput= ({value,width}:InputPorps)=>{
  return(
    <Input 
      value={value}
      style={{ width: width }}
    />
  )
}

export default MyInput;