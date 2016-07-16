console.log("成功！")
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('My name is '+this.name);
    }
}

var animal=new Animal('Song');

animal.sayName();
