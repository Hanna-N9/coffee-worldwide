import { useParams, useNavigate, useOutletContext } from "react-router-dom";

function SingleCoffeeDetails() {
  const { handleDelete, coffees } = useOutletContext();
  const { id } = useParams();
  const coffee = coffees.find(c => c.id == id);
  const nav = useNavigate();

  const renderCoffeeCups = rating => {
    const coffeeCupEmoji = "☕️";
    return coffeeCupEmoji.repeat(rating);
  };

  const handleClick = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/coffee/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => handleDelete(id));
    nav("/coffee");
  };

  if (!coffee) {
    return <h2>Loading...</h2>;
  }

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
      </div>
      <div className="headerSpace" id="singlecoffeedetails">
        <br />
        <div>
          <mark className="singleMark">Name:</mark> {coffee.name}
        </div>
        <br />
        <div>
          <mark className="singleMark">Recipe:</mark> {coffee.recipe}
        </div>
        <br />
        <div>
          <mark className="singleMark">Caffeine level:</mark> {coffee.caffeine}{" "}
          mg
        </div>
        <br />
        <div>
          <mark className="singleMark">Roast type:</mark> {coffee.roast}
        </div>
        <br />
        <div>
          <mark className="singleMark">Coffee shop:</mark> {coffee.coffeeshop}
        </div>
        <br />
        <div>
          <mark className="singleMark">Location:</mark> {coffee.location}
        </div>
        <br />
        <div>
          <mark className="singleMark">Rating:</mark>{" "}
          {renderCoffeeCups(coffee.rating)}
        </div>
        <br />
      </div>
      <div id="delete">
        <button onClick={handleClick} className="btn">
          Delete Coffee
        </button>
      </div>
    </>
  );
  
}

export default SingleCoffeeDetails;
