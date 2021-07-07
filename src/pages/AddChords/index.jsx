import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export default function AddChordsPage() {
  const [editorState, setEditorState] = useState({});
  const [textArea, setTextArea] = useState({});

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
      <Row>
        <Col span={4} offset={8}>
          <h1>Adicionar nova cifra</h1>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={16} offset={4}>
          <div>
            <Editor
              wrapperStyle={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#F1F1F1",
                background: "#fff",
                height: "400px",
                width: "80%",
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
      </Row>
    </>
  );
}
