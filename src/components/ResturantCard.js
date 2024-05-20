import { res_cart } from "../utils/constant";

const ResturantCard = ({ resData }) => {
    // Provide a default empty object for resData.info to avoid destructuring from undefined
    const {
        name = "Unknown Restaurant",
        cuisines = [],
        avgRating = "No rating",
        cloudinaryImageId = "",
        costForTwo = "Cost not available",
        sla = {}
    } = resData?.info || {};

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200">
            <img className="rounded-lg " src={`${res_cart}${cloudinaryImageId}`} alt={`${name} logo`} />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString || "Delivery time not available"}</h4>
        </div>
    );
};

export default ResturantCard;