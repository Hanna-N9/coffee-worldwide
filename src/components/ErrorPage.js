import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div id="error">
      <div id="main-error">
        <h2>Spilled Coffee?</h2>
        <h2>Sorry, something went wrong!</h2>
        <p>
          ~ <i>{error.statusText || error.message}</i> ~
        </p>
        <button onClick={() => navigate("/")}>
          GO BACK <br /> coffee is my fuel!
        </button>
      </div>
    </div>
  );
  
}

export default ErrorPage;
