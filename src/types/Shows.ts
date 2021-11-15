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
