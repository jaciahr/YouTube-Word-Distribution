// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { FunctionComponent as FC, useState, useEffect} from "react"
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// const Hello = ({data}) => (
//   <div>Hello ${data["been"]}!</div>
// )

export const Hello = ({data}) => 
{
const [wordData, setWordData] = useState({})
// create another set of variables
// useEffect(() =>{ wordData && (
//     let amazingVar = SUPERCOOLMATH,
//     setHighestFreq(amazingVar))},[wordData])

useEffect(() => { data && setWordData(JSON.parse(data))},[])
return(
// iterate over wordData and print the key and value
<table>
    <tr>
        <td>
            Word
        </td>
        <td>
            Frequency
        </td>
    </tr>
    {Object.entries(wordData).map(([key,value]) => {
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


//<div>Hello {wordData.customer}!</div>



)
};

export default Hello

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('word_data')
    const data = JSON.parse(node.getAttribute("data"))
    ReactDOM.render(
    <Hello data={data}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
