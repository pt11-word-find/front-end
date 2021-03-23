export default function buildPuzzle(wordlist, puzzwidth, puzzheight, difficulty) {
    let longest = wordlist.sort((a,b) => b.length - a.length)[0].length;
    if (puzzwidth < longest || puzzheight < longest ) {
      return [["I","N","V","A","L","I","D"]]
    }
    let index = difficulty > 1 ? 8 : 4;
    function randomFill(wordsearch){
        const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (let row = 0; row < wordsearch.length; row++){
          for (let col = 0; col < wordsearch[0].length; col++){
            if (wordsearch[row][col] === "-"){
              let randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
              wordsearch[row][col]=randomLetter
            }
          }
        }
      }
      
    function addWord(word,wordsearch){
        
        let directions = ["row", "column", "diagdown", "diagup",  "rowrev", "colrev", "diagrevup", "diagrevdown"];
        let valid = false
        while (!valid) {
          let randIndex=Math.floor(Math.random() * index);
          valid = true 
        
      
          if (directions[randIndex] === "row") {
            let row=Math.floor(Math.random() * wordsearch.length)
            let col=Math.floor(Math.random() * (wordsearch[0].length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid===true && wordsearch[row][col+i] === "-") || wordsearch[row][col+i] === word[i]) {
                if (wordsearch[row][col+i] !== word[i]){
                  rewind.push([row, col+i])
                }
                wordsearch[row][col+i]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
          else if (directions[randIndex] === "column") {
            let row=Math.floor(Math.random() * (wordsearch.length - word.length))
            let col=Math.floor(Math.random() * wordsearch[0].length)
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid === true && wordsearch[row+i][col] === "-") || wordsearch[row+i][col] === word[i]) {
                if (wordsearch[row+i][col] !== word[i]){
                  rewind.push([row+i, col])
                }
                wordsearch[row+i][col]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
          else if (directions[randIndex] === "diagdown") {
            let row=Math.floor(Math.random() * (wordsearch.length - word.length))
            let col=Math.floor(Math.random() * (wordsearch[0].length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid === true && wordsearch[row+i][col+i] === "-") || wordsearch[row+i][col+i] === word[i]) {
                if (wordsearch[row+i][col+i] !== word[i]){
                  rewind.push([row+i, col+i])
                }
                wordsearch[row+i][col+i]=word[i]
                
              } else {
                
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
          else if (directions[randIndex] === "diagup") {
            let col=Math.floor(Math.random() * (wordsearch[0].length - word.length))
            //Math.floor(Math.random()  * (13 - word.length))
            let row=(word.length-1) + Math.floor(Math.random() * (wordsearch.length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid===true && wordsearch[row-i][col+i] === "-") || wordsearch[row-i][col+i] === word[i]) {
                if (wordsearch[row-i][col+i] !== word[i]){
                  rewind.push([row-i, col+i])
                }
                wordsearch[row-i][col+i]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
          else if (directions[randIndex] === "rowrev") {
            let row=Math.floor(Math.random() * (wordsearch.length - word.length) + 1)
            //Math.floor(Math.random()  * (13 - word.length))
            let col=word.length + Math.floor(Math.random() * (wordsearch[0].length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid===true && wordsearch[row][col-i] === "-") || wordsearch[row][col-i] === word[i]) {
                if (wordsearch[row][col-i] !== word[i]){
                  rewind.push([row, col-i])
                }
                wordsearch[row][col-i]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
          else if (directions[randIndex] === "colrev") {
            let col=Math.floor(Math.random() * wordsearch[0].length)
            //Math.floor(Math.random()  * (13 - word.length))
            let row=(word.length-1) + Math.floor(Math.random() * (wordsearch.length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid===true && wordsearch[row-i][col] === "-") || wordsearch[row-i][col] === word[i]) {
                if (wordsearch[row-i][col] !== word[i]){
                  rewind.push([row-i, col])
                }
                wordsearch[row-i][col]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
          else if (directions[randIndex] === "diagrevdown") {
            let col=(word.length-1) + Math.floor(Math.random() * (wordsearch[0].length - word.length))
            //Math.floor(Math.random()  * (13 - word.length))
            let row=Math.floor(Math.random() * (wordsearch.length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid===true && wordsearch[row+i][col-i] === "-") || wordsearch[row+i][col-i] === word[i]) {
                if (wordsearch[row+i][col-i] !== word[i]){
                  rewind.push([row+i , col-i])
                }
                wordsearch[row+i][col-i]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
          else if (directions[randIndex] === "diagrevup") {
            let col=word.length + Math.floor(Math.random() * (wordsearch[0].length - word.length))
            //Math.floor(Math.random()  * (13 - word.length))
            let row=(word.length-1) + Math.floor(Math.random() * (wordsearch.length - word.length))
            let rewind = [];
            
            for (let i = 0; i< word.length; i++){
              if ((valid===true && wordsearch[row-i][col-i] === "-") || wordsearch[row-i][col-i] === word[i]) {
                if (wordsearch[row-i][col-i] !== word[i]){
                  rewind.push([row-i,col-i])
                }
                wordsearch[row-i][col-i]=word[i]
                
              } else {
                for (let j = 0; j < rewind.length; j++) {
                  wordsearch[rewind[j][0]][rewind[j][1]] = "-";
                }
                rewind = []
                valid= false
              }
            }
          }
      
      
        }
      }
      
      // add column / diagonal directions
      // implement overlap (If letter = "-" or letter == the one its replacing its fine)
      
      

      
    const generateWordsearch = (width, height) => {
        let wordsearch = []
        for (let row = 0; row < height; row ++){
          wordsearch.push([])
          for (let col = 0 ; col < width ; col++ ){
            wordsearch[row].push("-")
          }
        }
        return wordsearch
      }

    
    let wordsearch = generateWordsearch(puzzwidth, puzzheight)
    wordlist.map(item => addWord(item, wordsearch))
    randomFill(wordsearch)
    return wordsearch
  }