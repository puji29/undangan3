import { useEffect, useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPauseCircleOutline } from "react-icons/io5";
import testSound from "../../public/audio/lestari.mp3"
import { TbRuler2Off } from "react-icons/tb";
function Navbar() {
   const [isPlaying, setIsPlaying] = useState(TbRuler2Off)
   const audioRef = useRef(new Audio(testSound))
   
   useEffect(()=> {
    audioRef.current.play()
   },[])

   const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div >
       <nav className="fixed bottom-2 left-2 w-full">

      <button onClick={togglePlay}>
        {isPlaying ? <IoPauseCircleOutline className="text-[30px] iconMusic" /> : <FaRegCirclePlay className="text-[30px]  iconMusic"  />}
      </button>
       </nav>
    </div>
  )
}

export default Navbar