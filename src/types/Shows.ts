export interface Episode {
  id: number;
  name: string;
  image: {
    original: string;
    medium: string;
  };
  season: number;
  number: number;
  rating: {
    average: number;
  };
  airdate: string;
  summary: string;
  airstamp: string;
  airtime: string;
}

export interface Show {
  id: number;
  image: {
    original: string;
    medium: string;
  };
  name: string;
  premiered: string;
  ended: string;
  genres: string[];
  summary: string;
}

export interface ShowReference {
  _links: {
    character: {
      href: string;
    };
    show: {
      href: string;
    };
  };
}

export interface Person {
  id: number;
  image: {
    original: string;
    medium: string;
  };
  name: string;
  birthday: string;
}

export interface Character {
  id: number;
  name: string;
}

export interface CastType {
  character: Character;
  person: Person;
}
