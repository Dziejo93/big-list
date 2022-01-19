export interface Course {
  imageUrl: string;
  name: string;
  count: number;
  categories: string[];
}

export type Courses = Array<Course>;
