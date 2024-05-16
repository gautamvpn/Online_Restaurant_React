import ResturantCard from "./ResturantCard";
import { resObj } from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimarUI from "./ShimarUI";
const Body = () => {
    let [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setOfFilteredResturants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
        // console.log('use Effect triggered')
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4464595&lng=81.7789865&collection=83656&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null#")

        const json = await data.json();
        // console.log(json)
        // console.log(json.data.cards[3].card.card.info.id)
        setListOfResturants(json?.data?.cards)
        setOfFilteredResturants(json?.data?.cards)
    }



    return listOfResturants.length == 0 ? <ShimarUI /> : (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
                    <button onClick={()=>{
                       const filteredList =  listOfResturants.filter((res)=>{
                          return res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setOfFilteredResturants(filteredList)
                    }}>search</button>
                </div>

                <button className='res-btn' onClick={() => {
                    // listOfResturants = listOfResturants.filter((res) =>  res.card.card.info.avgRating > 4.4)

                     listOfResturants = listOfResturants.filter((res) => {
                        if (res.card && res.card.card.info) {
                            console.log(res.card.card.info.avgRating)
                            return res.card.card.info.avgRating > 4.2;
                        }
                        return false;
                    })
                    // listOfResturants = listOfResturants.filter((res) => {
                    //     console.log(res);
                    //     return res.card?.card?.info?.avgRating > 4.4;
                    // });

                    setOfFilteredResturants(listOfResturants)

                    // console.log(listOfResturants)
                }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {/* {listOfResturants.map((Resturant)=> <ResturantCard key={Resturant.info.id} resData={Resturant}/> ) } */}
                {filteredResturants.map((Resturant) => {
                    if (Resturant.card && Resturant.card.card.info) {
                        {/* console.log(Resturant.card.card); // Log the card object */ }
                        return (
                            <ResturantCard
                                key={Resturant.card.card.info.id}
                                resData={Resturant.card.card}
                            />
                        );
                    }
                    return null; // Optionally handle the case where card or card.card is undefined
                })}
                {/* {listOfResturants.slice(3).map((Resturant)=> console.log(Resturant.card.card) ) } */}
            </div>
        </div>
    )
}

export default Body;