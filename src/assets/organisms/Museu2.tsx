import "./Cap.css"; // Optional: External CSS for styling
import Cap1Img from "../MUSEU2.png"

const Museu2 = () => {

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
                Pintura altamente cristã mostrando o contato de deus com o melhor que a humanidade tem para oferecer.
            </p>
        </div>

    </div>
    );
};

export default Museu2;