import { FaVideo } from "react-icons/fa";

export const Home =() =>{
    return(
        <>
      <div className="flex">
        <img src="home.png" width={"40px"} />
        <input className="border-solid rounded-3xl outline-solid m-2 p-2" type="text" 
        placeholder="what's on your mind"/>
    
      </div>
      <hr width="500px" />   
       <div className="flex gap-3">
            <p > <FaVideo />Live Video</p>
            <p>Photo/Video</p>
            <p>Feeling/activity</p>
        </div>
        </>
    )
}