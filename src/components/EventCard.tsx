import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { DateIcon } from "../icons/DateIcon";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import type { EventProps } from "../types/Event";
import { LocationIcon } from "../icons/LocationIcon";
import { ImageIcon } from "../icons/ImageIcon";

dayjs.extend(localizedFormat);

export function EventCard(props: EventProps) {
    const { title, description, category, imageSrc, startDate, endDate, location, slug } = props;
    return (
        <div className="p-2 rounded-lg bg-[#15111f] border border-white/5 flex flex-col">
            <img 
                alt="event"
                src={imageSrc}
                className="aspect-video rounded-md"
            />
            <div className="flex flex-col mt-2 flex-grow">
                <span className="text-xs px-2 py-0.5 bg-purple-900 rounded-full w-fit mb-2 flex items-center text-purple-200"> # {category} </span>
                <h2 className="text-lg font-bold mb-1">
                    {title}
                </h2>
                <p className="flex-grow- line-clamp-4">
                    {description}
                </p>

                <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-2 w-fit mt-2">
                    <DateIcon className="size-3" />
                    {dayjs(startDate).format("ll")} - {dayjs(endDate).format("ll")}
                </span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-2 w-fit mt-2">
                    <LocationIcon className="size-3" />
                    {location}
                </span>

                <a href={slug ?? "#"} className="flex items-center gap-3 px-4 py-2 bg-purple-600 rounded-md mt-4 hover:bg-purple-600/80 text-sm w-fit">
                    Ver más <RightArrowIcon className="size-4" />
                </a>
            </div>
        </div>  
    )
}

export function EventCardSkeleton() {
    return (
    <div className="p-2 rounded-lg bg-[#15111f] border border-white/5">
        <div
            className="aspect-video rounded-md bg-white/10 animate-pulse flex items-center justify-center"
        >
            <ImageIcon className="text-white/10 size-8" />
        </div>
        <div className="flex flex-col mt-2">
            <span className="text-xs px-2 py-0.5 bg-white/5 animate-pulse rounded-full w-fit mb-2 flex items-center text-transparent"> # category </span>
            <h2 className="text-lg font-bold mb-1 text-transparent bg-white/5 animate-pulse rounded-md w-fit">
                Header Title For cARD
            </h2>

            <div className="flex flex-wrap gap-1.5 w-full mt-2 [&_*]:rounded-md">
                <div className="bg-white/5 h-3 w-20" />
                <div className="bg-white/5 h-3 w-32" />
                <div className="bg-white/5 h-3 w-44" />
                <div className="bg-white/5 h-3 w-12" />
                <div className="bg-white/5 h-3 w-8" />
                <div className="bg-white/5 h-3 w-48" />
                <div className="bg-white/5 h-3 w-12" />
                <div className="bg-white/5 h-3 w-8" />
                <div className="bg-white/5 h-3 w-20" />
                <div className="bg-white/5 h-3 w-8" />
                <div className="bg-white/5 h-3 w-44" />
                <div className="bg-white/5 h-3 w-44" />
                <div className="bg-white/5 h-3 w-32" />
                <div className="bg-white/5 h-3 w-8" />
                <div className="bg-white/5 h-3 w-20" />

            </div>

            <span className="text-xs px-2 bg-white/5 animate-pulse rounded-full flex items-center gap-2 w-fit mt-2 text-transparent">
                <DateIcon className="size-2" />
                18 de Día - 20 salida de día
            </span>
            <span className="text-xs px-2 bg-white/5 animate-pulse rounded-full flex items-center gap-2 w-fit mt-2 text-transparent">
                <DateIcon className="size-2" />
                Location / dAY
            </span>
            
            <span className="flex items-center gap-3 px-4 py-2 bg-white/5 animate-pulse rounded-md mt-4 text-transparent text-sm w-fit">
                Ver más
                <RightArrowIcon className="size-4" />
            </span>
        </div>
    </div>  
    )
}