import { res_cart } from "../utils/constant"
const ResturantCard = (props)=>{
    const {resData} = props
    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,sla} = resData?.info
    return(
       <div className="res-card">
         
          <img className="res-logo" src={res_cart+cloudinaryImageId} 
          alt="" /> 
         
         <h3>{name}</h3>
         <h4>{cuisines.join(',')}</h4>
         <h4>{avgRating} Rating</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla?.slaString}</h4>
       </div>
    )
 }
 export default ResturantCard;