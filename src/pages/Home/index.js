import React, { useEffect, useState } from "react";
import "./Home.css";

import { Card, Row, Col } from "antd";

function Home() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  // executado 1 vez ao renderizar o component
  useEffect(() => {
    async function fetchApi() {
      const songs = await getTopSongs();
      const artists = await getTopArtists();

      setSongs(songs.mus.week.all);
      setArtists(artists.art.week.all);
    }

    fetchApi();
  }, []);

  const getTopSongs = async () => {
    const response = await fetch(
      "https://api.vagalume.com.br/rank.php?type=mus&period=week&periodVal=201134&scope=all&limit=10"
    );
    return await response.json();
  };

  const getTopArtists = async () => {
    const response = await fetch(
      "https://api.vagalume.com.br/rank.php?type=art&period=week&periodVal=201134&scope=all&limit=10"
    );
    return await response.json();
  };

  const renderSongsli = (row) => {
    return (
      <li>
        <b>{row.name}</b>
        <p>{row.art.name}</p>
      </li>
    );
  };

  const renderArtistli = (row) => {
    return (
      <li>
        <b>{row.name}</b>
      </li>
    );
  };

  return (
    <>
      <Row className="Ranking">
        <Col span={16} offset={4}>
          <Card
            className="RankingCard"
            title="Músicas do momento"
            extra={<a href="#">Mostrar top 100 músicas</a>}
          >
            <div className="RankingItems">
              <ol>{songs.map(renderSongsli)}</ol>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="Ranking">
        <Col span={16} offset={4}>
          <Card
            className="RankingCard"
            title="Artistas do momento"
            extra={<a href="#">Mostrar top 100 artistas</a>}
          >
            <div className="RankingItems">
              <ol>{artists.map(renderArtistli)}</ol>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;
