export const RoadmapKey = {
  PAST: 'PAST',
  NOW: 'NOW',
  FUTURE: 'FUTURE',
  TEST: 'TEST',
} as const;

export type Roadmap = {
  title: string;
  contents: string;
  kind: 'DEV' | 'PLANNING' | 'MARKETING'; // 개발, 기획, 마케팅
  dueDate?: string;
};

export type TotalRoadmap = {
  [key in keyof typeof RoadmapKey]: Roadmap[];
};
