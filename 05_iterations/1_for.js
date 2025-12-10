// for loop
for (let i = 0; i < 11; i++) {
    if (i === 5) {
        console.log(`${i} is my fav number`);
    }
    console.log(i*2);
}
console.log("-------------");

// break, continue

for (let i= 1; i <20; i++){
    if(i===13){
        console.log(`${i} is detected number so skip this no.`);
        continue;   
    }     
    console.log(`value is ${i}`);
}
console.log("-------------");

for (let i =1; i<20; i++){
    if(i===6){
        console.log(`${i} stoped further values`);
        break;
    }
    console.log(`i = ${i}`);
}