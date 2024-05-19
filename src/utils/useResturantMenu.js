import { useEffect, useState } from "react";

const useResturantMenu = (resID) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetechData();
    }, [])

    const fetechData = async () => {
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.34808912&lng=81.7789865&restaurantId=${resID}
        &catalog_qa=undefined&query=Sandwich&submitAction=ENTER`

        const data = await fetch(url);
        const json = await data.json();
        
        setResInfo(json.data)
        console.log(json.data)
    }


    return resInfo;
}

export default useResturantMenu;