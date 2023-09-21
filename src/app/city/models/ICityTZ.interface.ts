import { Cury, Self } from "./ICity.interface"

export interface ICityTZ {
  _links: Links
  base_offset_min: number
  dst_offset_min: number
  end_time: string
  short_name: string
  total_offset_min: number
  transition_time: string
}

export interface Links {
  curies: Cury[]
  self: Self
  "tz:timezone": TzTimezone
}


export interface TzTimezone {
  href: string
}
