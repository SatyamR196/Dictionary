
export default function Display({wordData,running}){
    return(
        <>  
            {running ? <progress /> : null}
            <h3><u>Parts of Speech</u> : {wordData[0].meanings[0].partOfSpeech}</h3>
            <hr />
            <h3><u>Synonyms</u> : {wordData[0].meanings[0].synonyms.map((ele)=>(<span>{ele}, </span>))}</h3>
            <hr />
            <h3><u>Antonyms</u> : {wordData[0].meanings[0].antonyms.map((ele)=>(<span>{ele}, </span>))}</h3>
            <hr />
            <h3><u>Meanings</u> :</h3>
            
            {(wordData[0].meanings[0].definitions.map((element)=>{
                return <article><h6>{element.definition}</h6><p><i>Example : {element.example}</i></p></article>
            }))}
            
           
            
{/* 
                <article>
                    {running ? <progress /> : null}
                    {wordData.length > 0 && wordData[0].meanings ? (
                        <div>
                            <h3>{wordData[0].meanings[0].definitions[0].definition}</h3>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}
                </article> */}
        </>
    )
}