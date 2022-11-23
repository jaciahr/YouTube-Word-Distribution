// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

//Need a separate component for the form and the table

import React, { FunctionComponent as FC, useState, useEffect} from "react"
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import YouTubeTable from "../components/Table";
import Form from "../components/Form";

//HOMEPAGE
// 1. make the button pretty, put at top of the page? 
// 2. assign different data? 

// Index --> navigation --> multiple tabs
export const Index = ({data}) => {
  const [wordData, setWordData] = useState(null)

  useEffect(() => { data && setWordData(JSON.parse(data))},[data])

  return(
      <>
        { wordData ? <YouTubeTable data={wordData}/>  : <Form setWordData={setWordData}/>}

        <p>Try another YouTube URL!</p>
        <button onClick={() => setWordData(null)}>Return Home</button>
      </>
    )
};

export default Index

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('word_data')
    const data = JSON.parse(node.getAttribute("data"))
    ReactDOM.render(
    <Index data={data}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
