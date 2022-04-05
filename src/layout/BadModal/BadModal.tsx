import React from 'react';
import NavBox from "../NavBox/NavBox";
import './_BadModal.scss';
import {Modal} from "@mui/material";

export default function BadModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (<Modal open={open}>
    <div>Content</div>
  </Modal>);
}
