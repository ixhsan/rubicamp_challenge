function sentencesManipulation(sentence) {
    //write your code here
    // console.log(sentence.split(' '))
    let arr = sentence.split(' ')
    let sentenceUpdated = []
    wordRegex = /^[aiueo]/
    for (let i = 0; i < arr.length; i++) {
        wordRegex.test(arr[i]) ? sentenceUpdated.push(arr[i]) : sentenceUpdated.push(arr[i].slice(1,) + arr[i].charAt(0) + "nyo")
    }

    return console.log(sentenceUpdated.join(' '))
    }

sentencesManipulation('ibu pergi ke pasar bersama aku') ;
sentencesManipulation('pada hari minggu ku turut ayah ke kota') ;