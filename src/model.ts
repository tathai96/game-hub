export interface EachPlatformDetails {
    id: number;
    games_count: string;
    image_background: string;
    image: string;
    name: string;
    slug: string;
    year_start: number;
    year_end: number;
}

export interface PlatformDetails extends  GamePlatform{
    platforms: EachPlatformDetails[];
}

export interface PlatformResult {
    count: number;
    next: string | null;
    previous: string | null;
    results: PlatformDetails[];
}

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

export interface GameDetail {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    description_raw: string
    metacritic: number;
    metacritic_platforms: {
        metascore: number;
        url: string;
    }[];
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, unknown>;
    reactions: Record<string, unknown>;
    added: number;
    added_by_status: Record<string, unknown>;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: string;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: string;
    youtube_count: string;
    reviews_text_count: string;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    esrb_rating: {
        id: number;
        slug: string;
        name: string;
    };
    platforms: {
        platform: {
            id: number;
            slug: string;
            name: string;
        };
        released_at: string;
        requirements: {
            minimum: string;
            recommended: string;
        };
    }[];
}
