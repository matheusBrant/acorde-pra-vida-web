import React from "react";
import { Row, Col, Input, Form, Button, Select } from "antd";
const { Option } = Select;

export default function AddChordsForm({
  onYoutubeVideoUpdate,
  chordsHtmlString,
  onSave,
  artists
}) {
  const youtubeUrlRegex = /https:\/\/www\.youtube\.com\/watch\?v=(.{11})/;

  const onYoutubeUrlChange = (ev) => {
    const result = youtubeUrlRegex.exec(ev.target.value);
    if (result && result[1]) {
      onYoutubeVideoUpdate(result[1]);
    }
  };

  function handleFinish(object) {
    object.chordsHtmlString = chordsHtmlString;
    onSave(object);
  }

  const options = artists.map(f => <Option key={f.artistId}>{f.name}</Option>);

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Form.Item
            name={["songName"]}
            label="Nome"
            rules={[
              {
                required: true,
                message: "Escreva o nome da música!",
              },
            ]}
          >
            <Input placeholder="Ex. Dirigindo meu carro" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["artistId"]}
            label="Artista"
            rules={[
              {
                required: true,
                message: "Selecione o artista da música!",
              },
            ]}
          >
            <Select
            showSearch
            placeholder="Ex. Tim Maia"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
              {options}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["genre"]}
            label="Gênero"
            rules={[
              {
                required: true,
                message: "Escreva o gênero da música!",
              },
            ]}
          >
            <Input placeholder="Ex. MPB" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name={["level"]}
            label="Dificuldade"
            rules={[
              {
                required: true,
                message: "Selecione a dificuldade da música!",
              },
            ]}
          >
            <Select placeholder="Ex. Fácil">
              <Option value="1">Fácil</Option>
              <Option value="2">Médio</Option>
              <Option value="3">Difícil</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["youtubeUrl"]}
            label="Link no YouTube"
            rules={[
              {
                required: true,
                message: "Insira um link válido",
                pattern: youtubeUrlRegex,
              },
            ]}
            onChange={onYoutubeUrlChange}
          >
            <Input placeholder="Ex. Xuxa" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Row>
    </Form>
  );
}
