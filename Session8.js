// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG = (objectt) => {
    console.log(objectt.filter((x) => x.rating == "PG"));
  };

  getPGOwn = () => {
    console.log(this.rating);
  };
}
const obj = [
  { title: "xx", studio: "disney", rating: "PG" },
  { title: "yy", studio: "kjsdfjk", rating: "Not PG" },
];
console.log("Task1 OutPut:");
var film = new Movie("Casino Royale", "Eon Productions", "PG­13");
film.getPGOwn();
film.getPG(obj);

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
 }
  circle=()=> {
    this.radius = 1.0;
    this.color = "red";
  }
  circle = (radius,color) => {
    this.radius = radius;
    this.color = color;
  }
  circle = (radius) => {
    this.radius = radius;
  }

  getRadius = () => {
    return this.radius;
  }
  setRadius = (radius) => {
    this.radius = radius;
  }
  
  getColor = () => {
    return this.color;
  }
  setcolor = (color) => {
    this.color = color;
  }

  toString = () => {
    return this.color;
  }

  getArea = () => {
    return 3.14* this.radius * this.radius;
  }

  getCircumference = () => {
    return (2 * 3.14 * this.radius);
  }

}
console.log("Task2 OutPut:");
var cir = new circle(5,"red");
console.log(cir.getColor(),cir.getRadius(),cir.getArea());

//3. Write a “person” class to hold all the details.

class Person {

  constructor(rollno, name, dob, age, address) {
    this.rollno = rollno;
    this.name = name;
    this.dob = dob;
    this.age = age;
    this.address = address;
  }
  setRollno = (rollno) => {
    this.rollno = rollno;
  }
  getRollno = () =>
  {
    return this.rollno;
    }
}
var per = new Person();
per.setRollno(44);

console.log("Task3 OutPut:");
console.log(per.getRollno());
 //4. write a class to calculate uber price.
 class Car{
    constructor(kms,min)
    {
        this.kms=kms;
        this.min=min;
        this.cost_per_min = 1.5;
        this.cost_per_km = 0;
        this.base_far = 10;
        this.booking_fee = 20;
        this.total_amount = 0;
        
    }
  
    calc()
    {
        if(this.kms <= 20)
        {
            this.cost_per_km = 6;
            this.total_amount = this.base_far+(this.cost_per_min*this.min)+(this.cost_per_km*this.kms)+this.booking_fee;
        }
        else if(this.kms > 20)
        {
            this.cost_per_km = 12;
            this.total_amount = this.base_far+(this.cost_per_min*this.min)+(this.cost_per_km*this.kms)+this.booking_fee;
        }
        console.log("Total Amount : " + this.total_amount);
    }
    
 }
console.log("Task4 OutPut:");
let obj1 = new Car(15,20)
let obj2 = new Car(25,50)
obj1.calc();
obj2.calc();
