import { Links } from "./ICity.interface"

export interface ICityImage {
  _links: Links
  photos: Photo[]
}

export interface Photo {
  attribution: Attribution
  image: Image
}

export interface Attribution {
  license: string
  photographer: string
  site: string
  source: string
}

export interface Image {
  mobile: string
  web: string
}
