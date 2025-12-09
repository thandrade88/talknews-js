console.log('hello');

const arr = [1,2,3,6,7,2,3,1];
const newObj = {};

for (let i = 0; i < arr.length; i++) {
    if(newObj[arr[i]]) {
        newObj[arr[i]]++;
    } else {
        newObj[arr[i]] = 1;
    }
}

console.log(newObj);


/*
newObj = {
	1 : 2,
	2:2,
	3 : 2,
	6:1,
	7:1
}*/


 