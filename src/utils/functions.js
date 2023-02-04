import { saveAs } from "file-saver";
export const clickToClip=(hexaColor,isCopieds,setIsCopieds)=>{
    navigator.clipboard.writeText(hexaColor);
    const isnewCopieds=isCopieds.map((isCopied)=>isCopied.hex===hexaColor?{...isCopied,isCopied:true}:{...isCopied})
    setIsCopieds(isnewCopieds)

}
export const downloadUiPattern=(uiImg)=>{
    saveAs(uiImg, "image.png")
}