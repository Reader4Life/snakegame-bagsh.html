const numbers =[-43,-56,-23,-89,-88,-90,-99,-652,-15,-290,-11];


let sum=0;
for(let i = 0; i<numberes.length; i++){
    sum += numbers[i];
}
console.log("The sum of the numbers is:", sum);


let max = numbers[0];
for(let i =0; i<numbers.length;i++){
    if(numbers[i]>max){
        max= numbers[i];
    }
}
console.log("The biggest number is:",max);

numbers.unshift(12);
numbers.push(34);
console.log(numbers);



let evenNumbers=0;
let oddNumbers=0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0){
        evenNumbers++;
    }else{
        oddNumbers++;
    }
}
console.log("The number of even is", evenNumbers);
console.log("The number of odd is", oddNumbers);


const studentAges=[10,20,30,40,50,60,70,80,90,100];
for(let i =0; i<studentAges.length;i++){
    studentAges[i]+=5;
    }
    console.log(studentAges);


    const names=["Yunden","Horolmaa","Baldan","Nansalmaa"];
    let maxName=names[0];
    for(let i=0; i<names.length; i++){
        if(names[i].length>maxName.length){
            maxName= names[i];
        }
    }
    console.log("Longest name is:", maxName);

