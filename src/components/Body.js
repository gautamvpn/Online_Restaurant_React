import ResturantCard,{WithPromotedLabel} from "./ResturantCard";
import { resObj } from "../utils/mockData";
import { useEffect, useState,useContext } from "react";
import ShimarUI from "./ShimarUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    let [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setOfFilteredResturants] = useState([]);
    const [searchText, setSearchText] = useState('');

    const ResturantsCardPromoted = WithPromotedLabel(ResturantCard)

    useEffect(() => {
        fetchData();
        // console.log('use Effect triggered')
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4464595&lng=81.7789865&collection=83656&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null#")

        const json = await data.json();
        // console.log(json)
        // console.log(json.data.cards)
        setListOfResturants(json?.data?.cards)
        setOfFilteredResturants(json?.data?.cards)
    }

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false)  return(
        <div> <h2>Opss!! Please check your internet connection, and try again.</h2></div>
    )

    const {loggedInUser,setUserName} = useContext(UserContext)


    return listOfResturants.length == 0 ? <ShimarUI /> : (
        <div className="body">
            <div className="filter flex ">

                <div className="m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
                    <button className="px-4 py-1 m-4 bg-green-100 rounded-lg" onClick={()=>{
                       const filteredList =  listOfResturants.filter((res)=>{
                          return res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setOfFilteredResturants(filteredList)
                    }}>search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className='px-4 py-1 bg-gray-100 rounded-lg' onClick={() => {
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

                <div className="m-4 p-4 flex items-center">
                <label>UserName</label>
                 <input className="border border-black p-2"
                  value={loggedInUser}
                  onChange={(e)=> setUserName(e.target.value)} />
                </div>



            </div>
            <div className="flex flex-wrap">
                {/* {listOfResturants.map((Resturant)=> <ResturantCard key={Resturant.info.id} resData={Resturant}/> ) } */}
                {filteredResturants.map((Resturant) => {
                    if (Resturant?.card && Resturant?.card?.card?.info) {
                        {/* console.log(Resturant.card.card); // Log the card object */ }
                        return (
                           <Link  key={Resturant?.card?.card?.info?.id} to={"/restaurants/"+Resturant?.card?.card?.info?.id}> 
                           {
                            Resturant?.card?.card?.info?.avgRating > 4.2 ? (<ResturantsCardPromoted resData={Resturant?.card?.card} />) : (<ResturantCard resData={Resturant?.card?.card} />)
                           }
                            </Link>
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