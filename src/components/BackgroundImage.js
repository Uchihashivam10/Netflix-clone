import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src='https://scontent.fdel63-1.fna.fbcdn.net/v/t1.6435-9/185520481_166996742092917_1330355339074717206_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d0kE3Kldn-wAX81gfdR&_nc_oc=AQlPyzmXdjfyb6kzNjd20_tnHEfp9BW3M5ufEoT4Iw2kc4bIOOAJJzf7MJw5LZfHmBk&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBr2mc0yvkAvNdQgRC5dfUQL4L2lTLnvB3MOXds6SNeJw&oe=651A7923'
      alt='no internet connection'
      />
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw; 
  img{
    height:  100vh;
    width: 100vw;
  }
`

export default BackgroundImage;