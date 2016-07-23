class Animal {//创建一个类,类里面包含数据和函数(行为)
    constructor(name,weight) {//构造函数,自动执行.
        this.myName = name;
        this.myWeight=weight;
        // console.log('My name is '+this.myName+"my weight is "+this.myWeight);
    }
    sayName() {
        console.log('My name is '+ this.myName +" my weight is "+this.myWeight);
    }
}
class print{
  hello(){
    console.log("hello word!")
  }
}
let a= new print;
let song=new Animal('Song','60kg');
let guo=new Animal('锅盖儿','62kg');
//new 实例化,class==>object
a.hello()//调用类函数
song.sayName();
guo.sayName();
