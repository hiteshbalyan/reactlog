import {observable} from 'mobx';

let nextTodoId = 0;

class Task {
  id;
  @observable title;
  constructor(title = '') {
    this.id = ++nextTodoId;
    this.title = title;
  }
}

export default Task;