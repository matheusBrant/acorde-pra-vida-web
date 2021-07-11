import React, { useEffect, useState } from "react";
import { Card, Col, Row, List, Image, Divider } from "antd";
import "./Artist.css"

export default function Artist(props) {
  const { artist } = props.match.params
  const [artistInfo, setArtist] = useState({});
  const [toplyrics, setToplyrics] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const result = await getArtistInfo();

      setArtist(result.artist);
      setToplyrics(result.artist.toplyrics.item);
      setLyrics(result.artist.lyrics.item);
    }

    fetchApi();
  }, []);

  const getArtistInfo = async () => {
    const response = await fetch(
      `https://www.vagalume.com.br/${artist}/index.js`
    );
    return await response.json();
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
                        title={<a href="/chords">{index + 1} - {item.desc}</a>}
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
                        title={<a href="/chords">{index + 1} - {item.desc}</a>}
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
                title={artistInfo.desc}
              >
                <Row justify="center">
                  <Image
                    preview={false}
                    style={{ borderRadius: '50%' }}
                    width={200}
                    height={200}
                    src={`https://www.vagalume.com.br${artistInfo.pic_medium}`}
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
