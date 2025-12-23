const coding =["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

console.log(values);

console.log("----------------");

// filter

// this is in forEach too but forEach not returns the no. but filter returns the value.
const nums = [1,2,3,4,5,6,7,8,9,10];

const newNums = nums.filter( (num) => num>4);
console.log(newNums);

// OR
const newnums = nums.filter( (num) => {
    return num > 4;
})

console.log(newnums);
console.log("------------");

// this is also for forEach

const newnum= [];

nums.forEach((num) => {
    if (num>4){
        newnum.push(num)
    }
})
console.log(newnum);

console.log("-------------");

// *******************fiter in obects*******************
const books =[
    {title:'book one', genre: 'fiction', publish: 1981, edition: 2004},
    {title:'book two', genre: 'fiction', publish: 1981, edition: 2007},
    {title:'book three', genre: 'history', publish: 1981, edition: 2003},
    {title:'book four', genre: 'science', publish: 1981, edition: 2010},
    {title:'book five', genre: 'non-ficton', publish: 1981, edition: 2014},
    {title:'book six', genre: 'fiction', publish: 1981, edition: 1998},
    {title:'book seven', genre: 'english', publish: 1981, edition: 2011},
];

const userBook= books.filter((bk)=> bk.edition > 2000);
console.log(books.filter((bk)=>bk.genre==='fiction' && bk.edition < 2000));

console.log("--------------");
console.log(userBook);
