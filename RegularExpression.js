var readline = require('readline');
var fs = require('fs');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var str = "Hello <<name>>, We have your full name as <<full name>> in our system.your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.";
var name = read.question("Enter name:",(name)=>{
//console.log("Your name is:",name);
    var fullName = read.question("Enter your full name:",(fullName)=>{
         var contactNo = read.question("Enter contact number:",(contactNo) => {
         
    
    read.close();
    pattern = /<<name>>/g
    pattern1 = /<<full name>>/g
    pattern3 = /[x]/g
    var dt = new Date();
    //console.log(dt);
    pattern4 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    // /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    str = str.replace(pattern,name);
    str = str.replace(pattern1,fullName);
    str = str.replace(pattern3,contactNo);
    str = str.replace(pattern4,dt);
    console.log(str);

});

});
}); 

