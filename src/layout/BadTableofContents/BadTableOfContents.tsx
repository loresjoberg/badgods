import React from 'react';
import './_BadTableOfContents.scss';
import Toc from '@mui/icons-material/Toc';
import {Button, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText} from "@mui/material";
import {folioType} from "../../scripts/types";
import {useFlipTo} from "../../scripts/hooks";

export type BadTableOfContentsProps = {
  folios: folioType[];
}

export default function BadTableOfContents({folios}: BadTableOfContentsProps) {

  const flipTo = useFlipTo();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen =  () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (<>
      <div className={"BadTableOfContents-Icon-Wrapper uiOverlay"}>
        <Toc className={"BadTableOfContents-Icon"} fontSize={"large"} onClick={handleClickOpen}/>
      </div>
      <Dialog
        onClose={handleClose}
        scroll={"paper"}
        open={open}
        fullWidth={true}
      >
        <DialogTitle>
          Table of Contents
          <Button
            color={"secondary"}
            variant={"outlined"}
            size={"small"}
            sx={{
              position: 'absolute',
              right: 12,
              top: 12,
            }}>
            View Library
          </Button>
        </DialogTitle>
        <DialogContent dividers={true}>
          <List>
            {folios.map((folio: folioType) => (
              <ListItem button onClick={() => {
                flipTo(folio.volume, folio.slug);
                handleClose();
              }} key={folio.slug}>
                <ListItemText primary={folio.nomen} />
              </ListItem>
            ))}
          </List>
        </DialogContent>

      </Dialog>
  </>
 );
}
