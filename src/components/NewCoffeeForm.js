import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewCoffeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    recipelink: "",
    recipe: "",
    image: "",
    caffeine: "",
    roast: "",
    originate: ""
  })

  const {filteredCoffees, setCoffees} = useOutletContext();

  function handleSubmit(e){
    e.preventDefault();

    const newCoffee = {
      name: formData.name,
      recipeLink: formData.recipelink,
      recipe: formData.recipe,
      image: formData.image,
      caffeine: formData.caffeine,
      roast: formData.roast,
      originate: formData.originate
    }

    fetch("http://localhost:3001/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
    .then((res) => res.json())
    .then((data) => setCoffees([...filteredCoffees, data]))
    setFormData({
        name: "",
        recipelink: "",
        recipe: "",
        image: "",
        caffeine: "",
        roast: "",
        originate: ""
    })
  }

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div onSubmit={handleSubmit}>
      <h2 className="headerSpace">Add a new coffee beverage!</h2>
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
          name="recipelink" 
          placeholder="Recipe Link"
          value={formData.recipelink}
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
          name="originate" 
          placeholder="Country of Origin"
          value={formData.originate}
          onChange={handleChange}
        />
        </div>
        <button type="submit">Add New Coffee</button>
      </form>
    </div>
  );
}

export default NewCoffeeForm;