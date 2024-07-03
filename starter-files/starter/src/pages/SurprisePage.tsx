import { useContext, useState } from "react";
import { RandomRestaurant } from "../context/ContextRandom";
import { Data } from "../context/ApiContext";

export function SurprisePage(){
    const RandomContext = useContext(RandomRestaurant);
    const context = useContext(Data);
    const [review, setReview]= useState({
        id: undefined,
        author: undefined,
        comment: undefined,
        stars: undefined
    })

    if (!context) {
        return <p>Loading...</p>;
    }
    if (!RandomContext) {
        return <p>Loading...</p>;
    }
      const { apiData } = context;
      const { randomNumb } = RandomContext;

      const setReviewFunc = async (idRestaurant: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const url = `http://localhost:5001/restaurants/${idRestaurant}`;
      
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
          });
      
          if (!response.ok) {
            throw new Error('Failed to update restaurant');
          }
      
          const updatedData = await response.json();
          console.log('Restaurant updated:', updatedData);
          // Optionally, handle success or update UI here
        } catch (error) {
          console.error('Error updating restaurant:', error);
          // Handle error, show message, etc.
        }
      };

    return(
        <section>
            <h2>{apiData && apiData[randomNumb].businessname}</h2>
            {
                <div>
                <img src={apiData? apiData[randomNumb].image: ''} alt="" />
                <p>{apiData && apiData[randomNumb].phone}</p>
                <p>{apiData && apiData[randomNumb].email}</p>
                <p>{apiData && apiData[randomNumb].address}</p>
                </div>
            }
            <h2>REVIEW FORM</h2>
            <form action="submit">
                <label>Name</label>
                <input type="text" />
                <label>Comment</label>
                <input type="text" />
                <label >Stars:</label>
                <input type="range" id="star-slider" name="star-slider" min="0" max="5" step="0.5" defaultValue={0}></input>
                {/* <button onClick={(event) => {if (apiData && apiData[randomNumb].id) {setReviewFunc(apiData[randomNumb].id, event);}}}>
                    Leave a review</button> */}
            </form>
        </section>
    )
}