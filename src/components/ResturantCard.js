import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { res_cart } from "../utils/constant";

const ResturantCard = ({ resData }) => {
    // Provide a default empty object for resData.info to avoid destructuring from undefined
    // console.log(resData.info)
    const {loggedInUser} = useContext(UserContext)
    const {
        name = "Unknown Restaurant",
        cuisines = [],
        avgRating = "No rating",
        cloudinaryImageId = "",
        costForTwo = "Cost not available",
        sla = {}
    } = resData?.info || {};

    // const imageUrl = `${res_cart}${cloudinaryImageId}`;
    // console.log('Image URL:', imageUrl); // Log the URL to ensure it's correct
    const temp_image_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200">
            <img className="rounded-lg " src={temp_image_url+cloudinaryImageId} alt={`${name} logo`} />
            {/* <img className="rounded-lg " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dlx59kcbntvnlf8igifw" alt={`${name} logo`} /> */}
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString || "Delivery time not available"}</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    );
};

// Creating here a HIGHER ORDER COMPONENTS
export const WithPromotedLabel = (ResturantCard)=>{

    //it's return the components with extra features
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;