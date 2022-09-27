import React , {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent , HeroBtnWrapper, ArrowForward, ArrowRight, HeroH1,HeroP } from './HeroElements';
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'

const HeroSection = () => {

  const [hover, setHover] = useState(false);
const onHover =() =>{
setHover(!hover)
}


  return (


    <HeroContainer >
    <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        
    </HeroBg>

    <HeroContent>
      <HeroH1>Virtual Banking Made Easy</HeroH1>
      <HeroP>Sign up for a new account today and receive $250in credit towards your next payment.</HeroP>
      <HeroBtnWrapper>
        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'  >
          GET Startd {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;