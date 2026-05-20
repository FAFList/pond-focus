import resetIcon from '../../assets/ui/buttons/Reset-removebg-preview.png';
export default function ResetBtn({ onReset }){

  return (
    <>
    <button onClick={onReset}><img src={resetIcon} alt="Reset" /></button>
    </>
  )
}