import React, { useEffect, useState } from "react";
import { Card, Col, Row, List, Image, Divider } from "antd";
import "./Artist.css"
import  Axios from 'axios';

export default function Artist(props) {
  const { artistId } = props.match.params
  const [artistInfo, setArtist] = useState({});
  const [toplyrics, setToplyrics] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  const getArtistId = (name) => {
    return name.toLowerCase().replaceAll(' ', '-');
  }

  useEffect(() => {
    async function fetchApi() {
      const result = await getArtist();
      const resultInfo = await getArtistInfo(getArtistId(result.name));

      setArtist(result);
      setToplyrics(resultInfo.artist.toplyrics.item);
      setLyrics(resultInfo.artist.lyrics.item);
    }

    fetchApi();
  }, []);

  const getArtistInfo = async (name) => {
    const response = await fetch(
      `https://www.vagalume.com.br/${name}/index.js`
    );
    return await response.json();
  };


  const getArtist = async () => {
    return (await Axios.get(`/api/artists/${artistId}`)).data;
  };
  
  return (
    <>
      <Row>
        <Col span={12} offset={1}>
          <Row className="ranking">
            <Col span={24}>
              <Card
                className="card"
                title="Mais visitadas"
              >
                <List
                  className="more-views"
                  itemLayout="horizontal"
                  dataSource={toplyrics}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<span>{index + 1} - {item.desc}</span>}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
          <Row className="ranking">
            <Col span={24}>
              <Card
                className="card"
                title="Todas cifras"
              >
                <List
                  className="more-views"
                  itemLayout="horizontal"
                  dataSource={lyrics}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<span>{index + 1} - {item.desc}</span>}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={10} offset={1}>
          <Row className="ranking">
            <Col span={22}>
              <Card
                className="card"
                title={artistInfo.name}
              >
                <Row justify="center">
                  <Image
                    preview={false}
                    style={{ borderRadius: '50%' }}
                    width={200}
                    height={200}
                    src={artistInfo.photoUrl}
                  />
                </Row>
                <Divider type="horizontal" />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </>
  );
}
