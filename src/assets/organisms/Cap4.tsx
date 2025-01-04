import "./Cap.css"; // Optional: External CSS for styling
import { useNavigate } from "react-router-dom";
import CapImg from "../cap4.jpg"

const Cap2 = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/Cap5");
    };

    const handlePrevious = () => {
        navigate("/Cap3");
    };

    return (
    <div className="reading-page-container text-black">
        <div className="reading-page-title">
        <h1 className="flex justify-center items-center font-bold">Capítulo 4: União</h1>
        </div>

        <div className="image-box">
        <img
            src={`${CapImg}`}
            alt="Placeholder description"
            className="reading-page-image"
        />
        </div>

        <div className="content-box">
        <p>
            Gatinho e Gatinha, solitários mas na companhia do outro imbatíveis,
            todos os dias pareciam ser finais felizes,
            amor meloso, grudento, carinho do outro os faziam se sentir incríveis,
        </p>
        <hr className="my-5"/>
        <p>
            Gatinho amava como sua gatinha sempre fora uma pessoa incrível e genuína, 
            Gatinha amava a companhia e todos sentimentos especiais que ele apenas retribuía,
            palavras escritas no passado iniciam a tensão, que ruína espreita nossa união?
        </p>
        </div>

        <div className="navigation-buttons">
        <button onClick={handlePrevious} className="prev-button">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_16_126)"/>
            <path d="M14.5 30.3125L25.75 21.125V26.75C25.75 26.75 27.8125 26.75 29.5 26.75C44.5 26.75 44.5 41.75 44.5 41.75C44.5 41.75 42.625 34.25 29.875 34.25C27.8125 34.25 26.5 34.25 25.75 34.25V39.6875L14.5 30.3125H14.5Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_16_126" x1="30" y1="8.5" x2="30" y2="60" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F27373"/>
            <stop offset="1" stop-color="#FC3D3D"/>
            </linearGradient>
            </defs>
            </svg>
        </button>
        <button onClick={handleNext} className="next-button">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#D9D9D9"/>
            <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_16_125)"/>
            <path d="M44.5 30.3125L33.25 21.125V26.75C33.25 26.75 31.1875 26.75 29.5 26.75C14.5 26.75 14.5 41.75 14.5 41.75C14.5 41.75 16.375 34.25 29.125 34.25C31.1875 34.25 32.5 34.25 33.25 34.25V39.6875L44.5 30.3125V30.3125Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_16_125" x1="30" y1="8.5" x2="30" y2="60" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F27373"/>
            <stop offset="1" stop-color="#FC3D3D"/>
            </linearGradient>
            </defs>
            </svg>
        </button>
        </div>
    </div>
    );
};

export default Cap2;