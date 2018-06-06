
var outPut = function(translatedPig){
  $("span#output").text(translatedPig);
};


var pigLatinGen = function(pigLatinConversion){
  var words = pigLatinConversion.split(" ");
  var vowels =["e", "a", "i", "o", "u", "y"];


  for(word = 0; word < words.length; word ++){
    var letters = (words[word]).split("");
    for (letter = 0; letter < letters.length; letter ++){
      for(vowel = 0; vowel < vowels.length; vowel ++){
        if(letters[letter] === vowels[vowel] && 1 === letters.length){
          words[word] = words[word] + "ay";
          letter = letters.length;
          vowel = vowels.length;
      } else if(letters[letter] === vowels[vowel] && letters[letter] === "y"){
          letters.splice(0, 1);
          letters.push("yay");
          words[word] = letters.join("");
          letter = letters.length;
          vowel = vowels.length;
      }  else if (letters[letter] === vowels[vowel] && letter === 0){
            words[word] = words[word] + "way";
            letter = letters.length;
            vowel = vowels.length;
      } else if (letters[letter] === vowels[vowel]) {
            for(moveCon = 0; moveCon < letter; moveCon ++){
              letters.push(letters[moveCon]);
            };
        letters.splice(0, letter);
        letters.push("ay");
        words[word] = letters.join("");
        letter = letters.length;
      } else if (letters[letter] === "q"){
        for(moveCon = 0; moveCon < (letter + 2); moveCon ++){
          letters.push(letters[moveCon]);
        };
        console.log("q was found");
        letters.splice(0, (letter + 2));
        letters.push("ay");
        console.log(letters);
        words[word] = letters.join("");
        letter = letters.length;

      }
      // else{
      //     console.log("final else");
      //   }

      }

    }
  }
  outPut(words);
};





$(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();
    console.log("btn works");
    var userString = $("input#userString").val();
    pigLatinGen(userString);

  });

});


// var letters = (words[word]).split("");
  // for(vowel = 0; vowel < vowels.length; vowel ++){
  //   if(letters[0] === "y" || letters[0] !== vowels[vowel]) {
  //     letters.push(letters[0]);
  //     letters.splice(0, 1);
  //     letters.push("ay");
  //     words[word] = letters.join("");
  //     letter = letters.length;
  //     console.log("I have changed the word to " + words[word]);
  //     // return words[word];
  //   } else {
  //     // console.log("first letter is equal to" + vowels[vowel]);
  //     // console.log("this is letters " + letters);
  //     letters.push("way");
  //     words[word] = letters.join("");
  //     letter = letters.length;
  //     // console.log("this is the word now " + (words[word]));
  //     // vowel = vowels.length;
  //   }
  // }
// }
// words[word] = words[word] + "way";
// vowel = vowels.length;
// console.log("made it through:" + words[word]);
// console.log("anything with two or more");
