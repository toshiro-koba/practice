import React from 'react';
import { useState } from "react";
import Title from "./Title";
import Content from "./Content";
import PublishButton from "./PublishButton";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    const updatedValue = !isPublished;
    setIsPublished(updatedValue);
  }

  return (
    <div>
      <Title   title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  );
};

export default Article;
