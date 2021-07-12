import React, { useEffect, useState } from "react";
import { Card, Row, Col, List, Avatar, Badge } from "antd";
import "./Songs.css";

function SongsList() {
  const [songs, setSongs] = useState([]);

  // executado 1 vez ao renderizar o component
  useEffect(() => {
    async function fetchApi() {
      const songs = await getTopSongs();

      setSongs(songs.mus.week.all);
    }

    fetchApi();
  }, []);

  const getTopSongs = async () => {
    const response = await fetch(
      "https://api.vagalume.com.br/rank.php?type=mus&period=week&periodVal=201134&scope=all&limit=20"
    );
    return await response.json();
  };

  const getArtistId = (name) => {
    return name.toLowerCase().replaceAll(" ", "-");
  };

  return (
    <>
      <Row className="ranking">
        <Col span={18} offset={3}>
          <Card className="card" title="Músicas do momento">
            <List
              itemLayout="horizontal"
              size="large"
              dataSource={songs}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge
                        count={index + 1}
                        style={{ backgroundColor: "#52c41a" }}
                      >
                        <Avatar size="large" src={item.art.pic_medium} />
                      </Badge>
                    }
                    title={
                      <a href={`/song/${getArtistId(item.name)}`}>
                        <h2 className="nome-musica">{item.name}</h2>
                      </a>
                    }
                    description={<h3>{item.art.name}</h3>}
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

export default SongsList;
