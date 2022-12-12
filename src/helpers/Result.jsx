import { Item } from "../components/Item";
import {SearchEmojis} from "./SearchEmojis"
export  function Result({valueEmoji,darkMode}) {
    const arrayEmojis=SearchEmojis(valueEmoji)
    console.log(arrayEmojis);
  return (
    <section className="container results">
       {
        arrayEmojis&& arrayEmojis.map(item=>(
            <Item
                key={item.title}
                title={item.title}
                emoji={item.symbol}   
                darkMode={darkMode}         
            />
        ))
       }
    </section>
  )
}
