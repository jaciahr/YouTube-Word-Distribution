import React, {useState} from "react";

//DO: implement sorting function

export const YouTubeTable = ({data}) => {
    const [words, setWords] = useState(data)
    function sortWordsByLength() {
        // amazing sorting function 
        //do magic
        setWords(words)
        // const sortedMap = new Map([...data].sort((a, b) => String(a[1]).localeCompare(b[1])));
        // setWords(sortedMap);
    }

    return(
    <div className="bg_primary-color" style={{display: "flex", flexDirection: "column"}}>
    <div style={{padding: "10px"}}>   <h3>Sorting Options</h3>
     {/* <button onClick={null}>By Frequency</button> */}
     <button onClick={() => sortWordsByLength()}>By Frequency</button>
    </div>
    <div style={{padding: "10px", marginRight: "10px", margin: "5px"}}>
        <table>
            <tr className="tableHeaderRow">
                <td>
                    Word
                </td>
                <td>
                    Frequency
                </td>
            </tr>
            {Object.entries(words).map(([key,value]) => {
                return(
                    <tr>
                        <td>
                            {key}
                        </td>
                        <td>
                            {value}
                        </td>
                    </tr>
                )
            })}
        </table>
        </div>
        </div>
    )
};

export default YouTubeTable
  