


export type folioType = {
  slug: string,
  nomen: string,
  mediaType: string,
  volume: string,
  postDate: string,
};

export type volumeType = {
  _id: string,
  nomen: string,
  precedence: number
};

export type pageType = {
  volume: string,
  folio: string,
}