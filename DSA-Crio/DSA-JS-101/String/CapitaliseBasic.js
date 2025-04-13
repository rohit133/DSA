
// TODO: Implement this method
function capitaliseBasic(paragraph) {
    const arr = paragraph.split('');
    for(let idx = 0; idx < paragraph.length-1; idx++){
        
        if (arr[idx] === ' ' || arr[idx] === '.' || arr[idx] === paragraph.length-1){
            continue;
        }

        if (idx === 0 || arr[idx-1] === ' ' || arr[idx-1] === '.'){

            arr[idx] = arr[idx].toUpperCase();
        }
    }
    return arr.join('');
}



console.log(capitaliseBasic("the quick Brown .fox jumps over The lazy dog."));