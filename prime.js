// 1) WAP to print sum of non primes in a number

// input: Enter a number: 763328
// output: 14




number = "763328";
sum = 0;
for (num of number) {
  if (num > 1) {
    count = 0;
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        sum += Number(num);
        count++;
        break;
      }
    }
    if (count == 0) {
   
    }
  }
}
console.log(`SUM OF NON-PRIME NUMBERS IN ${number} is ${sum}`);



// 2) WAP to check whether a number is prime or not by using function

// input: Enter a number: 7
// output: 7 is prime


function prime(number){
if(number>1){
  
    for(i=2;i<number;i++){
        var c=0;
        if(number%2==0){
            
            c++;
            console.log(`${number} is not a prime`);
            break;
        }
    }
    if(c==0){
        console.log(`${number} is a prime `);
    }
}
}
prime(7)


// 3) WAP to check whether prime sum is bigger or non prime sum is bigger

// input: Enter a number: 163379
// output: Non prime sum is bigger.

// input: Enter a number: 2045
// output: Prime sum is bigger.

input="2045"
npsum=0 , psum=0
for(num of input){
    if(num >1){
        c=0
        for (i=2;i<num;i++){
            if(num%i==0){
                npsum=npsum+num
                c++
                break
            }
        }
        if(c==0){
            psum+=Number(num)
        }
    }
}
res=(psum>npsum)?"prime sum is bigger":"non-prime sum is bigger"

console.log(res)