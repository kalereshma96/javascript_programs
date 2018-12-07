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