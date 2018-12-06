var a = require('readline')
// var globalVar = "This is global variable";
// function fun(){
//     var localVar = "This is local variable";
//     console.log(globalVar);
//     console.log(localVar);
// }
//  fun();

// if statement
//    var i = 15;
//    if (i > 10)
//      console.log("I am in IF");
//    console.log("i am not in if");
// nested if
// var i = 10;
// if(i == 10){ 
//     if (i<15)
//        console.log("i is smaller than 15");
//     if(i<12)
//        console.log("i is smaller than 12 too..")
//     else
//         console.log("i is greater than 12");   
//    }
// var i = 20;
// if(i == 10)
//    console.log("i is 10")
// else if(i == 15)
//     console.log("i is 15")
// else if(i == 20)
//      console.log("i is 20")
// else
//      console.log("i is not present") 
//Switch case..
// var i = 10;
// switch(i)
// {
//     case 0:
//        console.log("i is zero");
//        break;
//     case 1:
//         console.log("i is one")
//         break;
//     case 2:
//         console.log("i is 2")
//         break;
//     default:
//          console.log("i is greater than 2")

// }

// LOOPS IN JAVASCRIPT
// for(var i=0; i<10; i++)
// {
//     console.log("reshma")
//  }
// var x =1;
// while(x<=4){
//     console.log("value of x is:" +x)
//     x++;
// }
// iterate using for loop
// var languages ={ first :"C",Second :"java",Third :"Python",
//                 Fourth :"JScript",  Fourth :"JScript"};
// for(itr in languages)  {
//     console.log(languages[itr]);
// }              
//Do whiile loop
//  var  x = 21;
 
//  {
//      console.log("value of x:"+x);
//      x++;

//  }while(x<20);
// function welcomeMsg(name){
//     console.log("hello " +name+ " how are you");
// }
//     var nameVal="Reshma";
//     welcomeMsg(nameVal);

// function Rectangle()
// {
//     var length,width;
//     function Create(l,w)
//     {
//         length = l;
//         width = w;
//     }
//     function getArea()
//     {
//         return(length*width);
//     }
//     function getPerimeter()
//     {
//         return( 2*(length + width));
//     }
//     var publicAPI = {Create:Create,
//         getArea:getArea,
//         getPerimeter:getPerimeter};
//     return publicAPI;
// }    

//     var myRect = Rectangle()
//     myRect.Create(4, 5);
//     console.log("area:"+myRect.getArea());
//     console.log("perimetre:"+myRect.getPerimeter());

// closure
// function foo()
// {
//     var b = 1;
//      function inner(){
//         return b;
//     }
//       return n;

// }

// var get_func_inner = foo();
// console.log(get_func_n());
// console.log(get_func_n());

// function foo() 
// { 
//      var b = 1;
//      function inner(){
//            return b; 
//     } 
//      return n; 
// } 
//          var get_func_inner = foo();          
  
//          console.log(get_func_n()); 
//          console.log(get_func_n()); 
//          console.log(get_func_n()); 
//          console.dir(get_func_inner); 

//defining object(Using object literal)
// var person = {first_Name:"Reshma",
//             Last_name:"Suryawanshi",
//            // Method
//            getName : function()     
//            {
//                return "persons name is "+this.first_Name+" "
//                +this.Last_name;
//            } ,
//             //object within object
//             phone_number: 
//             {
//                 Mo_number:1234567890,
//                 Land_line_no:5689
//             }
//         }
// console.log(person.getName());
// console.log("Persons name is "+person.first_Name + " "+
// person.Last_name + " Phone no is "+person.phone_number.Land_line_no);   
            // defining object using constructor
//   function person(first, Last){
//       this.first_Name = first;
//      this.Last_name = Last;
//   }
//      person.prototype.getDetails = function(){
//          return "Person name is "+this.first_Name+" "
//          +this.Last_name;
//      }

//     var p1 = new person("Reshma","Suryawanshi");
//     console.log(p1.first_Name);   
//     console.log(p1.Last_name);
//     console.log(p1.getDetails());
           
// class creation using ES6 method
// class Employee{
//     //initialize constructor to getproperty
//     constructor(Ename,Eid){
//          this.Ename =Ename;
//         this.Eid = Eid;
//     }
//     getDetails(){
//         return "Employee name is "+this.Ename+
//        " and id is " +this.Eid;
//     }
// }
//    var emp1 = new Employee("Reshma","10");
//    console.log(emp1.getDetails());   

// Encapsulation
// class Person{
//     constructor(Name,id){
//         this.Name=Name;
//         this.id=id;
//     }
//     Person_add(add){
//         this.add =add;
//     }
//     getDetails(){
//         return "Person name is "+this.Name +",and id is "+
//         this.id+",address is "+this.add;
//     }
// }
// var p2 = new Person("Reshma","hrishikesh");
// p2.Person_add("Pune");
// console.log(p2.getDetails());

//hiding data
// function person(fname,lname){
//     // This properties are not visible  
//     // outside the scope of the object
//     var first_Name = fname;
//     var Last_name =lname;
//     var get_Details_noaccess = function(){
//         return "person name is "+first_Name+"last name is "
//         +Last_name;

//     };
//     this.get_Details_access=function()
//     {
//         return "person name is "+first_Name+"last name is "
//         +Last_name;
//     };
// }
// var p3 = new person("abc","xyz");
// console.log(p3.first_Name);
// console.log(p3.get_Details_noaccess);
// console.log(p3.get_Details_access());


// class person{
//      // Initializing the name
//     constructor(name){
//         this.name = name;
//     }
//         // toString method returns the name 
//     toSting(){
//         return "Name is "+ this.name;
//     }

// }
// // Defining the student class 
// // It is the derived class 
// // It extends Person 
// class student extends person{
//     constructor(name,sid){
//                 // calling the super class constructor 
//         super(name);
//         this.sid=sid;
//     }
//       // toString method retuns the student detail 
//     // Overriding the toString method from base  
//     // class 
//     toSting(){
//         return super.toSting() + "stud id is "+this.sid;
//     }
// }
// var s1 = new student("reshma","123");
// console.log(s1.toSting());
// Two ways of array declaration
//var house =[];
//var house = new Array();
// var house =["1BHK","2BHK"];//Initializing while declaring.
//initializing after declaring
//  var house=[];
//  house[0]="1BHK";
//  house[1]="2BHK";
//  console.log(house);

//Another way of declaring array
// var house = new Array(10,20,30);
// var house1 = new Array("reshma");
// var home = new Array(5);
// console.log(house,house1,home);
// var house =["1BHK",25000,"rent",true];
// console.log(house[0]+"cost ="+house[1]);
// var cost_of_1bhk=house[1];
// var on_rent = house[3];
// console.log("cost of 1BHK",+house[1]);
// console.log("is for rent",+house[3]);

//lenght of an array
// var house =["1BHK",25000,"rent",true];
// var len=house.length;
// for(var i=0;i<len;i++){
//     console.log(house[i]);
// }

// array functions(array.every() and array.some())

// function array_every_fun(arr){
//     return arr.every(function(element){
//          return(element<100);
        
//     }
//     );
    
// }
// array_every_fun([10,20,30]);
// array_every_fun([60,120]);
// //array_every_fun.every(callback[array_every_fun]);

//  filter function of array
// function array_filter(stud){
//     return stud.filter(function(stud){
//         return stud.per >80 ? true:false;
//     });

// }
//  stud = [
//      {studid:"124",per : 56},
//      {studid:"14",per :66}

//  ];

// console.log(array_filter(stud));
