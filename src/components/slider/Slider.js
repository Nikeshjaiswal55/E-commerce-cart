import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/advertisement/advertise.png"
import banner2 from "../../assets/advertisement/advertise2.png"


export function AdvertiseSlider() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}





