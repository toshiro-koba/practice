import React from 'react';
import Article from './components/Article.jsx';

const App = () => {
  return (
    <>
      <div>Hello Reactabc</div>
      <Article
        title={'this is title'}
        content={'this is content'}
      />

      <Article
        title={'this is title2'}
        content={'this is content2'}
      />
    </>
  )
};

export default App;
