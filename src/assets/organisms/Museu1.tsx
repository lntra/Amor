import "./Cap.css"; // Optional: External CSS for styling
import Cap1Img from "../MUSEU.png"

const Museu1 = () => {

    return (
    <div className="reading-page-container text-black">
        <div className="reading-page-title">
        <h1 className="flex justify-center items-center font-bold">FATOS DESCONHECIDOS</h1>
        </div>

        <div className="image-box">
        <img
            src={`${Cap1Img}`}
            alt="Placeholder description"
            className="reading-page-image"
        />
        </div>

        <div className="content-box">
            <p>
                Essa é considerada cientificamente a obra mais bela do nosso século.
            </p>
        </div>

    </div>
    );
};

export default Museu1;