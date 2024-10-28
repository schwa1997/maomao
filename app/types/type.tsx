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
    media: {
        books: Book[];
        music: Music[];
        shows: Show[];
    };
}

interface Community {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
}

interface Book {
    id: number;
    name: string;
    creator: string;
    category: string;
    description: string;
    image: string;
    quotes: string[];
    comments: string[];
}
interface Music {
    id: number;
    name: string;
    creator: string;
    category: string;
    description: string;
    image: string;
    comments: string[];
}
interface Show {
    id: number;
    name: string;
    creator: string;
    category: string;
    description: string;
    image: string;
    quotes: string[];
    comments: string[];
}

interface Blog {
    id: number;
    author: string;
    title: string;
    description: string;
    link: string;
    content: string;
    image: string;
}
interface TimelineEvent {
    title: string;
    date: string;
    description: string;
    work: string;
}
export type { Tutorial, Tweet, Comment, Resources, Community, Book, Show, Music, Blog, TimelineEvent };
