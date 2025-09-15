export interface IBeastResponse {
  id: string,
  name: string,
  images: string[],
  personal: {
    'jinchūriki': string[],
}
}

export interface IBeast {
    id: string,
    name: string,
    image: string | null,
    jinchuriki: string[],
  }
  