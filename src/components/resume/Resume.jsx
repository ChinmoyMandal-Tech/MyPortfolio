import CV_View from "../../assets/CV_Chinmoy.jpg";
import CV_Download from "../../assets/CV_Chinmoy.pdf";

function Resume() {
    
    return (
        <div className="m-5 max-[400px]:mx-0 grid">
            
            <a
                href={CV_Download}
                download
                className=" px-5 mx-auto bg-blue-600 text-white py-2 rounded m-2 hover:scale-105 hover:bg-blue-500/90 transition-transform duration-300 "
                style={{ boxShadow: "0px 0px 17px 0px #916c6c" }} >
                <i className="fa-solid fa-download mr-5"></i>
                Download CV
            </a>
           <img src={CV_View} className="mx-auto rounded-2xl w-full max-w-200 my-5  shadow-xl shadow-gray-500 "></img>

        </div>
    )
}

export default Resume;