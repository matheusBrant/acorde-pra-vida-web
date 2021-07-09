import "./AddChords.css";

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Input, Form, Button, Select } from "antd";
import YouTube from "react-youtube";

import AddChordsForm from "./AddChordsForm";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

export default function AddChordsPage() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [textArea, setTextArea] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    let result = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setTextArea(result);
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
              editorClassName="editor"
              wrapperClassName="editor-wrapper"
              toolbarClassName="editortoolbar"
              editorState={editorState}
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
          </div>
        </Col>
        {/* <Card >
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: textArea }}
          ></div>
        </Card> */}
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
