import React from 'react';
import './_BadModal.scss';
import {
  Dialog,
  DialogContent,
  DialogTitle, List, ListItem, ListItemText,
} from "@mui/material";
import {folioType} from "../../types";

export type BadModalProps = {
  folios: folioType[];
}

export default function BadModal({folios}: BadModalProps) {


  return (<Dialog
    scroll={"paper"}
    open={true}>
      <DialogTitle>
        Table of Contents
      </DialogTitle>
    <DialogContent>
      <List>
        {folios.map((folio) => (
          <ListItem button onClick={() => {}} key={folio.slug}>
            <ListItemText primary={folio.nomen} />
          </ListItem>
        ))}
      </List>
    </DialogContent>

  </Dialog>);
}
