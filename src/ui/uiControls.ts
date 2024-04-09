import { dimensions } from "./ui";

export let displays:any ={
  active:"loading"
}

export function getImageAtlasMapping(data?: ImageAtlasData): number[] {
    if (!data) return []
  
    const {
      atlasWidth,
      atlasHeight,
      sourceWidth,
      sourceHeight,
      sourceTop,
      sourceLeft,
    } = data
  
    return [
      sourceLeft / atlasWidth, (atlasHeight - sourceTop - sourceHeight) / atlasHeight,
      sourceLeft / atlasWidth, (atlasHeight - sourceTop) / atlasHeight,
      (sourceLeft + sourceWidth) / atlasWidth, (atlasHeight - sourceTop) / atlasHeight,
      (sourceLeft + sourceWidth) / atlasWidth, (atlasHeight - sourceTop - sourceHeight) / atlasHeight,
    ]
  }
  
  export type ImageAtlasData = {
    atlasWidth: number;
    atlasHeight: number;
    sourceWidth: number;
    sourceHeight: number;
    sourceLeft: number;
    sourceTop: number;
  };

  export function isMenuUIShown(){
    return displays.active !== ""
}

export function addLineBreak(text:string, big:number, small:number){
  return lineBreak(text, big, small)
}

function lineBreak(text: string, big:number, small:number): string {
  let max = small
  if(dimensions.width > 1500){
    max = big
  }
  const words = text.split(' ');
  let currentLine = '';
  const lines = [];

  for (const word of words) {
    if (currentLine.length + word.length + 1 <= max) {
      currentLine += `${word} `;
    } else {
      lines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  }
  lines.push(currentLine.trim());
  return lines.join('\n');
}

export function sizeFont(large:number, small:number){
  return dimensions.width > 1500 ? large : small
}