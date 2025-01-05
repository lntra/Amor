
import '../../App.css';
import { useState } from 'react'; // Import useState to handle modal visibility and input value
import gatinho from '../gatinho.png';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setModalOpen(true); // Open the modal on button click
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted value:", inputValue);

        // Navigate to a route based on the submitted input value
        if (inputValue === "AMORDAMINHAVIDA-EA-GAROTA-ALICE") {
            navigate("/Cap1");
        } 

        setModalOpen(false); // Close the modal after submission
    };

    return (
    <>
            <div className="parent">
            <div className='flex flex-col align-middle content-center justify-center items-center mt-28'>
            <div className='text-[#21243D] font-bold text-2xl p-4'>
                <h1>Tudo Sobre Nosso</h1>
            </div>
            <div className='text-[#21243D] w-min font-bold text-4xl flex flex-col'>
                <h1>AMOR</h1>
                <span className="w-full z-10 h-[6px] bg-gradient-to-r from-[#E41F1F] to-[#FC3D3D] rounded-full"></span>
            </div>
            </div>
            <button className='center-button text-red-900' onClick={handleButtonClick}>
            <p className='text-xl font-bold'>Começar</p>
            </button>
            <div className='esquerda'>
            <svg width="64" height="153" viewBox="0 0 64 153" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="64" height="153" transform="matrix(-1 0 0 1 64 0)" fill="url(#pattern0_103_23)"/>
                <defs>
                <pattern id="pattern0_103_23" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_103_23" transform="matrix(0.015625 0 0 0.00653595 -0.171875 0)"/>
                </pattern>
                <image id="image0_103_23" width="86" height="153" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </svg>
            </div>
            <div className='meio'>
            <svg width="471" height="383" viewBox="0 0 471 383" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_4_41)">
            <path d="M353.25 0C353.25 0 264.938 0 235.5 88.3846C206.062 0 117.75 0 117.75 0C52.9875 0 0 53.0308 0 117.846C0 238.638 235.5 383 235.5 383C235.5 383 471 235.692 471 117.846C471 53.0308 418.013 0 353.25 0Z" fill="url(#paint0_linear_4_41)"/>
            </g>
            <image
                href={`${gatinho}`} /* Replace with the actual path to your left PNG */
                x="50" /* Align to the left of the SVG */
                y="25%" /* Vertically center the image */
                transform="translate(0, -50%)"
                width="182" /* Adjust width as needed */
                height="168" /* Adjust height as needed */
                style={{ filter: 'brightness(0.8)' }}
            />
            <image
                href={`${gatinho}`} /* Replace with the actual path to your right PNG */
                x="235" /* 471 (SVG width) - 64 (image width), to align to the right */
                y="25%" /* Vertically center the image */
                transform="translate(0, -50%)"
                width="182" /* Adjust width as needed */
                height="168" /* Adjust height as needed */
                style={{ filter: 'brightness(0.7)' }}
            />
            <defs>
            <filter id="filter0_i_4_41" x="0" y="0" width="471" height="387" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_41"/>
            </filter>
            <linearGradient id="paint0_linear_4_41" x1="98.4269" y1="286.948" x2="512.09" y2="224.918" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E6E6E6" stop-opacity="1"/>
            <stop offset="1" stop-color="#F2F2F2" stop-opacity="1"/>
            </linearGradient>
            </defs>
            </svg>
            </div>
            <div className='direita'>
            <svg width="64" height="153" viewBox="0 0 64 153" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="64" height="153" fill="url(#pattern0_103_25)"/>
                <defs>
                <pattern id="pattern0_103_25" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_103_25" transform="matrix(0.015625 0 0 0.00653595 -0.171875 0)"/>
                </pattern>
                <image id="image0_103_25" width="86" height="153" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </svg>
            </div>
            <div className=' absolute bottom-0 text-black left-0 right-0'>
                <p>Para o amor de minha vida, Alice</p>
            </div>
        </div>
        {isModalOpen && (
            <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn font-bold" onClick={handleCloseModal}>X</button>
                <form onSubmit={handleSubmit}>
                <label htmlFor="user-input">Insira algo:</label>
                <input 
                    id="user-input"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="input-field text-black font-bold"
                    required
                />
                <button type="submit" className="submit-btn">Enviar</button>
                </form>
            </div>
            </div>
        )}
    </>
)};

export default Home