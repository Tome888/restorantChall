import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { ApiContext, Data } from "../context/ApiContext";
import {Review} from '../context/ApiContext'
// export function AllRest() {
//     const context = useContext(Data);
  
//     if (!context) {
//       return <p>Loading...</p>;
//     }
  
//     const { apiData } = context;
  
//     return (
//         <section>
//           <h2>All Restaurants</h2>
//           <div className="cardContainer">
//             {apiData ? (
//               apiData.map((rest) => (
//                 <Card 
//                   id={rest.id} // Add a unique key prop
//                   image={rest.image} 
//                   businessname={rest.businessname} 
//                   restauranttype={rest.restauranttype} 
//                   amountReviews={rest.reviews} 
//                 />
//               ))
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         </section>
//       );
//     }

export function AllRest() {
    const context = useContext(Data);
    
  
    if (!context) {
      return <p>Loading...</p>;
    }
  
    const { apiData } = context;

    const calculateMedianRating = (reviewsList: Review[]) => {
        // Extract all ratings from reviewsList
        // const ratings = reviewsList.map(review => review.rating);
    
        // // Sort ratings in ascending order
        // ratings.sort((a, b) => a - b);
    
        // const length = ratings.length;
    
        // // Calculate median rating
        // if (length === 0) {
        //   return 0;
        // } else if (length % 2 === 0) {
        //   return (ratings[length / 2 - 1] + ratings[length / 2]) / 2;
        // } else {
        //   return ratings[Math.floor(length / 2)];
        // }
        
        // reviewsList.map((rev, index)=>{
        //     const numberOfRatings = index+1
        //     rev.
        // })
        let arr:number[] = []
        reviewsList.map(rev => {
            if(rev.stars)
            arr.push(rev.stars)
        })
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const theMedian = sum / reviewsList.length
        console.log(theMedian)
        
        return theMedian
      };
   
  
    return (
      <section>
        <h2>All Restaurants</h2>
        <div className="cardContainer">
          {apiData ? (
            apiData.map((rest) => (
              <Card 
                key={rest.id}
                image={rest.image} 
                businessname={rest.businessname} 
                restauranttype={rest.restauranttype} 
                amountReviews={rest.reviews}
                totalRating={calculateMedianRating(rest.reviewsList)} 
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    );
  }