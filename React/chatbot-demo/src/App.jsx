import React, { useState, useEffect, useCallback } from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';
import FormDialog from './components/Forms/FormDialog';
import { db } from './firebase/index'

const App = () => {
  const [answers,   setAnswers]   = useState([]);
  const [chats,     setChats]     = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset,   setDataset]   = useState(defaultDataset);
  const [open,      setOpen]      = useState(false);

  const displayNextQuestion = (nextQuestionId) => {
    const nextDataset = dataset[nextQuestionId]
    addChats({
      text: nextDataset.question,
      type: 'question'
    })

    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case(nextQuestionId === 'contact'):
        toggle()
        break;
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })

        setTimeout(() => displayNextQuestion(nextQuestionId), 500)
        break;
    }

  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  const toggle = useCallback(() => {
    // ポイント：更新前の値を利用して、反転させる
    setOpen(prevStatus => {
      return !prevStatus
    })
  }, [setOpen]);

  useEffect(() => {
    (async() => {
      const initDataset = {};

      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      });

      setDataset(initDataset)
      displayNextQuestion(currentId)
  })();
  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FormDialog open={open} toggle={toggle} />
      </div>
    </section>
  );
}

export default App;
