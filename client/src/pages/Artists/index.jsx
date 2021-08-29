import React, { useEffect, useState } from "react";
import { Card, Row, Col, List, Avatar, Badge } from "antd";
import "./Artists.css";

function ArtistsList() {
  const [artists, setArtists] = useState([]);

  // executado 1 vez ao renderizar o component
  useEffect(() => {
    async function fetchApi() {
      const artists = await getTopArtists();

      setArtists(artists.art.week.all);
    }

    fetchApi();
  }, []);

  const getTopArtists = async () => {
    const response = await fetch(
      "https://api.vagalume.com.br/rank.php?type=art&period=week&periodVal=201134&scope=all&limit=50"
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
            title="Artistas do momento"
          >
            <List
              itemLayout="horizontal"
              size="large"
              dataSource={artists}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge count={index + 1} style={{ backgroundColor: '#52c41a' }}>
                        <Avatar size="large" src={item.pic_medium} />
                      </Badge>
                    }
                    title={<a href={`/artist/${getArtistId(item.name)}`}><h2 className="nome-artista">{item.name}</h2></a>}
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

export default ArtistsList;
