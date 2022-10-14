import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers.js";
const home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px) !important;
  padding: 0 calc(3.5vw + 5px) !important;
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  top: 72px;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default home;
