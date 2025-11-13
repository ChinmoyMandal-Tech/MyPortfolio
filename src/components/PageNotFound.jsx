import { Link } from 'react-router-dom';
import imag from '../assets/sad_icon.png';
function PageNotFound() {
    
    return (
        <div className="flex flex-col items-center justify-center h-full py-10 px-5 text-center">
            <img src={imag} className='h-15'/>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-md transition-colors duration-300 cursor-pointer">
                <i className="fa-solid fa-arrow-left"></i> Go Back Home
            </Link>
        </div>
    )
}

export default PageNotFound;