import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Original from "./Original";
import Trending from "./Trending";
import Recommends from "./Recommends";
import Viewers from "./Viewers.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-dom";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlices";
const home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "originals":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
    });
    dispatch(
      setMovies({
        recommends: recommends,
        newDisney: newDisneys,
        originals: originals,
        trending: trending,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Original />
      <Trending />
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
