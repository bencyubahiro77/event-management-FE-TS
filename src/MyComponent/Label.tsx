import { Label } from "@/components/ui/label"

interface LabelPorps{
    value?:string,
}

const MyLabel= ({value}:LabelPorps)=>{
  return(
    <Label className="pb-4">
     {value}:
    </Label>
  )
}

export default MyLabel;