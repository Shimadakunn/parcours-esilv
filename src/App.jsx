import styled from "styled-components"
import React, { useEffect }from "react"
import Gallery from './Components/Gallery'

const Container = styled.div`
  height: 150vh;
  width: 150vw;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  background-color: #9381ff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Welcome = styled.h1`
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  font-family: Hamilton;
`

function App() {
  return (
    <Container>
      <Welcome id='center'>
        Discover me!
      </Welcome>
      <Gallery/>
    </Container>
  )
}

export default App