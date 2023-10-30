function findSum(array) {
    let sum = 0; // calculate the total sum of the numbers in the array
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
    }

    const half = sum / 2;

    if (sum % 2 !== 0) {
        // If the sum is not even, it's not possible to find a pair
        return false;
    }

    return canSum(array, half);
}

function canSum(array, targetSum) {
    const memo = new Map();

    function checkSum(index, targetSum) {
        if (targetSum === 0) {
            return true;
        }
        if (index < 0 || targetSum < 0) {
            return false;
        }

        if (memo.has(index + ',' + targetSum)) {
            return memo.get(index + ',' + targetSum);
        }

        const include = checkSum(index - 1, targetSum - array[index]);
        const exclude = checkSum(index - 1, targetSum);
        const result = include || exclude;

        memo.set(index + ',' + targetSum, result);

        return result;
    }

    return checkSum(array.length - 1, targetSum);
}

const array = [20, 30, 10, 40, 60, 80, 90, 5,15,110];
const result = findSum(array);

if (result) {
    console.log("True");
} else {
    console.log("False");
}
