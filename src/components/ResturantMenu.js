// import { useEffect, useState } from "react";
import { Rating_icon } from "../utils/constant";
import ShimarUI from "./ShimarUI";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
const ResturantMenu = () => {

    // const resId = useParams()
    const { resId } = useParams();
    // const restaurant = resId;
    // const resID = restaurant.resId
    const [showIndex, setShowIndex] = useState(0)

    // const [resInfo, setResInfo] = useState(null);

    const resInfo = useResturantMenu(resId)


    if (resInfo == null) {
        return <ShimarUI />
    }

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e => e?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)

    // console.log(resInfo.cards[2].card.card.info.name)
    const { name, avgRating, cuisines, sla } = resInfo?.cards[2]?.card?.card?.info || {};
    //    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    // console.log(itemCards[0].card.info.name)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(', ')}</p>

            {categories.map((category, index) => <RestaurentCategory key={category?.card?.card.title} data={category?.card?.card} 
            showItems={index === showIndex ? true : false}
            setShowIndex = {()=> setShowIndex(index)}
             />)}
        </div>
    )
}

export default ResturantMenu;