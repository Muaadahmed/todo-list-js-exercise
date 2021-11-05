// Arrays to keep track of each task's state
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? " " : "not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'Take out all the 💩 out of the litter box'); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];

task1.logTaskState()
task1.completeTask();
task1.logTaskState()

console.log(tasks);
