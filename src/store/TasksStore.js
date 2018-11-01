import {action, computed, observable} from 'mobx';
import Task from "./task";

export class TasksStore {
  /**
   * @type {Task[]} contains list of Tasks
   */
  @observable tasksList = [];

  constructor() {
    this.map = this.tasksList.map.bind(this.tasksList);
  }

  @action.bound
  removeTask(item) {
    return this.tasksList.remove(item);
  }

  @action.bound
  addTask(title) {
    this.tasksList.push(new Task(title));
  }

  @computed
  get counts() {
    return this.tasksList.length;
  }

}

export default new TasksStore();