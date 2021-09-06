import React, { useEffect, useState } from "react"; 
import { Card, Col, Row } from "antd";
import "./Chords.css";
import  Axios from 'axios';
import YouTube from "react-youtube";

function ChordsPage(props) {
  const { songId } = props.match.params
  const [song, setSong] = useState([]);
  const [artist, setArtist] = useState([]);
  const youtubeUrlRegex = /https:\/\/www\.youtube\.com\/watch\?v=(.{11})/;

  const youtubeUrlId = (url) => {
    const result = youtubeUrlRegex.exec(url);
    if (result && result[1]) {
      return result[1];
    }
  };

  useEffect(() => {
    async function fetchApi() {
      await getSong();
    }

    fetchApi();
  }, []);

  const getSong = async () => {
    const song = (await Axios.get(`/api/songs/${songId}`)).data;
    setSong(song);
    await getArtist(song.artistId)
  };

  const getArtist = async (artistId) => {
    const artist = (await Axios.get(`/api/artists/${artistId}`)).data;
    setArtist(artist);
  };

  return (
    <>
      <Row className="chord" justify="space-around" align="middle">
        <Col span={20}>
          <Card
            className="card"
            title={`${song.name} - ${artist.name}`}
            extra={<span class="level">Dificuldade: {song.level}</span>}
          >
            <p dangerouslySetInnerHTML={{ __html: song.content }}></p>
            <YouTube
              videoId={youtubeUrlId(song.videoUrl)}
              opts={{
                height: "360",
                width: "480",
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChordsPage;