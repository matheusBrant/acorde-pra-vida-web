import "./AddChords.css";

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Input, Form, Button, Select } from "antd";

import YouTube from "react-youtube";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

const { Option } = Select;

export default function AddChordsPage() {
  const [editorState, setEditorState] = useState({});
  const [textArea, setTextArea] = useState({});
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const youtubeUrlRegex = /https:\/\/www\.youtube\.com\/watch\?v=(.{11})/;

  const onYoutubeUrlChange = (ev) => {
    const result = youtubeUrlRegex.exec(ev.target.value);
    if (result && result[1]) {
      setYoutubeVideoId(result[1]);
    }
  };

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
    // setTextArea(editorState.getCurrentContent());
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState({
      editorState,
    });
    // setTextArea(editorState.getCurrentContent());
    console.log(editorState);
  };

  function handleFinish(a) {
    console.log(a);
  }

  return (
    <>
      <Row
        gutter={[0, 24]}
        className="row"
        justify="space-around"
        align="middle"
      >
        <Col span={4} className="col">
          <h1>Adicionar nova cifra</h1>
        </Col>
      </Row>
      <Row
        gutter={[0, 24]}
        className="row"
        justify="space-around"
        align="middle"
      >
        <Col span={12} className="col">
          <div>
            <Editor
              wrapperStyle={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#F1F1F1",
                background: "#fff",
                height: "700px",
                width: "100%",
              }}
              toolbarStyle={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
              }}
              // editorState={editorState}
              wrapperClassName="editor-wrapper"
              editorClassName="editor"
              onEditorStateChange={onEditorStateChange}
              toolbar={{
                options: [
                  "inline",
                  "blockType",
                  "fontSize",
                  "list",
                  "textAlign",
                  "history",
                ],
              }}
            />
            {/* <textarea
          disabled
          value={editorState && draftToHtml(convertToRaw(textArea))}
        /> */}
          </div>
        </Col>
        <Col span={10} className="col">
          <Row
            gutter={[0, 24]}
            className="row"
            justify="space-around"
            align="middle"
          >
            <Card className="ChordsInfo" title="Informações da música">
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
                      name={["artistName"]}
                      label="Artista"
                      rules={[
                        {
                          required: true,
                          message: "Escreva o artista da música!",
                        },
                      ]}
                    >
                      <Input placeholder="Ex. Xuxa" />
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
                        <Option value="easy">Fácil</Option>
                        <Option value="medium">Médio</Option>
                        <Option value="hard">Difícil</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify="end">
                  <Button type="primary" htmlType="submit">
                    Salvar usuário
                  </Button>
                </Row>
              </Form>
            </Card>
          </Row>
          <Row
            gutter={[0, 24]}
            className="row"
            justify="space-around"
            align="middle"
          >
            <Card className="videoPlayer" title="Video">
              <Form>
                <Form.Item
                  name={["youtube_url"]}
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
              </Form>
              <YouTube
                videoId={youtubeVideoId}
                opts={{
                  height: "360",
                  width: "480",
                }}
              />
            </Card>
          </Row>
        </Col>
      </Row>
      <Row gutter={0} className="row" justify="space-around" align="middle">
        <Col span={10} className="col"></Col>
        <Col span={10} className="col"></Col>
      </Row>
    </>
  );
}
