export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster: string;   // /assets/posters/xxx.jpg
  backdrop: string; // /assets/backdrops/xxx.jpg
  year?: number;
  rating?: number;  // 0..10
  genres?: string[];
  type?: 'movie'|'tv';
}

export interface Row {
  id: string;       // "trending", "action", etc.
  title: string;    // "Tendances", "Action", ...
  items: Movie[];
}
