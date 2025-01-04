import "./Cap.css"; // Optional: External CSS for styling
import Screen from "../Screenshot from 2025-01-04 11-21-10.png"
import Screen2 from "../Screenshot from 2025-01-04 11-22-17.png"

const K74 = () => {

    return (
    <div className="reading-page-container text-black">
        <div className="reading-page-title">
        <h1 className="flex justify-center items-center font-bold">74 MIL MENSAGENS</h1>
        </div>

        <div className="image-box">
        <img
            src={`${Screen2}`}
            alt="Placeholder description"
            className="reading-page-image"
        />
        </div>

        <div className="image-box">
        <img
            src={`${Screen}`}
            alt="Placeholder description"
            className="reading-page-image"
        />
        </div>
    </div>
    );
};

export default K74;