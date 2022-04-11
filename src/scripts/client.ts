import axios from "axios";

const restUrl = "https://badgods.com:3030";

export const loadVolumes = (callable: Function) => {
  axios.get(restUrl + '/volumes').then((response) => {
    callable(response.data);
  });
}

export const loadFoliosForVolume = (volumeSlug: string, callable: Function) => {
  axios.get(`${restUrl}/volumes/${volumeSlug}/folios`).then((response) => {
    callable(response.data);
  });
}