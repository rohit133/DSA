/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function nextLargerElement(n, arr) {
    let st = [], result = [];
    for(let i = n-1; i >= 0; i--) {
        while(st.length > 0 && arr[i] >= st[st.length -1])
            st.pop()
        if(st.length == 0)
            result[i] = -1;
        else 
            result[i] = st[st.length -1];
        st.push(arr[i]);
    }  
    return result
}