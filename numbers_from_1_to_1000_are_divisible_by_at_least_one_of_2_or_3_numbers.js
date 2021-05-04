let count = 0;
let two = [];
let three = [];
for(let i = 1; i <= 1000; i++){
    if(i%2 == 0){
        two.push(i)
    }
};
for(let j = 1; j <= 1000; j++){
    if(j%3==0){
        three.push(j)
    }
};
// console.log(two,three)
for(let k = 0; k<three.length; k++){
    for(let l = 0; l < two.length; l++){
        if(three[k] == two[l]){count++};
    }
}
console.log(count)