function insert_sort (arr){
    const n = arr.length;
    for(let i=1; i<n; i++){
        const key = arr[i];
        let j = i - 1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j - 1 ;
        }
        arr[j+1] = key;
    }
}

function next (arr){
    const n = arr.length;
    let j = 0;
    for(let i = 0;i < n;i++){
        if(arr[i]>=0){
            if(arr[i]!=arr[i-1]){
                if(arr[i]!=j){
                    console.log(j);
                    i = arr.length -1;
                }
                j++;
            }
        }
    }
}

const array = [-1, -1, -2, 4, 3, 7, 0, 1, 2, -3, 4, 2, -2, 3, 6];
console.log(array);
insert_sort(array);
console.log(array);
next(array);