import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import SeasonsPage from "./views/SeasonsPage/SeasonsPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";
import ViewedPage from "./views/ViewedPage/ViewedPage";
import SeasonDetail from "./views/SeasonDetail/Section/SeasonDetail";
import EpisodesPage from "./views/EpisodesPage/EpisodesPage";
import EpisodeDetail from "./views/EpisodeDetail/EpisodeDetail";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />

          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetail, null)}
          />
          <Route
            exact
            path="/movie/:movieId/seasons"
            component={Auth(SeasonsPage, null)}
          />
          <Route
            exact
            path="/movie/:movieId/seasons/:seasonId"
            component={Auth(SeasonDetail, null)}
          />
          <Route
            exact
            path="/movie/:movieId/seasons/:seasonNumber/episodes"
            component={Auth(EpisodesPage, null)}
          />
          <Route
            exact
            path="/movie/:movieId/seasons/:seasonNumber/episodes/:episodeId"
            component={Auth(EpisodeDetail, null)}
          />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
          <Route exact path="/viewed" component={Auth(ViewedPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
