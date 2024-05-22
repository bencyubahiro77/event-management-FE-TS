import { Input } from "@/components/ui/input"

interface InputPorps{
    value:string,
    width:string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type:string,
    required?:boolean
}

const MyInput= ({value,width,onChange,type, required}:InputPorps)=>{
  return(
    <Input 
      value={value}
      style={{ width: width }}
      onChange={onChange}
      type={type}
      required={required}
    />
  )
}

export default MyInput;