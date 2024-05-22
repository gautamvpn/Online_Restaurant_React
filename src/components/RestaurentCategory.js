import { useState } from "react"
import ItemList from "./ItemList"

const RestaurentCategory = ({data,showItems,setShowIndex})=>{
  // console.log(data)
  // const[showItems,setShowItems] = useState(false)

  const handleClick = ()=>{
    setShowIndex()
  }
    return(
      <div>
        <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">{data.title} ({data.itemCards.length})</span>
          <span>⬇️</span>
        </div>
       { showItems && <ItemList items= {data.itemCards}/> }
        </div>
        </div>
    )
}

export default RestaurentCategory