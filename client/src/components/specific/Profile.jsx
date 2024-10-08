import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from "moment"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar 
        sx={{
            width: 200,
            height: 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white"
        }}/>
        <ProfileCard 
        heading={"Bio"} 
        text={"hii hello why"} 
        />
        <ProfileCard 
        heading={"Username"} 
        text={"Nayan"} 
        Icon={<UserNameIcon />} 
        />
        <ProfileCard 
        heading={"Name"} 
        text={"Nayan Nikhare"} 
        Icon={<FaceIcon />} 
        />
        <ProfileCard 
        heading={"Joined"} 
        text={moment("2024-9-24").fromNow()} 
        Icon={<CalendarIcon />}
        />
    </Stack>
  )
}

const ProfileCard = ({ text, Icon, heading }) => (
    <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}>

        {Icon && Icon}

        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color={"grey"} variant='caption'>{heading}</Typography>
        </Stack>
    </Stack>
)

export default Profile
