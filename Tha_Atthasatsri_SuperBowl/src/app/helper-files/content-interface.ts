
export interface Content{
    id?: number; // Make id property nullable
    title: string;
    description: string;
    creator: string;
    imgUrl?: string;
    type?: string;
    tags?: string[];
}