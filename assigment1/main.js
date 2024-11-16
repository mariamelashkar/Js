/****** example 1 ********/
// var num = prompt("Enter a number")
// alert(`You have entered : ${num}`)

/****** example 2 ********/
// var num = prompt("Enter a number")

// if (num%3==0  && num%4==0)
//     console.log('yes')
// else
// console.log('no')

/****** example 3 ********/

// // var num1= prompt("Enter the first number:");
// // var num2= prompt("Enter the second number:");

// // num1 = Number(num1);
// // num2 = Number(num2);

// // if(num1 > num2)
// //     alert(`The max number is : ${num1}`)

// // else if(num2 > num1)
// //     alert(`The max number is : ${num2}`)
// // else
// // alert(`The numbers are equal`)

// /****** example 4 ********/
// // var num = prompt("Enter a number")

// // if(num < 0)
// //     alert(`The number is negative`)

// // else if(num > 0)
// //     alert(`The number is positive`)
// // else
// // alert(`The number is zero`)

// /****** example 5 ******** /

// var num1= prompt("Enter the first number:");
// var num2= prompt("Enter the second number:");
// var num3= prompt("Enter the second number:");


// num1 = Number(num1);
// num2 = Number(num2);
// num3= Number(num3);



// if(num1 > num2){
//      if(num1 > num3){
//      console.log(`The max number is : ${num1}`)
//     }
// }else if(num2 > num3){
//     console.log(`The max number is : ${num2}`)
//     }else{
//         console.log(`The max number is : ${num3}`)
//     }


// if(num1 < num2){
//     if(num1 < num3){
//     console.log(`The min number is : ${num1}`)
//    }
// }else if(num2 < num3){
//    console.log(`The min number is : ${num2}`)
//    }else{
//        console.log(`The min number is : ${num3}`)
//    }


/****** example 6-7 ********/

// var num = prompt("Enter a number")

// if (num%2==0)
//     console.log('the number is even')
// else
// console.log('the number is odd')

/****** example 8 ********/

// var ch = prompt("Enter a char")
//  if (ch=='a'|| ch=='i' || ch=='o'||ch=='u'||ch=='e')
//     console.log("vowel")
//  else
//  console.log("Consonant")

/****** example 9 ********/
// var num = prompt("Enter a number")

// for(i=1;i<=num;i++){
//     console.log(i)
// }

/****** example 10 ********/
// var num = prompt("Enter a number")

// for(i=1;i<=12;i++){
//     console.log(i*num)
// }

/****** example 11 ********/
// var num = prompt("Enter a number")

// for(i=1;i<=num;i++){
// if(i%2==0)
//     console.log(i)
// }
/****** example 12 ********/
// var num = prompt("Enter a number")
// var p = prompt("Enter the power for this number")

// var sum =1
// for(i=0;i<p;i++){
//     sum*=num

// }
// console.log(sum)

/****** example 12 ********/
// var num;
// var total = 0;
// for (i = 0; i < 5; i++) {
//   var num = prompt(`Enter the ${i + 1}th number`);
//   num = Number(num);
//   total += num;
// }
// var average=Math.round(total/5)
// var percentage=Math.round(average/100*100)
// console.log("Total Marks: ",total);
// console.log("Average Marks: ",average);
// console.log("Percentage: ",percentage);

/****** example 13 ********/
// var num = prompt("Enter the month");

// if (num == "1" || num == "3" || num == "5" || num ==  "7" || num == "8" || num == "10" || num == "12")
//   console.log("Days in Month: 31")
// if (num == "4" || num == "6" || num == "9" || num == "11") console.log("Days in Month: 30");
// else console.log("Days in Month: 28");

/****** example 14 ********/

// var num;
// var total = 0;

// var arr = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];
// for (i = 0; i < 5; i++) {
//   var num = prompt(`Enter the ${arr[i]} grade`);
//   num = Number(num);
//   total += num;
// }
// var average = Math.round(total / 5);
// var percentage = Math.round((average / 100) * 100);
// console.log("Total Marks: ", total);
// console.log("Average Marks: ", average);
// console.log("Percentage: ", percentage);

// if (percentage >= 90) console.log("Grad A");
// if (percentage >= 80) console.log("Grad B");
// if (percentage >= 70) console.log("Grad C");
// if (percentage >= 60) console.log("Grad D");
// if (percentage >= 50) console.log("Grad E");
// else console.log("Grad F");

/****** example 15 ********/
// var num = prompt("Enter the month");

// switch (num) {
//   case "1" || "3" || "5" || "7" || "8" || "10" || "12":
//     console.log("Days in Month: 31");
//     break;
//   case "4" || "6" || "9" || "11":
//     console.log("Days in Month: 30");
//     break;
//   default:
//     console.log("Days in Month: 28");
// }

/****** example 16 ********/
// var ch = prompt("Enter a char")
//  switch(ch){
//     case 'a' || 'i' || 'o'||'u'||'e'|| 'A' || 'I' || 'O'||'U'||'E':
//     console.log("vowel")
//  break;
//  default:
//  console.log("Consonant")

//  }

/****** example 17 ********/

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");

// num1 = Number(num1);
// num2 = Number(num2);

// max = num1 > num2;
// switch (max) {
//   case true:
//     console.log(`The max number is ${num1}`);
//     break;
//   case false:
//     console.log(`The max number is ${num2}`);
//     break;
//   default:
//     console.log(`both numbers are equal`);
// }

/****** example 18 ********/
// var num = prompt("Enter the number:");

// num = Number(num);
// reminder=num%2
// switch (reminder) {
//   case 0:
//     console.log(`The number is even`);
//     break;
//   default:
//     console.log(`The number is odd`);
// }

/****** example 18 ********/

// var num = prompt("Enter the number:");

// num = Number(num);

// positive = num > 0;
// switch (positive) {
//   case true:
//     console.log(`The number is positive`);
//     break;
//   case false:
//     if (num == 0) {
//       console.log(`both number is zero`);
//     } else {
//       console.log(`The number is negative`);
//     }

//     break;
// }
/****** example 18 ********/

// var num1 = prompt("Enter the first number:");
// var op = prompt("Enter the operator:");
// var num2 = prompt("Enter the second number:");

// num1 = Number(num1);
// num2 = Number(num2);

// switch (op) {
//   case "+":
//     sum=num1+num2
//     console.log(sum)
//     break;
//   case "-":
//     sub=num1-num2
//     console.log(sub)
//     break;
//   case "*":
//     mul=num1*num2
//     console.log(mul)
//     break;
//   case "/":
//     div=num1/num2
//     console.log(div)
//     break;
//   case "%":
//     mod=num1%num2
//     console.log(mod)
//     break;
// }
