class queue {
  constructor() {
        this.items = [];
    }
  isEmpty() {
    return this.items.length == 0;
  }
  push(element) {    
    this.items.push(element);
  }
  pop() {
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
  }
  front() {
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
  }
}