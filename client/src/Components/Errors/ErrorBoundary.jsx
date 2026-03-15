import { useRouteError, Link, useNavigate } from 'react-router-dom';
import errorImg from "../../assets/illustration.svg";

const ErrorBoundary = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    
    console.error("ErrorBoundary caught an error:", error);

    return (
        <section className="bg-white">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="w-full lg:w-1/2">
                    <p className="text-sm font-medium text-title-blue tracking-wider uppercase">
                        Oops! Something went wrong.
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                        {error?.status === 404 ? "Page not found" : "An unexpected error occurred."}
                    </h1>
                    <p className="mt-4 text-gray-500">
                        {error?.statusText || error?.message || "We encountered an issue displaying this page. Please try going back or return to the homepage."}
                    </p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <button 
                            onClick={() => navigate(-1)} 
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg shrink-0 sm:w-auto hover:bg-gray-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            Go back
                        </button>
                        <Link 
                            to={'/'} 
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-title-blue rounded-lg shrink-0 sm:w-auto hover:bg-[#1f2b40]"
                        >
                            Take me home
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={errorImg} alt="Error Illustration" />
                </div>
            </div>
        </section>
    );
};

export default ErrorBoundary;
