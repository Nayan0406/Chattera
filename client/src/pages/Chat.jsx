import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/Layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { graycolor, orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyleComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/SampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id: "mdasnsan",
  name: "nayan"
}

const Chat = () => {

  const containedRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containedRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={graycolor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}>
          
          {
            sampleMessage.map((i) => (
              <MessageComponent key = {i._id} message={i} user={user} />
            ))
          }
        </Stack>

        <form style={{
          height: "10%",
        }}>
          <Stack
            direction={"row"}
            height={"120%"}
            padding={"1rem"}
            alignItems={"center"}
            position={"relative"}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: "1.5rem",
                rotate: "-30deg",
              }}>
              <AttachFileIcon />
            </IconButton>

            <InputBox placeholder='Type message here...' />

            <IconButton
              type='submit'
              sx={{
                bgcolor: orange,
                color: "white",
                marginLeft: "1rem",
                padding: "0.5rem",
                "&:hover": {
                  bgcolor: "error.dark",
                },
              }}>
              <SendIcon />
            </IconButton>
          </Stack>
        </form>

        <FileMenu />
    </Fragment>
  )
}

export default AppLayout()(Chat);
