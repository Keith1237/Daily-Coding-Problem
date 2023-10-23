function implementation(x, y){
    let value = 1;
    if(y > 0){
        for(let i = 0 ; i < y ; i++){
            value = value * x;
        }
        return value;
    }else if (y == 0) {
        return value;
    } else {
        for(let i = 0 ; i > y ; i--){
            value = value * 1/2;
        }
        return value;
    }
    
}

const x = 2;
const y = -3;
const answer = implementation(x,y);
console.log(answer);