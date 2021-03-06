import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/homeScreen.mp4"
const Hero = () => {
  return (
    <HeroStyle>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button> Travel Now</Button>
        </HeroItems>
      </HeroContent>
    </HeroStyle>
  )
}

export default Hero

const HeroStyle = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
`

const HeroBg = styled.div``

const VideoBg = styled.video``

const HeroContent = styled.div``

const HeroItems = styled.div``

const HeroH1 = styled.h1``

const HeroP = styled.p``
