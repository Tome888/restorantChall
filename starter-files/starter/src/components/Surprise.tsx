import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { RandomRestaurant } from "../context/ContextRandom";


export function Surprise() {
  const RandomContext = useContext(RandomRestaurant);

  if (!RandomContext) {
    return <p>Loading...</p>;
  }

  const { setRandomNum } = RandomContext;

  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 63);
    setRandomNum(randomNumber);
    console.log(randomNumber)
  };


  return (
    <section className="surpriseWrapper">
      <h2>DON'T KNOW WHAT TO EAT?</h2>
      <Link to={"/surpriseMe"} onClick={handleButtonClick}>Surprise Me!</Link>
    </section>
  );
}