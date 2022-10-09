/*
    URL: https://leetcode.com/problems/goat-latin/

    824. Goat Latin

    You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

    We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

    If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
    For example, the word "apple" becomes "applema".
    If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
    For example, the word "goat" becomes "oatgma".
    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
    Return the final sentence representing the conversion from sentence to Goat Latin.

    Example 1:
    Input: sentence = "I speak Goat Latin"
    Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

    Example 2:
    Input: sentence = "The quick brown fox jumped over the lazy dog"
    Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
    

    Constraints:

    1 <= sentence.length <= 150
    sentence consists of English letters and spaces.
    sentence has no leading or trailing spaces.
    All the words in sentence are separated by a single space.
*/ 

const transform = (word, idx) => {
    console.log('word: ', word)
    console.log('idx: ', idx);
    
    let result = [];
    let vowels = 'aeiouAEIOU';
    
    let firstChar = word[0];
    
    if (vowels.indexOf(firstChar) === -1) {
    // If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
        for(let x = 1; x < word.length; x++) {
            result.push(word[x]);
        }
        result.push(firstChar);
        
    } else { 
        // If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
        result.push(word);
    }
    
    result.push('ma');
    
    // Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1
    result.push(new Array(idx + 1).fill('a').join(''));
    
    return result.join('');
}

var toGoatLatin = function(sentence) {
    let splitted = sentence.split(' ');
    
    for (let i = 0; i < splitted.length; i++) {
        splitted[i] = transform(splitted[i], i);    
    }
    
    return splitted.join(' ');
};
  
  // console.log(toGoatLatin("I speak Goat Latin"));
  console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
  