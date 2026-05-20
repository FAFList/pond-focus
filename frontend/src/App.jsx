
import './App.css';
import PlayBtn from './components/background/PlayBtn';
import PondScene from './components/background/PondScene';
import ResetBtn from './components/background/ResetBtn';
import Timer from './components/background/Timer';
import { useState, useEffect } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(1500)

  const handlePlay = () => {
    setIsPlaying(prev => !prev);
  }
  const handleReset = () => {
    setTime(1500);
    setIsPlaying(false);
  }
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 0) {
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000)

    return () => clearInterval(interval);


  }, [isPlaying, setIsPlaying])


  return (
    <>
      <div className="relative">
        <PondScene />
        <div className="absolute inset-0 content-end pb-10">
          
          <Timer
            time={time} />
          <div className="flex items-center justify-center gap-5">
            <PlayBtn
              isPlaying={isPlaying}
              handlePlay={handlePlay} />
            <ResetBtn onReset={handleReset}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
