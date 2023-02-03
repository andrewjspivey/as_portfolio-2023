import React from "react";
import styled from "styled-components";
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import media from "../../media";

export const ImageContainer = styled.div`
  justify-self: center;
  width: 100%;
  height: 100%;
  max-height: 600px;
  overflow-y: auto;
  background: transparent;
  object-fit: cover;
`;

const StyledImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const SliderModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  /* width: 100%; */
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 9;
  ${media.tablet`
  width: 80%;
  /* padding: 1rem; */
  `};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 7;
`;

const SliderModal = ({ project, startingIndex, showModal, closeModal }) => {
  const [currentIndex, setCurrentIndex] = React.useState(startingIndex);

  const handleNextImage = () => {
    const images = project.images;
    console.log("next clicked!!!");
    if (images[currentIndex + 1]) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = () => {
    const images = project.images;
    console.log("prev clicked!!!");
    if (images[currentIndex - 1]) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Overlay onClick={closeModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <SliderModalWrap>
          <TbCaretLeft
            color="#66FCF1"
            size={64}
            onClick={handlePrevImage}
            cursor="pointer"
          />
          <ImageContainer>
            <StyledImage src={project.images[currentIndex]} alt="slider" />
          </ImageContainer>
          <TbCaretRight
            color="#66FCF1"
            size={64}
            onClick={handleNextImage}
            cursor="pointer"
            zIndex="10"
          />
        </SliderModalWrap>
      </StyledModal>
    </Overlay>
  );
};

export default SliderModal;
