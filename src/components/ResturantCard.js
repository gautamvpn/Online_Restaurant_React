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
        <div className="res-card">
            <img className="res-logo" src={`${res_cart}${cloudinaryImageId}`} alt={`${name} logo`} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString || "Delivery time not available"}</h4>
        </div>
    );
};

export default ResturantCard;