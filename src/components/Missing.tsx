import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <article className="flex flex-col text-center justify-center text-white">
      <div className="mt-[300px]">
        <h1>Oops!</h1>
        <p>Page Not Found</p>
        <div className="">
          <Link to="/">Visit Our Homepage</Link>
        </div>
      </div>
    </article>
  );
};

export default Missing;
