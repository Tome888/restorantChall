import { Link } from "react-router-dom";

interface CardProps {
    image: string;
    businessname: string;
    restauranttype: string;
    amountReviews: number;
    totalRating?: number
    id?: string
  }
  
  export const Card: React.FC<CardProps> = ({ image, businessname, restauranttype, amountReviews, totalRating, id }) => {
    return (
      <div className="card">
        <Link to={`/restaurant/${id}`} className="restaurant-link">
        <img src={image} alt={businessname} />
        <h3>{businessname}</h3>
        <p>Type: {restauranttype}</p>
        <p>rating - {isNaN(totalRating!) ? '' : totalRating},</p>
      <p>based on {amountReviews} reviews</p>
      </Link>
      </div>
    );
  }