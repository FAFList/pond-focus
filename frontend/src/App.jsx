
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
      <PondScene />
      <PlayBtn
        isPlaying={isPlaying}
        handlePlay={handlePlay} />
      <Timer
        time={time} />
      <ResetBtn onReset={handleReset}
      />
    </>
  )
}

export default App
