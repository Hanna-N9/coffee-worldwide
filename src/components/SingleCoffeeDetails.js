import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleCoffeeDetails() {
  const [coffee, setCoffee] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/coffee/${id}`)
      .then(res => res.json())
      .then(setCoffee);
  }, [id]);

  <Link to={`/coffee/${coffee.id}/recipe`}>link</Link>;

  return (
    <>
      <div>
        <img src={coffee.image} alt={coffee.name} />
        <div>
          <b>Name:</b> {coffee.name}
        </div>
        <div>
          <b>Recipe:</b> {coffee.recipe}
        </div>
        <div>
          <b>Link to recipe:</b> {coffee.recipeLink}
        </div>
      </div>
    </>
  );
}

export default SingleCoffeeDetails;
