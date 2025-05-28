function merge(left, right){
    const result = [];
    let i=0, j=0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function MergSorting(arr){
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

}

let arr = [90,12,3,92,24,19,32,13,67,7,73,23]