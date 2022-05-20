import { BaseModel } from "./BaseModel";

export class Task extends BaseModel {
  _id: string;
  name: string;
  completed: boolean;

  constructor(name: string, _id: string) {
    super();
    this._id = _id;
    this.name = name;
    this.completed = false;
  }
}

export default Task;
