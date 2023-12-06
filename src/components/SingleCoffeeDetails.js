import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SingleCoffeeDetails() {
  const [coffee, setCoffee] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/coffee/${id}`)
      .then(res => res.json())
      .then(setCoffee);
  }, [id]);

  const renderCoffeeCups = rating => {
    const coffeeCupEmoji = "☕️";
    return coffeeCupEmoji.repeat(rating);
  };

  <Link to={`/coffee/${coffee.id}/recipe`}>link</Link>;

  return (
    <>
      <div className="headerSpace">
        <br />
        <div>
          <img
            src={coffee.image}
            alt={coffee.name}
            style={{ width: "300px", height: "300px", borderRadius: "10px" }}
          />
        </div>
        <br />
        <div>
          <b>Name:</b> {coffee.name}
        </div>
        <br />
        <div>
          <b>Recipe:</b> {coffee.recipe}
        </div>
        <br />
        <div>
          <b>Caffeine level:</b> {coffee.caffeine} mg
        </div>
        <br />
        <div>
          <b>Roast type:</b> {coffee.roast}
        </div>
        <br />
        <div>
          <b>Coffee shop:</b> {coffee.coffeeshop}
        </div>
        <br />
        <div>
          <b>Location:</b> {coffee.location}
        </div>
        <br />
        <div>
          <b>Rating:</b> {renderCoffeeCups(coffee.rating)}
        </div>
      </div>
    </>
  );
}

export default SingleCoffeeDetails;
