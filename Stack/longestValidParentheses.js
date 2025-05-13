function longestValidParentheses(s) {
    const st=[-1];
    let ans = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] == '(')
            st.push(i);
        else {
            st.pop()
            if(st.length > 0){
                ans = Math.max(ans, i - st[st.length - 1]);
            } else {
                st.push(i);
            }
        }
    }
    return ans;
}

