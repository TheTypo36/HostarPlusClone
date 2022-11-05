import styled from "styled-components";
import { Link } from "react-router-dom";
const Original = () => {
  return (
    <Container>
      <h4>Original</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/968/387/691/joker-movies-artwork-joaquin-phoenix-joker-2019-movie-hd-wallpaper-preview.jpg" />
            <Caption>
              <h5>JOKER</h5>
            </Caption>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/204/71/692/movie-guardians-of-the-galaxy-vol-2-baby-groot-groot-wallpaper-preview.jpg" />
            <Caption>
              <h5>GROOT</h5>
            </Caption>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/335/411/593/daredevil-charlie-cox-netflix-wallpaper-preview.jpg" />
            <Caption>
              <h5>DAREDEVIL</h5>
            </Caption>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://c4.wallpaperflare.com/wallpaper/266/615/627/movies-deadpool-superhero-wallpaper-preview.jpg" />
            <Caption>
              <h5>DEADPOOL</h5>
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

export default Original;
