import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = () => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content, editor);
  };

  return (
    <Editor
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TextEditor;
