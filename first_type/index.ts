import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface todo {
  id: number;
  title: string;
  completed: boolean;
}
axios
  .get(url)
  .then((res) => {
    const todo = res.data as todo;
    const id = todo.id;
    const completed = todo.completed;
    const title = todo.title;

    logitem(id, title, completed);
  })
  .catch((er) => console.log(er.message, 'from error'));
const logitem = (id: number, title: string, completed: boolean) => {
  console.log(`${id} -> ${title} -> ${completed}`);
};
