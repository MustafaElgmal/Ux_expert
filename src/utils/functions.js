import { saveAs } from "file-saver";
import Header from '../component/Header';
import BayesClassifier from "./Naive";
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
    await writable.write();
    writable.close();
} 
export async function saveToFileReact(pagecode) {
    // eslint-disable-next-line no-undef
    const handle = await showSaveFilePicker({
        suggestedName: 'comp.jsx',
        types: [{
              description: 'jsx',
              accept: {'text/jsx': ['.jsx']},
          }]
    });
    const writable = await handle.createWritable();
    await writable.write(pagecode);
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
    await writable.write(document.body.parentNode.innerHTML);
    writable.close();
} 

/* Naive*/
BayesClassifier = require('../bayes-classifier');
var classifier = new BayesClassifier();
/**/
let medical = [
  'medical','doctor','patients','clinic','nurse','hospital'
  
];

let food = [
  'pizza','humburger'

];

classifier.addDocuments(medical, 'medical');
classifier.addDocuments(food, 'food');
/*trainnig part */
classifier.train();
/* run classifier to see result */
console.log(classifier.classify('i need to create medical system'));

