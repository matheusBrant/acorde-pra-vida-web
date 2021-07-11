import React, { useEffect, useState } from "react";
import { Card, Row, Col, List, Badge, Avatar } from "antd";
import "./Home.css";

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

  const getArtistId = (name) => {
    return name.toLowerCase().replaceAll(' ', '-');
  }

  return (
    <>
      <Row className="ranking">
        <Col span={18} offset={3}>
          <Card
            className="card"
            title="Músicas do momento"
            extra={<a href="#">Mostrar mais</a>}
          >
            <List
              grid={{ gutter: 16  , column: 3 }}
              dataSource={songs}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="/chords">{index + 1} - {item.name}</a>}
                    description={item.art.name}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Row className="ranking">
        <Col span={18} offset={3}>
          <Card
            className="card"
            title="Artistas do momento"
            extra={<a href="/artists">Mostrar mais</a>}
          >
            <List
              grid={{ gutter: 16  , column: 3 }}
              dataSource={artists}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge count={index + 1}  style={{ backgroundColor: '#52c41a' }}>
                        <Avatar src={item.pic_medium} />
                      </Badge>
                    }
                    title={<a href={`/artist/${getArtistId(item.name)}`}>{item.name}</a>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;
