import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import UserItem from '../shared/UserItem'
import {sampleUsers} from "../../constants/SampleData"
import {useInputValidation} from "6pp"

const NewGroup = () => {

  const groupName = useInputValidation("");

  const [members, setMembers] = useState(sampleUsers);
  const [selectMembers, setSelectMembers] = useState([]);

  const selectMembersHandler = (id) => {
    setSelectMembers((prev) => prev.includes(id) ? prev.filter((currElement) => currElement !==  id) : [...prev, id]);
  };

  const submitHandler = () => {};

  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack padding={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>

        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />

        <Typography variant='body1'>Members</Typography>

        <Stack>
          {
            members.map((i) => (
              <UserItem 
                user={i}
                key={i._id}
                handler={selectMembersHandler} isAdded={selectMembers.includes(i._id)} />
            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color='error' size='large'>Cancel</Button>
          <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
