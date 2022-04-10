import React from 'react';
import './_BadSearch.scss';
import SearchIcon from '@mui/icons-material/Search';
import {Dialog, DialogContent, DialogTitle, ListItem, ListItemText, TextField} from "@mui/material";
import {useSwiper} from "swiper/react";
import axios from "axios";
import {folioType} from "../../types";
import {Link} from "react-router-dom";

const restUrl = "https://badgods.com:3030";
const styles = {
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
  },
};

export type BadSearchProps = {}

export default function BadSearch({}: BadSearchProps) {

  const [open, setOpen] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<folioType[]>([])

  const handleSearch = (event: any) => {
    const searchString = event.target.value;
    if (searchString.length < 3) {
      return;
    }
    axios.get(restUrl + '/folios?search=' + searchString).then((response) => {
      setSearchResults(response.data);
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    <div className={"BadSearch-Icon-Wrapper uiOverlay"}>
      <SearchIcon className={"BadSearch-Icon"} fontSize={"large"} onClick={handleClickOpen}/>
    </div>
    <Dialog
      onClose={handleClose}
      scroll={"paper"}
      open={open}
      fullWidth={true}
    >
      <DialogTitle>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          onChange={handleSearch}
          label="Search"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogTitle>
      <DialogContent
      sx={{
        maxHeight: "40vh",
        height: "40vh",
      }}>
        {searchResults.map((folio: folioType) => {
          return <Link to={"/view/speak-with-monsters/chimera"} key={folio.slug}>
            <ListItem key={folio.slug}>
            <ListItemText primary={folio.nomen} />
            </ListItem>
          </Link>
        })}
      </DialogContent>

    </Dialog>

  </>);
}
