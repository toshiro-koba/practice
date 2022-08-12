import React from "react";
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import {Chat} from './index'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '36ch',
  },
});

const Chats = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {props.chats.map((chat, index) => {
        return <Chat key={index.toString()} text={chat.text} type={chat.type} />
      })}
    </List>
  )
}

export default Chats;
