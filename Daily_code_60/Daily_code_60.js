function findSum(array){
    let sum = 0; // get half value of all numbers after divided them by 2
    for(let i = 0 ; i < array.length; i ++){
        sum = array[i] + sum ; 
    }
    const half = sum/2;
    console.log(half);
    const largest = array[array.length - 1];
    if(half > largest)
    {
        let left = 0;
        let right = array.length - 1;

        while (left < right) {
            const currentSum = array[left] + array[right];

            if (currentSum === half) {
                return [array[left], array[right]];
            } else if (currentSum < half) {
                left++;
            } else {
                right--;
            }
        }

    return null;
    }
    else{
        return null;
    }
}
function sort(arr){
    const arrLength = arr.length;
    for(let i = 1 ; i < arrLength ; i++){
        let key =  arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

const array = [20,30,10,40,60,80,90,110];
sort(array);
console.log(array);
const result = findSum(array);
if(result){
    console.log("True");
}else{
    console.log("false");
}