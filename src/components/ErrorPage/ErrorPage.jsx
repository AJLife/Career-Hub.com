import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-center text-5xl">Oops</h1>
           <button className="btn mt-8"><Link to={'/'}>Back to home</Link></button>
        </div>
    );
};

export default ErrorPage;