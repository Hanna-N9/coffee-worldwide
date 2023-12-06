import { useParams, useNavigate, useOutletContext } from "react-router-dom";

function SingleCoffeeDetails() {
  const { handleDelete, coffees } = useOutletContext();
  const { id } = useParams();
  const coffee = coffees.find(c => c.id == id)
  const nav = useNavigate()

  const renderCoffeeCups = (rating) => {
    const coffeeCupEmoji = "☕️";
    return coffeeCupEmoji.repeat(rating);
  };

  const handleClick = (e) =>{
    e.preventDefault();
    fetch(`http://localhost:3001/coffee/${id}`, {
		  method: "DELETE",
	  })
		  .then((res) => res.json())
		  .then(() => handleDelete(id))
      nav("/coffee")
  }

  if(!coffee){
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="headerSpace">
        <br />
        <div>
        <img 
          src={coffee.image} 
          alt={coffee.name} 
          style={{width: "300px", height: "300px", borderRadius: "10px"}}
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
          <b>Caffeine level:</b> {coffee.caffeine}
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
        <br />
        <button onClick={handleClick}>Delete Coffee</button>
      </div>
    </>
  );
}

export default SingleCoffeeDetails;
