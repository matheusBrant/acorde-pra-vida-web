import React, { useEffect, useState } from "react";
import { Card, Row, Col, List, Badge, Avatar } from "antd";
import "./Home.css";
import  Axios from 'axios';

function Home() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  // executado 1 vez ao renderizar o component
  useEffect(() => {
    async function fetchApi() {
      const songs = await getTopSongs();
      const artists = await getTopArtists();

      setSongs(songs);
      setArtists(artists);
    }

    fetchApi();
  }, []);
  
  const getTopSongs = async () => {
    return (await Axios.get(`/api/songs`)).data.items;
  };


  const getTopArtists = async (page) => {
    return (await Axios.get(`/api/artists`)).data.items;
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
            extra={<a href="/songs">Mostrar mais</a>}
          >
            <List
              grid={{ gutter: 16  , column: 3 }}
              dataSource={songs}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="/chords">{index + 1} - {item.name}</a>}
                    description={item.genre}
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
                        <Avatar src={item.photoUrl} />
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
