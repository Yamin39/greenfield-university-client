import { Link, useNavigate } from "react-router-dom";
import SharedBanner from "../../shared/SharedBanner";
import errorImg from '../../assets/images/error.png'
import Footer from "../../components/Footer";

const ErrorPage = () => {
   const navigate = useNavigate();



   return (
      <div>
         <SharedBanner title="404 Page" />
         <h1 className="text-center text-5xl md:text-7xl font-bold py-10">Oops!</h1>
         <div className="w-full flex items-center justify-center px-3">
            <img src={errorImg} alt="errorImage" />
         </div>
         <div className="space-y-6 py-20 text-center">
            <h3 className="font-semibold text-3xl">SOMETHING WENT WRONG...</h3>
            <p className="text-[#4d4b4b]">Sorry, we couldn't find your page.</p>
            <div className="*:border space-x-5 *:border-green-500 *:text-sm *:text-white *:bg-green-500 *:p-3 *:px-12 *:rounded-lg">
               <Link onClick={() => navigate(-1)}>Go to Back</Link>
               <Link to='/'>Go to Home</Link>
            </div>

         </div>

         <Footer />



      </div>
   );
};

export default ErrorPage;