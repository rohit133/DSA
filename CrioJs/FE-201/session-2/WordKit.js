class WordKit {
  constructor(str){
    this.str = str;
  }
  reverse(str){
    let reversed = '';
    for(let i = str.length; i >= 0; i--){
      reversed += str[i];
    }
    return reversed;
  }
  isPalindrome(str){
    return str === this.reverse(str);
  }
  makePalindrome(str){
    return str+this.reverse(str);
  }
}
