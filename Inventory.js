var readline = require('readline');
var fs = require('fs');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var inventory ={}
console.log("0. Exit");
console.log("1. Rice");
console.log("2. Pulses");
console.log("3. Wheat");
console.log("Available items are:");
var item = [];
var Inventory = JSON.parse(fs.readFileSync('Inventory.json','utf-8'));
for( i in Inventory){
    for (x in Inventory[i]){
        item.push({Name:Inventory[i][x].Name});
    }
}
if(item !== undefined)
console.log(item);


read.setPrompt("input>");
read.prompt();
read.on('line',function(line){

    if(line === "0"){
        read.close();
    }
    else if(line === "1"){
        read.question("Rice name:",(riceName) => {
            read.question("Enter Weight in kg:",(riceWeight) => {
                read.question("Enter price per kg:",(ricePrice) => {
                    var riceAmount = riceWeight*ricePrice;

                    let riceData = fs.readFileSync("Inventory.json");
                    inventory = JSON.parse(riceData);

                    inventory.rice.push({
                        Name:riceName,
                        Weight:riceWeight,
                        Price:ricePrice,
                        Amount:riceAmount

                    });
                    fs.writeFile('Inventory.json',JSON.stringify(inventory,null,2),function(err){
                        if(err) throw err;
                        console.log("Ricedata uploaded sucessfully...");
                        console.log(JSON.stringify(inventory));
                        read.prompt();


                    });
                    // for( var i=0; i < Inventory.rice.lenght; i++){
                    //     if(Inventory.rice[i].Name == "riceName")
                    //     console.log("item available in inventory:");

                    // }
                });

            });

        });
    }
    else if(line === "2"){
        read.question("Enter pulse name:",(pulseName) =>{
            read.question("Enter wait in kg:",(pulseWeight) =>{
                read.question("Enter price per kg :",(pulsePrice) =>{
                    var pulseAmount = pulseWeight*pulsePrice;

                    var pulseData = fs.readFileSync('Inventory.json');
                    inventory = JSON.parse(pulseData);

                    inventory.pulses.push({
                        Name:pulseName,
                        Weight:pulseWeight,
                        Price:pulsePrice,
                        Amount:pulseAmount
                    });
                    fs.writeFile('Inventory.json',JSON.stringify(inventory,null,2),function(err){
                        if(err) throw err;
                        console.log("Pulses data sucessfully uploaded..");
                        console.log(JSON.stringify(inventory));
                        read.prompt();
                    });
                });

            });
        }); 
    }
    else if(line === "3"){
        read.question("Enter wheat name:",(wheatName) =>{
            read.question("Enter wait in kg:",(wheatWeight) =>{
                read.question("Enter price per kg :",(wheatPrice) =>{
                    var wheatAmount = wheatWeight*wheatPrice;

                    var wheatData = fs.readFileSync('Inventory.json');
                    inventory = JSON.parse(wheatData);

                    inventory.wheat.push({
                        Name:wheatName,
                        Weight:wheatWeight,
                        Price:wheatPrice,
                        Amount:wheatAmount
                    });
                    fs.writeFile('Inventory.json',JSON.stringify(inventory,null,2),function(err){
                        if(err) throw err;
                        console.log("Wheat data successfully uploaded..")
                        console.log(JSON.stringify(inventory));
                        read.prompt();
                    });
                });
            });       
         });
   
    
        }
        
    else{
        console.log("Enter valid input.");
        read.prompt();
    }
    read.on('close',function(){
        process.exit(0);
    });  

});
