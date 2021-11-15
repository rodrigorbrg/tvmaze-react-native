export interface Episode {
  name: string,
  image: {
    original: string,
    medium: string,
  }
  season: number,
  number: number,
  airdate: string,
  summary: string,
}

export interface Show {
  id: number,
  image: {
    original: string,
    medium: string,
  }
  name: string,
  premiered: string,
  ended: string,
  genres: string,
  summary: string,
}