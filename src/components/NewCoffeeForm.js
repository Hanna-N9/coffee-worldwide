import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { ReactComponent as CoffeeIcon } from "../images/coffeecup.svg";

function NewCoffeeForm() {
  const { filteredCoffees, setCoffees } = useOutletContext();
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    recipe: "",
    image: "",
    caffeine: "",
    roast: "",
    coffeeshop: "",
    location: "",
    rating: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    nav("/coffee");

    const newCoffee = {
      name: formData.name,
      recipe: formData.recipe,
      image: formData.image,
      caffeine: formData.caffeine,
      roast: formData.roast,
      coffeeshop: formData.coffeeshop,
      location: formData.location,
      rating: formData.rating,
    };

    fetch("http://localhost:3001/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => setCoffees([...filteredCoffees, data]));
    setFormData({
      name: "",
      recipe: "",
      image: "",
      caffeine: "",
      roast: "",
      coffeeshop: "",
      location: "",
      rating: 0,
    });
    alert(`You've submitted a new beverage!`);
    nav("/coffee");
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleRatingClick(rating) {
    setFormData({
      ...formData,
      rating,
    });
  }

  return (
    <div onSubmit={handleSubmit}>
      <h2 className="headerSpace">Add your latest coffee beverage!</h2>
      <form>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="name"
            placeholder="Coffee Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="recipe"
            placeholder="Recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="caffeine"
            placeholder="Caffeine Level"
            value={formData.caffeine}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="roast"
            placeholder="Roast Type"
            value={formData.roast}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="coffeeshop"
            placeholder="Coffee Shop"
            value={formData.coffeeshop}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <input
            className="coffeeinput"
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="newcoffeeform">
          <label htmlFor="rating" id="rating">
            Rating:{" "}
          </label>
          {[1, 2, 3, 4, 5].map(value => (
            <span
              key={value}
              role="img"
              aria-label={`Coffee Cup ${value}`}
              onClick={() => handleRatingClick(value)}
              className={formData.rating >= value ? "selected" : ""}>
              <CoffeeIcon
                width="1em"
                height="1em"
                fill={formData.rating >= value ? "black" : "lightgrey"}
              />
            </span>
          ))}
        </div>
        <br />
        <button type="submit" className="btn">
          Add New Coffee
        </button>
      </form>
    </div>
  );
}

export default NewCoffeeForm;
