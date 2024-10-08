import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorE1}) => {
  return (
    <Menu open = {false} anchorEl={anchorE1}>
      <div style={{
        width: "10rem",
      }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In commodi ab dolor, doloremque incidunt earum vel iusto reprehenderit consequatur, quae enim. At incidunt voluptate omnis debitis nesciunt et neque delectus.
      </div>
      </Menu>
  );
};

export default FileMenu
