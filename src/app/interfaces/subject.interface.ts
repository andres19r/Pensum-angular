export interface Subject {
  code: string;
  name: string;
  state: SubjectState;
  score?: number;
  prerequisite?: string;
  semester: number;
}

export type SubjectState = 'Approved' | 'Reproved' | 'In progress';
