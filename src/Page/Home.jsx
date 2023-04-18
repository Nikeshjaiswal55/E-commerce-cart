import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import BannerSlider from '../components/banner-slider/BannerSlider';
import ProductHeading from '../components/Product-heading/ProductHeading';
import ProductCard from '../components/Product-card/ProductCard';
import { useGetClothsProductsQuery } from '../service/productApi';
import { AdvertiseSlider } from '../components/slider/Slider';
import Loader from '../components/Loader/Loader';
import Footer from '../components/footer/Footer';


const Home = () => {
    const { data, isLoading, isFetching } = useGetClothsProductsQuery();

    return (
        <div className='container-fluid p-0'>
            <BannerSlider />
            <ProductHeading heading={"Top Sales Product"} bgcolor={'h-green'} />
            <div className='justify-content-center justify-content-lg-around row'>
                {isLoading || isFetching ? <><Loader /></> : data?.slice(0, 3)?.map((contents, index) => (
                    <ProductCard key={index} id={index} image={contents.image} name={contents.name} price={contents.price} disc={contents.description} timeLeft={contents.timeLeft} rating={contents.rating} />
                ))}
            </div>
            <ProductHeading heading={"Amazing offers"} bgcolor={'h-red'} />
            <AdvertiseSlider />
            <ProductHeading heading={"Trending Products"} bgcolor={'h-green'} />
            <div className='product_grid row'>
                {isLoading || isFetching ? <><Loader /></> : data?.slice(3, 12)?.map((contents, index) => (
                    <ProductCard key={index} id={index} image={contents.image} name={contents.name} price={contents.price} disc={contents.description} timeLeft={contents.timeLeft} rating={contents.rating} />
                ))}
            </div>
            <Footer />
        </div>

    );
};

export default Home;