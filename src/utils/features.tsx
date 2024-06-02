import axios from "axios";
import _ from "lodash";
import { generate } from "random-words";


const generateOptions = (meaning: {Text:string}[], idx:number): string[] =>{
  const correctAns: string = meaning[idx].Text;

  const allMeaningExceptForCorrect = meaning.filter((i)=> i.Text!== correctAns);

  const incorrectOptions = _.sampleSize(allMeaningExceptForCorrect,3).map((i)=> (i.Text));

  const allOptions = _.shuffle([...incorrectOptions, correctAns]);

  return allOptions;
}

export const translateWords= async(params: LangType): Promise<WordType[]> =>{
try {
 let words = generate(8);
 if(!Array.isArray(words))
    words= [words];

let newWords  = words.map((i)=>(
    {
        Text: i
    }
 ));
 console.log(newWords);
 

    const response = await axios.post('https://microsoft-translator-text.p.rapidapi.com/translate',
        newWords, {
            params: {
                'to[0]': params,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
              },
              headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
              },
        }
    );

    const recieve: FetchedDataType[] = response.data;
    
    const arr: WordType[] = recieve.map((i,idx)=>{
        const options= generateOptions(newWords,idx)
        
        return {
            word: i.translations[0].text,
            meaning: newWords[idx].Text,
            options
        }
    });
    
    return arr;
} catch (error) {
    console.log(error);
    throw new Error("something went wrong")
}
}


export const countMatchingElements = (
    arr1: string[],
    arr2: string[]
  ): number => {
    if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");
  
    let matchedCount = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) matchedCount++;
    }
  
    return matchedCount;
  };
