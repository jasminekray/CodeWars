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
	
	solution(10);
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

// Return the number (count) of vowels in the given string.

//MY SOLUTION
	function getCount(str) {
		var vowels = str.match(/[aeiou]/gi);
		return vowels === null ? 0 : vowels.length;
	}
	
	getCount('hello');
//BEST SOLUTION

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
	
// Return a str with all vowels taken out to troll the trolls!

//MY SOLUTION

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "")
}

disemvowel("hello you freaking suck sir");

//SAME AS BES SOLUTION (:

//Write a function that takes in a string of one or more words, and returns the same string, but with all
//five or more letter words reversed. Strings passed in will consist of only letters and spaces.

//MY SOLUTION

function spinWords(str){
  var arr = str.split(" ");
  var strReverse = []
  arr.forEach(function(e){
    if(e.length < 5) {
      strReverse.push(e);
    }
    else if(e.length >= 5) {
      strReverse.push(e.split('').reverse().join(''));
    }
  })
    return strReverse.join(' ');
}

spinWords('hello jasmine') //returned olleh enimsaj
//BEST SOLUTION

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}