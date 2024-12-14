export type EventProps = {
    category: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    imageSrc: string;
    slug?: string;
    location?: string;
}