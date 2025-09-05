function main(){

    console.log("test.out")
    star();
};

function star(){

    for(let i = 0; i<20; i++ ){
        console.log("star");
    };
}


function tokanSelect( text,size ){
    // a first thought way is to create a single tokans on a seperator
    // and after that select the k sized tokens from that list
    // if at the end of the list there are tokens with size < k then return 
    // these as is as the last token

    // create unigrams
    let result = [];
    let unigrams = text.split(" "); // currently we are using space but we can have 
                                    // any other seperator

    for(let i = 0; i<unigrams.length;i++){
        let ngram = [];
        for(let j = i; j<i+size; j++){
            
            ngram.push(unigrams[j]);
           
        };
        result.push(ngram);
    }
    return result;
};

text = "This strikes a balance between word and character tokenization by breaking down text into units that are larger than a single character but smaller than a full word. This is useful when dealing with morphologically rich languages or rare words."
size = 2;
tokens = tokanSelect(text, size);
console.log(tokens)
console.log(tokens.length)
//main();

