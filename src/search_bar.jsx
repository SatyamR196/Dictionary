import "./pico.conditional.amber.min.css";
import "./search_bar.css";
import { useState,useEffect } from "react";
import Display from "./Display";

export default function Search_bar(){
    let [word,setWord] = useState("");
    let [jsonData,setJsonData] = useState([]);
    let [isRunning,setIsRunning] = useState(false);

    function handleInput(event){
        setWord(event.target.value);
        console.log(event.target.value);
    }

    async function handleSubmit(event){
        setIsRunning(true);
        event.preventDefault();
        let URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        let data = await fetch(URL);
        let newData = await data.json();
        setJsonData(newData);
        setIsRunning(false);
        //console.log(jsonData);
        console.log(jsonData[0].meanings[0]);
        console.log(jsonData[0].meanings[0].partOfSpeech);
        console.log(jsonData[0].meanings[0].definitions);
        console.log(jsonData[0].meanings[0].definitions[1].example);
        console.log(jsonData[0].meanings[0].antonyms);
        console.log(jsonData[0].meanings[0].synonyms);
        // console.table(jsonData[0].meanings[0].definitions[0].definition);
    }

    return (
        <div className="pico">
            <form action="" role="search" className="pico" onSubmit={handleSubmit}>
                <input type="search" name="word" onChange={handleInput} value={word} />
                <button type="submit">Search</button>
            </form>

            {jsonData.length ? <Display wordData={jsonData} running={isRunning}/> : (<p><i>No data available</i></p>)}
        </div>
    )
}