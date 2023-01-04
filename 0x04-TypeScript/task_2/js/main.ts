interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workDirectorTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

function executeWork(employee) {
  if (employee instanceof Director) {
    return workDirectorTasks();
  } else if (employee instanceof Teacher){
    return workTeacherTasks();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(200));

function teachClass(todayClass: 'Math' | 'History'): string {
  if (todayClass === 'Math') {
    return "Teaching Math";
  } else if (todayCLass === 'History') {
    return "Teaching History";
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
