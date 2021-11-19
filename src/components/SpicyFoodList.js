import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data/food.js";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All');

  function handleFilterChange(event){
    setFilterBy(event.target.value);
  }

  const foodsToDisplay = foods.filter((food) => {
    if(filterBy === "All"){
      return true;
    }else{
      return food.cuisine === filterBy;
    }
  })
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods([...foods, newFood]);
  }

  function handleClick(id) {
    const foodUpdate = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    })
    setFoods(foodUpdate)

    // const newFoodList = foods.filter(food => id !== food.id)
    // setFoods(newFoodList)
  }
  const foodList = foodsToDisplay.map(food => <li key={food.id} onClick={() => handleClick(food.id)}>
    {food.name} | Heat: {food.heatLevel} | Cusine: {food.cuisine}
  </li>)
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
