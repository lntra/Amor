import "./Cap.css"; // Optional: External CSS for styling

const BrabosDaFolha = () => {

    return (
    <div className="reading-page-container text-black">
        <div className="reading-page-title">
        <h1 className="flex justify-center items-center font-bold">NA MINUTAGEM CANTA QUEM SABE</h1>
        </div>
        <div className="image-box">
            <iframe width="350" height="315" src="https://www.youtube.com/embed/ZKaC2-k1ves?si=nrGFGQ1wGplRPUx2&amp;start=104" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    );
};

export default BrabosDaFolha;