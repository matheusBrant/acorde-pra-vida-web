import React, { useEffect, useState } from "react";
import { Card, Row, Col, List, Avatar, Pagination, Badge } from "antd";
import "./Artists.css";
import  Axios from 'axios';

function ArtistsList() {
  const [artists, setArtists] = useState([]);
  const [current, setcurrent] = useState(1);
  const [length, setLength] = useState(1);

  // executado 1 vez ao renderizar o component
  useEffect(() => {
    async function fetchApi() {
      await getArtists(current);
    }

    fetchApi();
  }, []);

  const getArtists = async (page) => {
    const artists = (await Axios.get(`/api/artists?take=${10}&skip=${10*(page - 1)}`)).data;
    setArtists(artists.items);
    setLength(Math.ceil(artists.count / 10));
  };

  const onChange = async (page) => {
    setcurrent(page);
    getArtists(page);
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
                      <Badge style={{ backgroundColor: '#52c41a' }}>
                        <Avatar size="large" src={`https://www.vagalume.com.br/${getArtistId(item.name)}/images/${getArtistId(item.name)}.jpg`} />
                      </Badge>
                    }
                    title={<a href={`/artist/${getArtistId(item.name)}`}><h2 className="nome-artista">{item.name}</h2></a>}
                  />
                </List.Item>
              )}
            />
            <Pagination current={current} onChange={onChange} total={length} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ArtistsList;
