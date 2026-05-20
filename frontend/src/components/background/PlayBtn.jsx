import pauseIcon from '../../assets/ui/buttons/Pause-removebg-preview.png';
import playIcon from '../../assets/ui/buttons/Play-removebg-preview.png';

export default function PlayBtn({isPlaying, handlePlay}){

  return (
    <>
      <div className="w-30">
        <button onClick={handlePlay}>{isPlaying ? <img src={pauseIcon} alt="Pause" /> : <img src={playIcon} alt="Play" />}</button>
      </div>
    </>
  )
}