export interface GenreResult {
    count: number;
    next: string | null;
    previous: string | null;
    results: Genre[];
}

export interface Genre {
    id: number;
    games: GenreGame[];
    games_count: string;
    image_background: string;
    name: string;
    slug: string;
}

export interface GenreGame {
    id: number;
    added: string;
    name: string;
    slug: string;
}

export interface GamePlatform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number; // integer (ID)
    slug: string; // string <slug>, non-empty, ^[-a-zA-Z0-9_]+$
    name: string; // string (Name), non-empty
    released: string; // string <date> (Released)
    tba: boolean; // boolean (TBA)
    background_image: string; // string <uri> (Background image)
    rating: number; // required, number (Rating)
    rating_top: number; // integer (Rating top)
    ratings: Record<string, any>; // object (Ratings)
    ratings_count: number; // integer (Ratings count)
    reviews_text_count: string; // string (Reviews text count)
    added: number; // integer (Added)
    added_by_status: Record<string, any>; // object (Added by status)
    metacritic: number; // integer (Metacritic)
    playtime: number; // integer (Playtime) in hours
    suggestions_count: number; // integer (Suggestions count)
    updated: string; // string <date-time> (Updated)
    esrb_rating: Record<string, any> | null; // object Nullable
    platforms: Array<Record<string, any>>; // Array of objects
    parent_platforms: { platform: GamePlatform }[];
}

export interface FetchGamesResponse {
    count: number; // required, integer
    next: string | null; // string <uri>, Nullable
    previous: string | null; // string <uri>, Nullable
    results: Game[]; // required, Array of objects (Game)
}