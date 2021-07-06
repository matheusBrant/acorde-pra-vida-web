import React from 'react';
import './Home.css';

import { Card, Row, Col} from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      songs: [],
      artists: [],
    };
  }
  
  async getTopSongs() {
    const response = await fetch("https://api.vagalume.com.br/rank.php?type=mus&period=week&periodVal=201134&scope=all&limit=10");
    return await response.json();
  }
  
  async getTopArtists() {
    const response = await fetch("https://api.vagalume.com.br/rank.php?type=art&period=week&periodVal=201134&scope=all&limit=10");
    return await response.json();
  }

  async componentDidMount() {
    const songs = await this.getTopSongs();
    const artists = await this.getTopArtists();
    this.setState({
      isLoaded: true,
      songs: songs.mus.week.all,
      artists: artists.art.week.all
    });
  }

  renderSongsli(row) {
    return <li>
      <b>{row.name}</b>
      <p>
        {row.art.name}
      </p>
    </li>
  }

  renderArtistli(row) {
    return <li>
      <b>{row.name}</b>
    </li>
  }

  render() {
    const { isLoaded, songs, artists } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Row className="Ranking">
            <Col span={16} offset={4}>
              <Card className="RankingCard" title="Músicas do momento" extra={<a href="#">Mostrar top 100 músicas</a>} >
                <div className="RankingItems">
                  <ol>{songs.map(this.renderSongsli)}</ol>
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="Ranking">
            <Col span={16} offset={4}>
              <Card className="RankingCard" title="Artistas do momento" extra={<a href="#">Mostrar top 100 artistas</a>} >
                <div className="RankingItems">
                  <ol>{artists.map(this.renderArtistli)}</ol>
                </div>
              </Card>
            </Col>
          </Row>
        </>
      );
    }
  }
}

export default Home;