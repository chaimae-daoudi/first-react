import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../components/InfoSection/data';
import Services from '../components/ServiceSection';
function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen= {isOpen} toggle= {toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />
            <Services />
            <InfoSection {...HomeObjThree} />
        </>
    )
}

export default Home;