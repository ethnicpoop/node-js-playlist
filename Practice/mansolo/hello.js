var time = 0;
console.log('Hello world');
console.log(2*2);

setTimeout(function(){
  console.log('3seconds after');
} ,3000);

setInterval(function(){
  time += 2;
  console.log(time + 'seconds have passed');
} ,2000);
