interface Tutorial {
    id: number;
    title: string;
    description: string;
    content: string;
    video: string;
    image: string;
    tags: string[];
}

interface Tweet {
    id: number;
    created_at: string;
    full_text: string;
}
interface Comment {
    tweet_id: number;
    comment: string;
}   

interface Resources {
    communities: Community[];
    media: Media[];
}

interface Community {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
}

interface Media {
    id: number;
    name: string;
    creator: string;
    category: string;
    description: string;
    image: string;
    quotes: string[];
}

interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
}

export type { Tutorial, Tweet, Comment, Resources, Community, Media, Blog };
