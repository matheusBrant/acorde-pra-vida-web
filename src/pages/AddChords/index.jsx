import "./AddChords.css";

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Input, Form, Button, Select } from "antd";
import YouTube from "react-youtube";

import AddChordsForm from "./AddChordsForm";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

export default function AddChordsPage() {
  const [editorState, setEditorState] = useState({});
  const [textArea, setTextArea] = useState({});
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

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
              <AddChordsForm
                onYoutubeVideoUpdate={setYoutubeVideoId}
              ></AddChordsForm>
            </Card>
          </Row>
          <Row
            gutter={[0, 24]}
            className="row"
            justify="space-around"
            align="middle"
          >
            <Card className="videoPlayer" title="Video">
              <Form></Form>
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
