import { saveAs } from "file-saver";
import Header from "../component/Header";

export const clickToClip = (hexaColor, isCopieds, setIsCopieds) => {
  navigator.clipboard.writeText(hexaColor);
  const isnewCopieds = isCopieds.map((isCopied) =>
    isCopied.hex === hexaColor
      ? { ...isCopied, isCopied: true }
      : { ...isCopied }
  );
  setIsCopieds(isnewCopieds);
};
export const downloadUiPattern = (uiImg) => {
  saveAs(uiImg, "image.png");
};

export async function saveToFileHtml(pageCodeHtml) {
  // eslint-disable-next-line no-undef
  const handle = await showSaveFilePicker({
    suggestedName: "project.html",
    types: [
      {
        description: "HTML",
        accept: { "text/html": [".html"] },
      },
    ],
  });
  const writable = await handle.createWritable();
  await writable.write(`<div>
  <!-- Please make sure to setup taliwnd on your project -->${pageCodeHtml}</div>`);
  writable.close();
}
export async function saveToFileReact(pageCodeReact) {
  // eslint-disable-next-line no-undef
  const handle = await showSaveFilePicker({
    suggestedName: "comp.jsx",
    types: [
      {
        description: "jsx",
        accept: { "text/jsx": [".jsx"] },
      },
    ],
  });
  const writable = await handle.createWritable();
  await writable.write(`export default function Example() {
    return (
        //Please make sure to setup taliwnd on your project
        ${pageCodeReact}
     
    )
  }`);
  writable.close();
}
export async function saveToFileVue(pageCodeVue) {
  // eslint-disable-next-line no-undef
  const handle = await showSaveFilePicker({
    suggestedName: "index.vue",
    types: [
      {
        description: "vue",
        accept: { "text/vue": [".vue"] },
      },
    ],
  });
  const writable = await handle.createWritable();
  await writable.write(`<template>
  <!-- Please make sure to setup taliwnd on your project -->
  ${pageCodeVue}
 
</template>`);
  writable.close();
}

export const filterComponents = (components, name, setFilterSearch) => {
  const componentsFilter = components.filter((component) =>
    component.name.toLowerCase().includes(name.toLowerCase())
  );
  setFilterSearch(componentsFilter);
};

export const MakePage = (pageCodes, setPageCodes, codes) => {
  if (pageCodes.length > 0) {
    setPageCodes([
      `<div> ${pageCodes[0]} ${codes[0].code} </div>`,
      `<div> ${pageCodes[1]} ${codes[1].code} </div>`,
      `<div> ${pageCodes[2]} ${codes[2].code} </div>`,
    ]);
  } else {
    setPageCodes([codes[0].code, codes[1].code, codes[2].code]);
  }
};
