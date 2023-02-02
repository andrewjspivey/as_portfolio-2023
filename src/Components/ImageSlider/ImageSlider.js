import React, { useState } from "react";
import styled from "styled-components";
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import SliderModal from "./SliderModal";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 80%;
  cursor: pointer;
`;

const Hint = styled.p`
  font-style: italic;
  font-size: 1.125rem;
`;

function ImageSlider({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  const handleNextImage = () => {
    const images = project.images;
    console.log("next clicked!!!");
    if (images[currentImageIndex + 1]) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    const images = project.images;
    console.log("prev clicked!!!");
    if (images[currentImageIndex - 1]) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
          <SliderContainer>
            <TbCaretLeft
              color="#66FCF1"
              size={32}
              onClick={handlePrevImage}
              cursor="pointer"
            />
            <StyledImage
              src={project.images[currentImageIndex]}
              alt="slider"
              onClick={() => setShowModal(true)}
            />
            <TbCaretRight
              color="#66FCF1"
              size={32}
              onClick={handleNextImage}
              cursor="pointer"
            />
          </SliderContainer>
          <Hint>Click image to see pics, code snippets</Hint>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
