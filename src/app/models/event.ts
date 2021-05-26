import { Category } from './category';

export interface Event {
    id: number;
    name: string;
    slug: string;
    location: string;
    date: Date;
    time: string;
    description: string;
    speakers: string;
    category: Category;
}