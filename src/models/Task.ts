import { BaseModel } from "./BaseModel";

export class Task  {
  _id: string;
  name: string;
  completed: boolean;

  constructor(name: string, _id: string) {
    this._id = _id;
    this.name = name;
    this.completed = false;
  }
}

export default Task;
