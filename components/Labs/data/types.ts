export type AllRoadmaps = {
  kr: TotalRoadmap;
  en: TotalRoadmap;
};

export const RoadmapKey = {
  PAST: 'PAST',
  NOW: 'NOW',
  FUTURE: 'FUTURE',
} as const;

export type Roadmap = {
  title: string;
  contents: string;
  kind: 'DEV' | 'PLANNING' | 'MARKETING'; // 개발, 기획, 마케팅
  dueDate?: string;
  isTest?: boolean;
};

export type TotalRoadmap = {
  [key in keyof typeof RoadmapKey]: Roadmap[];
};
