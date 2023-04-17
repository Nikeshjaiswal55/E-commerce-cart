import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/banner-image/banner1.jpg"
import banner2 from "../../assets/banner-image/banner2.jpg"
import banner3 from "../../assets/banner-image/banner3.jpg"
import "./BannerSlider.css"

function BannerSlider() {
  return (
    <Carousel className='padding_banner'>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 img-fluid"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 img-fluid"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100  img-fluid"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerSlider;