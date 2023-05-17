import { hikeModel } from "../db/models/hikeModel";
import { Hike } from "../interfaces/hike";

interface SearchQuery {
  difficulty?: string;
  distance?: string;
  isLoop?: boolean;
  isValid?: boolean;
}

const hikeRepository = {
  getHikesWithPromises: (start: number, limit: number): Promise<Hike[]> => {
    return hikeModel
      .find()
      .skip(start)
      .limit(limit)
      .sort({ date: -1 })
      .then((result) => result);
  },

  getHikes: async (start: number, limit: number): Promise<Hike[]> =>
    await hikeModel.find().skip(start).limit(limit).sort({ date: -1 }),

  getHikeBySlug: async (slug: string): Promise<Hike | null> =>
    await hikeModel.findOne({ slug }),

  getNumberOfHikes: async (): Promise<number> => await hikeModel.find().count(),

  searchHikes: async (searchQuery: SearchQuery): Promise<Hike[]> =>
    await hikeModel.find(searchQuery).sort({ date: -1 }),

  updateHike: async (slug: string, updates: any): Promise<boolean> => {
    const res = await hikeModel.updateOne({ slug }, updates);
    return res ? true : false;
  },

  deleteHike: async (slug: string): Promise<boolean> => {
    try {
      const { deletedCount } = await hikeModel.deleteOne({ slug });
      return deletedCount ? true : false;
    } catch (error) {
      return false;
    }
  },

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
