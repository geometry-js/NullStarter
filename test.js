function createRandomProduct(numberOfThings){
  var promise = new Promise(function(resolve,reject){
    if (numberOfThings<=0){
      reject(`Price should be more than 0. Current value is ${numberOfThings}`)
    }
    var typeArray = ['Electronics','Book','Clothing','Food'];
    var price = (Math.random()*500).toFixed(2) ;
    var type = typeArray[Math.floor(Math.random()*4)];
    resolve ({price:price, type:type});
  });
  return promise;
}

createRandomProduct(-1).then((result)=>{
  console.log(`The result is ${result.price} and the type is ${result.type}.`);
})
.catch((err)=>{
  var chalk = require('chalk');
  console.log(chalk.bold.yellow(`Error is ${err}.`));
})
