import styled from "styled-components"
import React, { useEffect, useRef, useState}from "react"

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 16.65%;
  left: 16.65%;
  transform: translate(-16.65%, -16.65%);
`
const Content = styled.div`
  aspect-ratio: 7/5;
  border-radius: 2vmin;
  position : fixed;
  display: flex;
  flex-direction: column;
  &:first-child {
    aspect-ratio: 5/7;
    width : 35vmin;
    top: 10%;
    left: 10%;
    background-color: #b8b8ff;
  }
  &:first-child > .Hider {
    background-color: #b8b8ff;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:nth-child(2) {
    aspect-ratio: 5/7;
    width : 35vmin;
    top: 55%;
    left: 25%;
    background-color: #ffc8dd;
  }
  &:nth-child(2) > .Hider {
    background-color: #ffc8dd;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:nth-child(3) {
    width : 45vmin;
    top: 20%;
    left: 35%;
    background-color: #ffafcc;
  }
  &:nth-child(3) > .Hider {
    background-color: #ffafcc;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:nth-child(4) {
    width : 50vmin;
    top: 70%;
    left: 50%;
    background-color: #bde0fe;
  }
  &:nth-child(4) > .Hider {
    background-color: #bde0fe;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:nth-child(5) {
    aspect-ratio: 5/7;
    width : 35vmin;
    top: 25%;
    left: 65%;
    background-color: #a2d2ff;
  }
  &:nth-child(5) > .Hider {
    background-color: #a2d2ff;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:nth-child(6) {
    width : 45vmin;
    top: 65%;
    left: 80%;
    background-color: #c0fdff;
  }
  &:nth-child(6) > .Hider {
    background-color: #c0fdff;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:hover > .Hider{
    opacity: 0;
    pointer-events: none;
  }
`
const Hider = styled.div`
  aspect-ratio: inherit;
  width : inherit;
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 800ms cubic-bezier(.13,.7,.39,.87);
`
const Title = styled.h1`
  font-family: 'Hamilton';
  text-align: center;
  padding-top: 1vmin;
  font-size: 2.5em;
`
const Text = styled.p`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-family: 'Sentient';
  & > p{
    text-align: center;
    position: absolute;
    top: 57.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    gap: 1vmin;
    font-size: 0.7em;
  }
  & > p > br {
    display: block;
    content: "";
    margin-top: 1em;
  }
`

const Link = styled.a`
  animation: background-pan 3s linear infinite;
  background: linear-gradient(to right, purple, violet, #5aa9e6, purple);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
`

function Gallery() {
  const galleryRef = useRef(null); // Ref for the gallery element

  useEffect(() => {
    const gallery = galleryRef.current; // Get the gallery DOM element from the ref
    window.onmousemove = e => {
      const mouseX = e.clientX,
            mouseY = e.clientY;
      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;
      const maxX = gallery.offsetWidth - window.innerWidth,
            maxY = gallery.offsetHeight - window.innerHeight;
      const x = maxX * xDecimal * -1,
            y = maxY * yDecimal * -1;
      
      gallery.animate({
        transform: `translate(${x}px, ${y}px)`
      }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
      })
    }

  });
  return (
    <Container ref={galleryRef}>
      <Content className="parcours">
        <Title>Parcours</Title>
        <Text><p>J’ai passé un baccalauréat S option Internationale Japonais.<br/>
        J’ai fait deux années de prépa intégrée à Polytech Paris-Saclay puis j’ai pu m'orienter à Polytech Sorbonne en spécialité Math-Info.<br/>
        Je suis arrivé à l’ESILV en 2022 pour pouvoir m'orienter vers une spécialité qui me correspond mieux: Fintech.<br/>
        Vous pouvez trouver mon parcours sur <Link href="https://www.linkedin.com/in/leo-combaret/">Linkedin</Link></p>
        </Text>
        <Hider className="Hider"></Hider>
      </Content>

      <Content className="projet">
        <Title>Projets</Title>
        <Text><p>J’aime énormément l’informatique et par-dessus tout, créer, réaliser et mettre en œuvre les idées qui naissent dans ma tête dans le monde virtuel.<br/>
        J’ai pu créé une application pour aider les sourds et malentendant à communiquer plus facilement,
        étudier la rapidité de convergence d’opinion d’un réseau de noeud, traquer les plus grosses transactions sur la blockchain pour visualiser les flux d’argent
        ou encore un site web pour la marque de vêtements d’un ami.<br/>
        Vous pouvez trouver tous mes projets sur mon <Link href="https://github.com/Shimadakunn/Shimaadakunn">Github</Link></p></Text>
        <Hider className="Hider"></Hider>
      </Content>

      <Content className="me">
        <Title>Qui suis-je?</Title>
        <Text><p>Je m’appelle Léo Combaret, j’ai 21 ans.<br/>
        Je suis né à Tokyo d’une mère Japonaise et d’un père Français.<br/>
        Je suis venu en France à l'âge de 3 ans.</p>
        </Text>
        <Hider className="Hider"></Hider>
      </Content>

      <Content className="personalite">
        <Title>Personalité</Title>
        <Text><p>Je suis quelqu’un de très enthousiaste et qui aime le contact humain.<br/>
          Je suis aussi quelqu’un qui est passionné. J’aime quand les sujets me parlent et me font vibrer.<br/>
          C’est pour cela que je veux rejoindre ce parcours car il me permettrai de pouvoir travailler pleinement sur les projets
          qui m'intéressent réellement.<br/>
          Mon défaut? Perfectionniste… Je plaisante, mon réel défaut est que j’aime m’amuser en travaillant
          (si on peut appeler ça un défaut…) mais quand il faut faire les choses, je suis là!!!</p>
        </Text>
        <Hider className="Hider"></Hider>
      </Content>

      <Content className="ambitions">
        <Title>Ambitions</Title>
        <Text><p>J’ai des ambitions qui sont assez différentes de la “masse”.<br/>
          J’aimerai vraiment pouvoir créer une startup qui marche et qui me permettra de voyager partout dans le monde et rencontrer des 
          gens tout autant passionnés que moi.<br/>
          J’aimerai voir ce que la vie me réserve même si cela est plus “risqué” que d’avoir un job stable.<br/> 
          C’est tellement plus fun!! On peut appeler ça le goût du risque. J’aimerai donc créer ma première startup pendant mes études et par la suite 
          continuer à créer que ce soit dans le secteur du Web 3 et de la Blockchain ou de l’Art et du Design. Pourquoi pas mélanger les deux...</p>
        </Text>
        <Hider className="Hider"></Hider>
      </Content>

      <Content className="passions">
        <Title>Passions</Title>
        <Text><p>Je fais partie de l’association KryptoSphere car le domaine de la Blockchain et du Web 3 m'intéressent énormément.<br/>
          De plus, j’aime beaucoup l’Art et le design, ce sont des domaines qui m'intéressent aussi et j’aime mêler le digital à l’Art.<br/>
          En effet je fais des <Link href="https://shimadakunn.github.io/imbh/">sites web</Link> pour des amis artistes et mon but lors des créations est de pouvoir recréer leur univers à travers mon site.
          J’ai pu faire des projets en rapport que vous pouvez retrouver sur mon <Link href="https://github.com/Shimadakunn/Shimaadakunn">Github</Link></p>
        </Text>
        <Hider className="Hider"></Hider>
      </Content>
    </Container>
  )
}

export default Gallery