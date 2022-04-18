import React from 'react';
import './_BadSearch.scss';
import SearchIcon from '@mui/icons-material/Search';
import {Dialog, DialogContent, DialogTitle, ListItem, ListItemText, TextField} from "@mui/material";
import axios from "axios";
import {folioType} from "../../scripts/types";
import {useFlipTo} from "../../scripts/hooks";

const restUrl = "https://badgods.com:3030";

export default function BadSearch() {

  const flipTo = useFlipTo();
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
    <div className={"BadSearch-Icon-Wrapper uiOverlay hoverable"}>
      <SearchIcon className={"BadSearch-Icon hoverIcon"} fontSize={"large"} onClick={handleClickOpen}/>
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
          return <div className="searchLink" onClick={() => {
            flipTo(folio.volume, folio.slug);
            setSearchResults([]);
            handleClose()
          }} key={folio.slug}>
            <ListItem key={folio.slug}>
            <ListItemText primary={folio.nomen} />
            </ListItem>
          </div>
        })}
      </DialogContent>

    </Dialog>

  </>);
}
