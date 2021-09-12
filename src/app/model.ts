export class Model {
  user: any;
  items: any;
  constructor() {
    this.user = "Alkım Civelek";
    this.items = [
      new ToDoItem("Kahvaltı", true),
      new ToDoItem("Spor", false),
      new ToDoItem("Eğitim", false),
      new ToDoItem("Kitap Okuma", false)
    ];
  }
}

export class ToDoItem {
  description: any;
  action: any;

  constructor(description: any, action: any) {
    this.description = description;
    this.action = action;
  }
}
