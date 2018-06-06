
var outPut = function(translatedPig){
  $("span#output").text(translatedPig);
};


var pigLatinGen = function(pigLatinConversion){
  var words = pigLatinConversion.split(" ");
  var vowels =["a", "e", "i", "o", "u", "y"];

  for(word = 0; word < words.length; word ++){
    for(vowel = 0; vowel < vowels.length; vowel ++){
      if(words[word] === vowels[vowel]){
      words[word] = words[word] + "ay";
      vowel = vowels.length;
      } else if(words[word].length > 1){
        console.log(words[word]);
        var letters = (words[word]).split("");
        for(letter = 0; letter < letters.length; letter ++){
          console.log(letters[letter]);
          for(vowel = 0; vowel < vowels.length; vowel ++){
            if(letters[letter] !== vowels[vowel]){
              letters.push(letters[letter]);
              words[word] = toString(letters[letter]);
              console.log("this is letters " + letters);
              console.log("this is words " + words[word]);
              letter = letters.length;

            } else{
              letter = letters.length;
            }
          }
        }
        words[word] = words[word] + "way";
        vowel = vowels.length;
        console.log("made it through:" + words[word]);
        console.log("anything with two or more");
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
