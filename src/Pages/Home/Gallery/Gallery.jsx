
import galleryImg2 from "../../../assets/other/charles-deloye-2RouMSg9Rnw-unsplash.jpg";
import galleryImg3 from "../../../assets/other/clay-banks-Hf8n0RUk7g0-unsplash.jpg";
import galleryImg4 from "../../../assets/other/keith-luke-GUAcpXPyFRc-unsplash.jpg";
import galleryImg5 from "../../../assets/other/nqobile-vundla-zOt6a59k2BE-unsplash.jpg";
import galleryImg6 from "../../../assets/other/rut-miit-3X5ExRgNt3M-unsplash.jpg";
import galleryImg7 from "../../../assets/other/rut-miit-k2MJwQAQhuA-unsplash.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="header d-flex flex-column align-items-center">
        <h1 className="text-center text-4xl font-bold mb-5 text-slate-600">Collage Gallery</h1>
      </div>
      <div
        className="gallery-container lg:flex items-center justify-center mx-10 mb-32 gap-5"
      >
        <a data-lg-size="400-267-375, 600-400-480, 1600-1067">
          <img src={galleryImg2} />
        </a>

        <a data-lg-size="400-600-375, 600-900-480, 1600-2400">
          <img src={galleryImg3} />
        </a>
        <a data-lg-size="400-600-375, 600-900-480, 1600-2400">
          <img src={galleryImg4} />
        </a>
        <a data-lg-size="400-600-375, 600-900-480, 1600-2400">
          <img src={galleryImg6} />
        </a>
        <a data-lg-size="400-600-375, 600-900-480, 1600-2400">
          <img src={galleryImg5} />
        </a>
        <a data-lg-size="400-600-375, 600-900-480, 1600-2400">
          <img src={galleryImg7} />
        </a>
      </div>
    </div>
  );
};

export default Gallery;
