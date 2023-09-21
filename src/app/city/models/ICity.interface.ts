export interface ICity {
  _embedded: Embedded
  _links: LinksCury
  count: number
}

export interface Embedded {
  "city:search-results": Result[]
}

export interface Result {
  _links: Links
  matching_alternate_names: MatchingAlternateName[]
  matching_full_name: string
}

export interface Links {
  "city:item": CityItem
}

export interface CityItem {
  href: string
}

export interface MatchingAlternateName {
  name: string
}

export interface LinksCury {
  curies: Cury[]
  self: Self
}

export interface Cury {
  href: string
  name: string
  templated: boolean
}

export interface Self {
  href: string
}
