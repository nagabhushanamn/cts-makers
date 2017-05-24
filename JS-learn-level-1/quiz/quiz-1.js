function Person(name, age) {
    this.name = name;
    this.age = age;
}

new Person("Abc", 100);


// var ee = new EventEmitter(); // NG2

// best-practice : never invoke constructor without 'new'