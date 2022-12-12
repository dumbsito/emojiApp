import emojiList from "./emojiList.json"


export const SearchEmojis=(value)=>{
 let response=[]
 let lowerValue=value.toLowerCase(); 
 emojiList.map(item=>{
    if(item.keywords.includes(lowerValue)){
  response.push(item)
    }
 })
 return value===""?response:response.slice(0,24);
}