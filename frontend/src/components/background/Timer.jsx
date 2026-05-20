import board from "../../assets/ui/ChatGPT_Image_May_20__2026__05_04_56_PM-removebg-preview.png"
export default function Timer({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <img className="h-auto w-auto object-cover" src={board} />
      <div>{minutes}</div>
      <div>{seconds < 10 ? "0" + seconds : seconds}</div>
    </>
  )
}