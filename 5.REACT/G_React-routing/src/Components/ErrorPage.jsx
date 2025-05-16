import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2> Oops </h2>
      <p> {error.statusText || error.message} </p>
      {
        error.status===404 && <div>
          <h3> Page not found </h3>
        </div>
      }
    </div>
  );
};

export default ErrorPage;