import styled from "styled-components";
import { Link } from "react-router-dom";
const Recommends = () => {
  return (
    <Container>
      <h4>Recommends for you</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg" />
            <Caption>
              <h5>INTERSTELLAR</h5>
            </Caption>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/579/921/292/amazing-spider-man-new-marvel-s-the-amazing-spider-man-movie-poster-wallpaper-preview.jpg" />
            <Caption>
              <h5>SPIDERMAN</h5>
            </Caption>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/358/8/1021/captain-america-shields-optical-flares-stars-wallpaper-preview.jpg" />
            <Caption>
              <h5>CAPTAIN AMERICA</h5>
            </Caption>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/125/985/100/venom-movie-venom-2018-movies-movies-wallpaper-preview.jpg" />
            <Caption>
              <h5>VENOM</h5>
            </Caption>
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grip-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier();
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    oject-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  opacity: 0;
  z-index: 10;
  &:hover {
    opacity: 0.6;
    background-color: #11131d;
    transiton: all 1s ease-in-out;
  }
`;
export default Recommends;
