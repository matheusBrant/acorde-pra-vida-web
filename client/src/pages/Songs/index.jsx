import React, { useEffect, useState } from "react";
import { Card, Row, Col, List, Avatar, Pagination } from "antd";
import "./Songs.css";
import  Axios from 'axios';

function SongsList() {
  const [songs, setSongs] = useState([]);
  const [current, setcurrent] = useState(1);
  const [length, setLength] = useState(1);

  // executado 1 vez ao renderizar o component
  useEffect(() => {
    async function fetchApi() {
      await getSongs(current);
    }

    fetchApi();
  }, []);

  const getSongs = async (page) => {
    const songs = (await Axios.get(`/api/songs?take=${10}&skip=${10*(page - 1)}`)).data;
    setSongs(songs.items);
    setLength(Math.ceil(songs.count / 10));
  };

  const onChange = async (page) => {
    setcurrent(page);
    getSongs(page);
  };

  return (
    <>
      <Row className="ranking">
        <Col span={18} offset={3}>
          <Card className="card" title="Músicas">
            <List
              itemLayout="horizontal"
              size="large"
              dataSource={songs}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="large"/>
                    }
                    title={
                      <a href={`/song/${item.songId}`}>
                        <h2 className="nome-musica">{item.name}</h2>
                      </a>
                    }
                    description={<h3>{item.genre}</h3>}
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

export default SongsList;
