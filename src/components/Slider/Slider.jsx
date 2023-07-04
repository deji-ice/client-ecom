import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./Slider.scss"
import { useState } from 'react';

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const data = [
        "https://images.unsplash.com/photo-1503431194692-82dd03d18093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
        "https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    ]

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? 2 : (prev) => prev - 1)
    }
    const nextImage = () => {
        setCurrentImage(currentImage === 2 ? 0 : (prev) => prev + 1)
    }

    return <div className="slider">
        <div className="container">
            <img src={data[currentImage]} />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevImage}> <KeyboardDoubleArrowLeftIcon /> </div>
            <div className="icon" onClick={nextImage}><KeyboardDoubleArrowRightIcon /> </div>
        </div>
    </div>;
};

export default Slider;
