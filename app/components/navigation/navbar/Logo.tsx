import Image from "next/image"

function Logo(){
  return (
    <>
      <Image
        src="/titans.png"
        alt="Logo"
        width="200"
        height="0"
        className="relative"
      />
    </>
  )
}

export default Logo
