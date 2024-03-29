import React from "react";
import { createStyles, makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import {Chat} from './index'

const useStyles = makeStyles(() =>
  createStyles({
    "chats": {
      height: "363px",
      padding: "0",
      overflow: "auto"
    }
  }),
);

const Chats = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.chats} id={'scroll-area'}>
      {props.chats.map((chat, index) => {
        return <Chat key={index.toString()} text={chat.text} type={chat.type} />
      })}
    </List>
  )
}

export default Chats;
