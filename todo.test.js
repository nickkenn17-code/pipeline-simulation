const TodoApp = require("./todo");

describe("TodoApp (versi console)", () => {
  let app;

  beforeEach(() => {
    app = new TodoApp();
  });

  test("Add task", () => {
    app.addTask("Learn Node.js");
    expect(app.tasks.length).toBe(1);
    expect(app.tasks[0].text).toBe("Learn Node.js");
    expect(app.tasks[0].done).toBe(false);
  });

  test("Toggle task (valid id)", () => {
    app.addTask("Learn Jest");
    app.toggleTask(1);
    expect(app.findById(1).done).toBe(true);
  });

  test("Delete task (valid id)", () => {
    app.addTask("Learn OOP");
    app.deleteTask(1);
    expect(app.tasks.length).toBe(0);
  });

  test("Do not add empty tasks", () => {
    app.addTask("");
    expect(app.tasks.length).toBe(0);
  });

  // Edge-case tests: invalid indexes and findById behavior
  test("Toggle with invalid index does nothing", () => {
    app.addTask("Learn Jest");
    // index 0 is considered invalid by the implementation
    app.toggleTask(0);
    expect(app.findById(1).done).toBe(false);
  });

  test("Toggle non-existent id does nothing", () => {
    app.addTask("Learn Jest");
    // toggling an id that doesn't exist should leave existing tasks unchanged
    app.toggleTask(2);
    expect(app.findById(1).done).toBe(false);
  });

  test("findById with no id returns undefined", () => {
    app.addTask("Task");
    expect(app.findById()).toBeUndefined();
  });

  test("Delete with invalid index does nothing", () => {
    app.addTask("Learn OOP");
    app.deleteTask(0);
    expect(app.tasks.length).toBe(1);
  });
  
});
