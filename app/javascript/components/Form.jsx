import React, { FunctionComponent as FC, useState, useEffect} from "react"
import axios from "axios";
import { useForm } from "react-hook-form";

// 1. Figure out your string ID situation (i.e., regex)
// x 2. Add A YOUTUBE logo to your form 
// 3. Add some validations to your input field..... (regex)
// 3.b. validations that its a youtube url
// 4. add an alert/ pop up that says "sorry" if you don't have a proper URL 
//alert('here)

const Form  = ({setWordData}) => {
  const [youtubeId, setYoutubeID] = useState(null);
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  
  async function onSubmit(data) {
    //console.log(data.youTubeUrl)
    await getYouTubeIDFromString(data.youTubeUrl)
    // get data before calling next line
    // const youtubeID = "B0DFcG_SgGo"
    getYoutubeUrl(youtubeId) 
  }
  //use regex to get the youtubeID from user input
  
  function getYouTubeIDFromString(string) { 
    //===**TO DO: return this, save it to a const, and THEN call getYoutube URL 22 */==
    //do regex
    //return ID
    //setYoutubeID(string)
    // https://stackoverflow.com/questions/71000139/javascript-regex-for-youtube-video-and-shorts-id
    // Note: validation should be built in?

    // let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    // setYoutubeID(regex.exec(string)[3]);

    // if (regex.exec(string) === null){
    //   alert("Please enter a valid YouTube URL.")
    // }
    // else{
    //   setYoutubeID(regex.exec(string)[3]);
    // }

    //https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = string.match(regExp);
    if (match && match[2].length == 11) {
      setYoutubeID(match[2]);
    } 
    else {
      alert("Please enter a valid YouTube URL.");
    }
  }

  function getYoutubeUrl(id) {
    try {
      axios
        .get(`/pages/get_youtube_data`, {
          params: 
          {youtube_id: id}
        })
        .then((response) => {
         console.log(response)
          setWordData(response.data)
        //  TAKE THE RESPONSE FROM HERE AND PASS IT BACK TO THE INDEX
        });
      } 
    catch (error) {}
  }
  return(
    // <div style={{padding: "20px", backgroundColor: "#e6e6e6"}}>
    <div style={{padding: "20px"}}>
    <form className="mysupercoolform" onSubmit={handleSubmit(onSubmit)}>
        <label style={{fontWeight: "bold"}}>
            YouTube URL: 
            <input style={{width:"300px"}}{...register("youTubeUrl", { required: true})} />
            {errors.youTubeUrl?.type === 'required' && <p>Youtube URL is required</p>}
            {console.log(errors)}
        </label>

        <input type="submit" />
    </form>
    </div>
  )
}

export default Form