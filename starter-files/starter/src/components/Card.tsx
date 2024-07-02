import { Link } from "react-router-dom";

// interface CardProps{
//     image: string,
//     businessname: string,
//     restauranttype: string,
//     totalRating?: number
//     amountReviews: number
//     id: string
// }
// // interface ReviewArr{
    
// // }


// export function Card({id, image, businessname, restauranttype, totalRating, amountReviews}: CardProps){
//     return(
//         <Link to={'/restaurant'} key={id}>
//         <div>
//             <img src={image} alt="" />
//             <h4>{businessname}</h4>
//             <p>{restauranttype}</p>

//             <p>rating - {totalRating},</p>
//             <p>based on {amountReviews} reviews</p>
//         </div>
//         </Link>
//     )
// }

interface CardProps {
    image: string;
    businessname: string;
    restauranttype: string;
    amountReviews: number;
    totalRating?: number
  }
  
  export const Card: React.FC<CardProps> = ({ image, businessname, restauranttype, amountReviews, totalRating }) => {
    return (
      <div className="card">
        <img src={image} alt={businessname} />
        <h3>{businessname}</h3>
        <p>Type: {restauranttype}</p>
        <p>rating - {totalRating},</p>
      <p>based on {amountReviews} reviews</p>
      </div>
    );
  }