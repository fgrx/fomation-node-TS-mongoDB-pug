interface Hike {
  slug: string;
  title: string;
  duration: number;
  image?: string;
  description: string;
  distance: number;
  start: string;
  postCode: number;
  difficulty: HikeDifficulty;
  isTop?: boolean;
  isValid?: boolean;
  isLoop: boolean;
  date?: Date;
}

type HikeDifficulty = "easy" | "medium" | "hard";

export { Hike, HikeDifficulty };
