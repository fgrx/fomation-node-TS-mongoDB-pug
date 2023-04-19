import hikeData from "../data/hikes";
import { Hike } from "../interfaces/hike";

const hikeRepository = {
  getHikes: (start: number, limit: number): Hike[] => {
    const hikes = hikeData as Hike[];
    return hikes.slice(start, limit);
  },

  getHikeBySlug: (slug: string): Hike | false => {
    const hikes = hikeData as Hike[];

    const hike = hikes.find((hike) => hike.slug === slug);

    if (!hike) return false;

    return hike;
  },
};

export { hikeRepository };
