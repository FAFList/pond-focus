
import bgImage from "../../assets/bg.png"

export default function PondScene() {
  return (
    <>
      <div className="h-screen bg-cover bg-center" style={{
        backgroundImage: `url(${bgImage})`
      }}>
      </div>
    </>
  )
}