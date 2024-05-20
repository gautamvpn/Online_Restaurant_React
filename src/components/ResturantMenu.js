// import { useEffect, useState } from "react";
import { Rating_icon } from "../utils/constant";
import ShimarUI from "./ShimarUI";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
const ResturantMenu = () => {

    const resId = useParams()
    const restaurant =resId;
    const resID = restaurant.resId
    
    // const [resInfo, setResInfo] = useState(null);

    const resInfo = useResturantMenu(resID)
    
    // useEffect(() => {
    //     fetchMenu();
    // }, []);
    
    // const fetchMenu = async () => {
    //    console.log(resID)

    //     const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.34808912&lng=81.7789865&restaurantId=${resID}
    //     &catalog_qa=undefined&query=Sandwich&submitAction=ENTER`

    //     const data = await fetch(url)

    //     const json = await data.json();
    //     setResInfo(json.data)
    //     console.log(json.data)
    // }

      if(resInfo == null)
        {
            <ShimarUI/>
        }

    // console.log(resInfo.cards[2].card.card.info.name)
    const { name, avgRating, cuisines, sla } = resInfo?.cards[2]?.card?.card?.info || {};
    //    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    // console.log(itemCards[0].card.info.name)
    return (
        <div className="m-4 p-4">
            <h1 className="font-bold">{name}</h1>
            <p className="font-serif">{cuisines?.join(', ')}</p>
            <div className="mt-4 flex items-center"><h3 className="flex items-center"> <img className="w-4 mr-2" src={Rating_icon} alt="rating icon" /> {avgRating} : {sla?.slaString}</h3>
            </div>
            <h3 className="font-semibold mt-4 border-b-2 border-gray-400">Menu</h3>
            <ul >
                {itemCards?.map((res) => <li key={res?.card?.info?.id}>{res?.card?.info?.name} - <span className="font-semibold">Rs.{res?.card?.info?.price/100 ||res?.card?.info?.defaultPrice/100} </span> </li>)}
               
                {/* <li>{itemCards[7].card.info.name}</li>
                <li>pizza</li> 
                <li>Burgur</li>
                <li>Diet Cake</li> */}
            </ul>
        </div>
    )
}

export default ResturantMenu;