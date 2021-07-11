import React from "react";
import { Card, Col, Row } from "antd";
import "./Chords.css";

export default function ChordsPage() {
  const chords = {
    artistName: "Paulo Novaes",
    chordsHtmlString:
      "<p>Hoje bateu saudade</p>\n<p>De quando eu via a vida</p>\n<p>Com a pureza no coração</p>\n<p></p>\n<p>Mas esse tempo passa</p>\n<p>E tudo perde a graça</p>\n<p>E eu já não sinto a mesma emoção</p>\n<p>Como eu queria poder sentir</p>\n<p></p>\n<p>Como naquela idade</p>\n<p>Tudo era novidade</p>\n<p>Era tão fácil de se entregar</p>\n<p></p>\n<p>Mas quando a gente cresce</p>\n<p>Isso desaparece</p>\n<p>Com tanta coisa pra resolver</p>\n<p>Como eu queria poder voltar</p>\n<p></p>\n<p>Mas não há tempo pra esse lamento</p>\n<p>Não posso mais olhar pra trás</p>\n<p>Saber que ainda tem tanta coisa pra acontecer</p>\n<p></p>\n<p>Eu preciso acender essa chama</p>\n<p>Estar presente de novo</p>\n<p>Pra poder me livrar desse drama</p>\n<p>Quebrar a casca do ovo</p>\n<p></p>\n<p>Eu preciso acender essa chama</p>\n<p>Estar presente de novo</p>\n<p>Pra poder me livrar desse drama</p>\n<p>Quebrar a casca do ovo</p>\n<p>De novo</p>\n",
    level: "medium",
    songName: "Casca de ovo",
    youtubeUrl: "https://www.youtube.com/watch?v=Ax7jkXJclTc",
  };

  return (
    <Row className="chord" justify="space-around" align="middle">
      <Col span={20}>
        <Card
          className="rankingCard"
          title={`${chords.songName} - ${chords.artistName}`}
          extra={<span class="level">Dificuldade: {chords.level}</span>}
        >
          <p dangerouslySetInnerHTML={{ __html: chords.chordsHtmlString }}></p>
        </Card>
      </Col>
    </Row>
  );
}
