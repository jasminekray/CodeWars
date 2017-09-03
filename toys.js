function accum(s) {
	return s;
}

accums('hello');

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// MY SOLUTION

function solution(number){
	var numArr = [];
	if(number > 0){
	  for(let i = 0; i < number; i++) {
		if(i % 3 === 0) {
		  numArr.push(i);
		}
		else if(i % 5 === 0) {
		  numArr.push(i);
		}
	  }
	  return numArr.reduce((a, b) => a + b);
	}
	else {
	 return 0;
	}
  }
  //BEST SOLUTION

  function solution(number){
	var sum = 0;
	
	for(var i = 1;i< number; i++){
	  if(i % 3 == 0 || i % 5 == 0){
		sum += i
	  }
	}
	return sum;
  }