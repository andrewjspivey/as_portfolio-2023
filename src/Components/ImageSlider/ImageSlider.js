import React, { useState } from "react";
import styled from "styled-components";
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import SliderModal from "./SliderModal";
import { ImageContainer } from "./SliderModal";
import { StyledButton } from "../Nav/Nav";
import media from "../../media";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const StyledImage = styled.img`
  width: 100%;
  cursor: pointer;
  opacity: 0.9;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const Hint = styled.p`
  font-style: italic;
  font-size: 1.125rem;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 2rem 1rem 2rem;
`;

function ImageSlider({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  return (
    <>
      {showModal ? (
        <SliderModal
          project={project}
          startingIndex={currentImageIndex}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SliderContainer onClick={() => setShowModal(true)}>
            <TbCaretLeft color="#66FCF1" size={32} cursor="pointer" />
            <ImageContainer>
              <StyledImage
                src={project.images[currentImageIndex]}
                alt="slider"
                onClick={() => setShowModal(true)}
              />
            </ImageContainer>
            <TbCaretRight color="#66FCF1" size={32} cursor="pointer" />
          </SliderContainer>
          <Hint>Click image to see some pics/snippets</Hint>
          <ButtonContainer>
            {project?.links?.live && (
              <a
                style={{ color: "#66FCF1" }}
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                <StyledButton>LIVE</StyledButton>
              </a>
            )}
            {project?.links?.github && (
              <a
                style={{ color: "#66FCF1" }}
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <StyledButton>GITHUB</StyledButton>
              </a>
            )}
          </ButtonContainer>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
