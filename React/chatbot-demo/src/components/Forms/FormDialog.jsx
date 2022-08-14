import React, {useState, useCallback, useEffect} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from "./TextInput";

const FormDialog = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const inputName = (event) => {
    setName(event.target.value)
  }

  const inputEmail = (event) => {
    setEmail(event.target.value)
  }

  const inputDescription = (event) => {
    setDescription(event.target.value)
  }

  const submitForm = () => {
    const url = process.env.REACT_APP_SLACK_URL
    const payload = {
      text: 'お問い合わせがありました\n\n' +
            '`お名前`：' + name + '\n' +
            '`メールアドレス`：' + email + '\n' +
            '`お問い合わせ内容`：\n```' + description + '```'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      setName('')
      setEmail('')
      setDescription('')
      return props.toggle()
    })
  }

  return(
    <Dialog
      open={props.open}
      onClose={props.toggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        お問い合わせフォーム
      </DialogTitle>
      <DialogContent>
        <TextInput label={'お名前（必須）'} multiline={false} rows={1}
                    value={name} type={'text'} onChange={inputName} />
        <TextInput label={'メールアドレス（必須）'} multiline={false} rows={1}
                    value={email} type={'email'} onChange={inputEmail} />
        <TextInput label={'お問い合わせ内容（必須）'} multiline={true} rows={5}
                    value={description} type={'text'} onChange={inputDescription} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.toggle}>キャンセル</Button>
        <Button onClick={submitForm} autoFocus>
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog;
