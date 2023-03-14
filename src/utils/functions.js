import { saveAs } from "file-saver";
import Header from '../component/Header';

export const clickToClip=(hexaColor,isCopieds,setIsCopieds)=>{
    navigator.clipboard.writeText(hexaColor);
    const isnewCopieds=isCopieds.map((isCopied)=>isCopied.hex===hexaColor?{...isCopied,isCopied:true}:{...isCopied})
    setIsCopieds(isnewCopieds)

}
export const downloadUiPattern=(uiImg)=>{
    saveAs(uiImg, "image.png")
}


 export async function saveToFileHtml() {
    // eslint-disable-next-line no-undef
    const handle = await showSaveFilePicker({
        suggestedName: 'project.html',
        types: [{
              description: 'HTML',
              accept: {'text/html': ['.html']},
          }]
    });
    const writable = await handle.createWritable();
    await writable.write(

    );
    writable.close();
} 
export async function saveToFileReact() {
    // eslint-disable-next-line no-undef
    const handle = await showSaveFilePicker({
        suggestedName: 'comp.jsx',
        types: [{
              description: 'jsx',
              accept: {'text/jsx': ['.jsx']},
          }]
    });
    const writable = await handle.createWritable();
    await writable.write(    );
    writable.close();
} 
export async function saveToFileVue() {
    // eslint-disable-next-line no-undef
    const handle = await showSaveFilePicker({
        suggestedName: 'index.vue',
        types: [{
              description: 'vue',
              accept: {'text/vue': ['.vue']},
          }]
    });
    const writable = await handle.createWritable();
    await writable.write();
    writable.close();
} 

export const filterComponents=(components,name,setFilterSearch)=>{
  
  const componentsFilter=components.filter((component)=>component.name.toLowerCase().includes(name.toLowerCase()))
  setFilterSearch(componentsFilter)
  

}

