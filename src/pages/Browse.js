import React from "react";
import { Banner, Nav, Row } from "../components";
import requests from "../requests/requests";

const Browse = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOrgiginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Browse;
