/*変数(num)が3の倍数の場合： “3の倍数です”
変数(num)が5の倍数の場合： “5の倍数です”
変数(num)が3と5の倍数の場合： “3と5の倍数です”
それ以外の場合： 変数(num)を出力する*/

//0～100までランダムで表示
let num = Math.floor(Math.random()*101);

//条件式
if(num % 3 && num % 5 === 0){
  console.log('3と5の倍数です');
}

else if(num % 5 === 0){
  console.log('5の倍数です');
}

else if(num % 3 === 0){
  console.log('3の倍数です');
}

else{
console.log(num);
}
