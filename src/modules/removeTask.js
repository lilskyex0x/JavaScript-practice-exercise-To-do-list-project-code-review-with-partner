import tasks from './tasks.js';

const removeTask = (index) => {
  const temp = tasks.filter((task) => task.index !== index);
  tasks.splice(index, 1);
  let counter = 1;
  temp.forEach((element) => {
    element.index = counter;
    tasks.push(element);
    counter += 1;
  });
};

export default removeTask;