// var readline = require('readline')

// var read = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout

// });
// read.setPrompt();
// read.prompt();

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

//remove undefined functions from array

// function remove(myArray){
//     return myArray.filter(function(element, index, array){
//         return element;
//     });
// }
// var arr = [1, undefined,3,undefined,5];
// console.log(arr);
// console.log(remove(arr));

// function map()

// function array_map(stud){
//     return stud.map(function(student, index, array){
//        student.bIsDistinction=(student.per >= 75.0) ? true : false;
//       return student;
 
// });
// }
// stud =[
//     {studid:"15",per:66.2},
//     {studid:"5",per:96.1},
//     {studid:"1",per:56.3},
//     {studid:"105",per:86.4}
// ];
// console.log(array_map(stud));

//reduce() function of array
// function array_reduce(previousValue, currentValue, index, array){
//     return previousValue + currentValue;
// }

// var arr = [1,2,3,4,5].reduce(array_reduce);
// console.log(arr);

// var arr=[
//     {studid:"res",per:200,location:"pune"},
//     {studid:"asd",per:100,location:"pune"},
//     {studid:"wer",per:66,location:"mumbai"},
//     {studid:"hj",per:100,location:"pune"}


// ];
// function arrayreduce(previousValue,currentValue,index, array){
//     if(currentValue.location === "pune"){
//         return previousValue + currentValue.per;
//     }
//     return previousValue;
// }
// var result = arr.reduce(arrayreduce);
// console.log(result);
// var arr=[{name: "customer 1", sales: 500, location: "NY"}, 
//          {name: "customer 1", sales: 200, location: "NJ"}, 
//           {name: "customer 1", sales: 700, location: "NY"}, 
//          {name: "customer 1", sales: 200, location: "ORD"}, 
//          {name: "customer 1", sales: 300, location: "NY"}]; 
  
// function reduceFun2(previousValue, currentValue, index, array){ 
//     if(currentValue.location === "NY"){ 
//         return previousValue + currentValue.sales; 
//     } 
//     return previousValue; 
// } 
  
// var totalSalesInNY = arr.reduce(reduceFun2); 
  
// console.log(totalSalesInNY);

// concat array

// var arr1 = [1,2,3,4,5];
// var arr2 = [6,9,8,7];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);

// with keyword
         // Define a function which will work as a method
// function addPrice(amount){
//     with(this){
//         price = amount;
//     }
// }
// function book(author){
//     this.author = author;
//     this.price = 0;
//     this.addPrice = addPrice; //Assign that method as property
// }
// var myBook = new book("Reshma");
// myBook.addPrice(100);
// console.log("book author is:"+myBook.author);
// console.log("book price is:"+myBook.price);
 
// console.log("How to use chartAT");
// var str = new String("HI,this is reshma");
// console.log("char at index(0): " +str.charAt(0));
// console.log("char at index(1): " +str.charAt(1));
// console.log("char at index(2): " +str.charAt(2));
// console.log("char at index(3): " +str.charAt(3));

// console.log("How to use charCodeAT");
// var str = new String("HI,this is reshma");
// console.log("char code at index(0): " +str.charCodeAt(0));
// console.log("char code at index(1): " +str.charCodeAt(1));
// console.log("char code at index(2): " +str.charCodeAt(2));
// console.log("char code at index(3): " +str.charCodeAt(3));

// console.log("javasrcipt indexof() method");
// var str1 =new String("hello,reshma kale");
// var index =str1.indexOf(",");
// console.log("word found at index :"+index);

// console.log("javasrcipt lastIndexof() method");
// var str1 =new String("hello,reshma kale,hello");
// var index =str1.lastIndexOf("hello");
// console.log("word found at index :"+index);
// console.log("javasrcipt localeCompare() method");
// var str1 =new String("hello,reshma kale");
// var index =str1.localeCompare("xyz");
// console.log("first compare:"+index);

// var index=str1.localeCompare("hello,reshma kale");
// console.log("Second compare:"+index);
// var index=str1.localeCompare("abcd");
// console.log("third compare:"+index);

// console.log("javascript replace() method...flag-gi g - global match,i-ignore case");
// var str = new String("apples are sweet,apples are juicy");
// var re = /apples/gi;
// var newString = str.replace(re,"Oranges");
// console.log(newString);
// console.log("javascript search() methode");
// var re = /apples/gi;
// var str = "apples are sweet,apples are juicy";


// if(str.search(re) == -1){
//       console.log("apples not found...");
//     }
//     else
//     {
//       console.log("apples  found...")
//     }

// console.log("javascript slice() methode");
// var str = "apples are sweet,apples are juicy";
// var slice = str.slice(5,-5);
// console.log(slice);

// console.log("javascript toLowerCase() methode");
// var str = "apples are sweet,apples are juicy";
// var slice = str.toLocaleLowerCase();
// console.log(slice);
// console.log("javascript toUpperCase() methode");
// var str = "apples are sweet,apples are juicy";
// var slice = str.toUpperCase();
// console.log(slice);
// console.log("javascript valueOf() methode");
// var str = new String("apples are sweet,apples are juicy");
// console.log(str.valueOf());

// Date methods

// var dt = new Date();
// console.log(dt);
// console.log(dt.getDate());
// console.log(dt.getFullYear());
// console.log(dt.getHours());
// console.log(dt.getMilliseconds());
// console.log(dt.getMinutes());
// console.log(dt.getTimezoneOffset());

// var name = prompt("what is your name");
// console.log("hi"+name);

// var fs=require('fs');
// // var data=fs.readFileSync('word.json');
// // var words = JSON.parse(data);
// // var bodyparser=require('body-parser');
// // console.log(words);
// fs.open('sample.txt','w',function(err,file){
//    if (err) throw err;
//    console.log("saved..")
// }
// );
// fs.writeFile('sample.txt','hello reshma',function(err){
//     if(err) throw err;
//     console.log("saved");
// }
// );
// fs.appendFile('sample.txt','finally done with file operation',function(err){
//     if(err) throw err;
//     console.log("Updated...");
// }
// );
// fs.writeFile('sample.txt','this is replace content of file',function(err){
//     if (err) throw err;
//     console.log("replaced..");
// }
// );
// fs.rename('sample.txt','myrenamefile.txt',function(err){
//     if(err) throw err;
//     console.log("Renamed successful...!");
// }
// );
// fs.readFile('myrenamefile.txt','utf-8',function(err,data){
//     if(err) throw err;
//     console.log("Your file content is:",data);
// }
// );

// var readline = require('readline');
// var fs = require('fs');
// var myInterface =readline.createInterface({
//  input:fs.createReadStream('myrenamefile.txt')
// });
// var lineno = 0;
// myInterface.on('line',function(line){
//     lineno++;
//     console.log('line number',+lineno+':'+line);
// }
// );
// var readline = require('readline');
// //var standard_input = process.stdin;
// //standard_input.setEncoding('utf-8');
// var read = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// console.log("user input");
// read.on('data',function(data){
//     if(data =='exit\n'){
//         console.log("user input completed");
//         process.exit();
//     }
//      else{
//          console.log("user input ",+data);
//      }   
//     }
// );

// var readline = require('readline-sync');
// var name=readline.question("What is your name?");
// console.log(name);
// console.log("hi " +name+" how are you");

// const readline = require('readline');
// const read = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout 

// });
// read.question("what is your name:",(answer) =>{
//      read.prompt();
//      //read.setPrompt(prompt);
//     console.log("your name is",answer);
//     read.close();

// });

//read file stream line by line

// const fs = require('fs');
// const readline = require('readline');
//async function processLineByLine(){
//     const fileStream = fs.createReadStream('myrenamefile.txt')
// const read=readline.createInterface({
//     input:fileStream,
//     crlfDelay:Infinity

// });

//   //  for await (const line of read)
//   read.on('line',(line)=>{
//         console.log('your preocess line',line);

//     });
    
// }
// processLineByLine();

// // constructor with prototype method

// // class Rectangle{
// //     constructor(height,width){
// //         this.height=height;
// //         this.width=width;
// //     }

// // get area(){
// //     return this.calcArea();

// // }
// // calcArea(){
// //     return this.height*this.width;
// // }
// // }
// // var rect = new Rectangle(10,20);
// // console.log(rect.area);

// // static methods

// class Point{
//      constructor(x,y){
//          this.x=x;
//          this.y=y;

//      }

//      static Distance(a,b){
//          const dx =a.x -b.x;
//          const dy = a.y - b.y;

//          return Math.hypot(dx,dy);
//      }
// }
// const p1=new Point(5, 10);
// const p2=new Point(10,5);
// console.log("Distance is ",Point.Distance(p1,p2));

// function User (theName, theEmail) {
//     this.name = theName;
//     this.email = theEmail;
//     this.quizScores = [];
//     this.currentScore = 0;
// }

// User.prototype = {
//     constructor: User,
//     saveScore:function (theScoreToAdd)  {
//         this.quizScores.push(theScoreToAdd)
//     },
//     showNameAndScores:function ()  {
//         var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
//         return this.name + " Scores: " + scores;
//     },
//     changeEmail:function (newEmail)  {
//         this.email = newEmail;
//         return "New Email Saved: " + this.email;
//     }
// }
// // A User 
// firstUser = new User("Richard", "Richard@examnple.com"); 
// firstUser.changeEmail("RichardB@examnple.com");
// firstUser.saveScore(15);
// firstUser.saveScore(10); 

// firstUser.showNameAndScores(); //Richard Scores: 15,10
// console.log(firstUser);
// // Another User
// secondUser = new User("Peter", "Peter@examnple.com");
// secondUser.saveScore(18);
// secondUser.showNameAndScores(); //Peter Scores: 18
// console.log(secondUser);

// var prompt = require('prompt');
// var properties =[
//     {
//         name:'username',
//         validator: /^[a-zA-Z\s\-]+$/,
//         warning:'user name must be an spaces,dashes'

//     },
//     {
//         name:'password',
//         hidden:true
//     }
// ];
// prompt.start();
// prompt.get(properties,function(err,result){
//     if(err){return onErr(err);}
//     console.log('The user input is:');
//     console.log('user name is: '+result.username);
//     console.log('password is:'+result.password);

// });
// function onErr(err){
// console.log(err);
// return 1;
// }
// var x = new Array(5);

// for (var i = 0; i < x.length; i++) {
//   x[i] = new Array(1);
// }

// console.log(x);
//function createArray(length) {
//     var arr = new Array(length || 0),
//         i = length;

//     if (arguments.length > 1) {
//         var args = Array.prototype.slice.call(arguments, 1);
//         while(i--) arr[length-1 - i] = createArray.apply(this, args);
//     }

//     return arr;
// }

// //createArray();     // [] or new Array()

// //createArray(2);    // new Array(2)

// createArray(3, 2); 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  var arr2 = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12 , 13 , 14];
  arr = shuffle(arr);
  console.log(arr);