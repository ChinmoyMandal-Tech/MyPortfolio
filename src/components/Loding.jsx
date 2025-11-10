import x from '../assets/pre.svg';

function Loding() {
    return (
        <div className={`h-full w-full flex justify-center items-center bg-gray-900`}>
            <img src={x} alt="Loading...." className=""/>
        </div>
    );
}
export default Loding;