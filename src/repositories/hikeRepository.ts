import { hikeModel } from "../db/models/hikeModel";
import { Hike } from "../interfaces/hike";

interface SearchQuery {
  difficulty?: string;
  distance?: string;
  isLoop?: boolean;
}

const hikeRepository = {
  getHikes: async (start: number, limit: number): Promise<Hike[]> =>
    await hikeModel.find().skip(start).limit(limit),

  getHikeBySlug: async (slug: string): Promise<Hike | null> =>
    await hikeModel.findOne({ slug }),

  getNumberOfHikes: async (): Promise<number> => await hikeModel.find().count(),

  searchHikes: async (searchQuery: SearchQuery): Promise<Hike[]> =>
    await hikeModel.find(searchQuery),

  addHike: async (hike: Hike): Promise<Hike | false> => {
    try {
      return await hikeModel.create(hike);
    } catch (error) {
      console.log("error", error);
      return false;
    }
  },
};
export { hikeRepository };
