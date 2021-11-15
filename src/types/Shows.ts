export interface Episode {
  id: number,
  name: string,
  image: {
    original: string,
    medium: string,
  },
  season: number,
  number: number,
  rating: {
    average: number
  };
  airdate: string,
  summary: string,
}

export interface Show {
  id: number,
  image: {
    original: string,
    medium: string,
  },
  name: string,
  premiered: string,
  ended: string,
  genres: string,
  summary: string,
}

export interface ShowReference {
  id: number,
  _links: {
    show: {
      href: string
    },
  }
}

export interface Person {
  id: number,
  image: {
    original: string,
    medium: string,
  },
  name: string,
  birthday: string,
}