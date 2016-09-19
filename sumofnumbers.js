/*
 Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
 */

function sumFor(list) {
  let sum= 0;

  for(let i= 0; i < list.length; i++){
    sum+= list[i];
  }

  return sum;
}

function sumWhile(list) {
  let sum= 0;
  let i= 0;

  while(i < list.length) {
    sum+= list[i];
    i++;
  }

  return sum;
}

function sumRecursion(sum, i, list) {
  if(i < list.length) {
    sumRecursion(sum, i+1, list);
  }
  else {
    return sum + list[i];
  }
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num){ return memo + num; });
}
