var readline = require('readline');
var fs = require('fs');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var stockReport = {}
// read.question("Enter no.of stock:",(no) => {

//    for ( i= 0; i<=no; i++){
       //console.log(stock);
       read.question("Enter stock names:",(stockName)=>{
           read.question("Enter number of shares:",(shareNo)=>{
               read.question("Enter share price:",(sharePrice)=>{
                   var totalShare = shareNo*sharePrice;
                   let  stock = fs.readFileSync('StockReport.json');

                   stockReport = JSON.parse(stock);
                   stockReport.stock1.push({
                       StockName:stockName,
                       Shares:shareNo,
                       sharePrice:sharePrice,
                       TotalAmount:totalShare
                   });
                   fs.writeFile('StockReport.json',JSON.stringify(stockReport,null,2),function(err){
                    if(err) throw err;
                    console.log("data uploaded sucessfully...");
                    console.log(JSON.stringify(stockReport));
                    read.prompt();
                   }); 
               });
           });
       });
  // }

//});
