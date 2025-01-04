function uniqueWords(s) {
    let resultSet = new Set();
    let words = s.split(" ");
    for(let word of words){
        resultSet.add(word)
    }
    console.log(resultSet);
    return resultSet.size;
}


console.log(uniqueWords(["Java","is", "great", "Grails", "is", "also", "great"]))