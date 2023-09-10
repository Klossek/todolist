import { Task } from './Task';

export interface User {
  id: number;
  name: string;
  email: string;
  tasks?: Task[];
}
