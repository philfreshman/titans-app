import Image from "next/image"

function Logo(){
  return (
    <>
      <Image
        priority
        src="/titans.png"
        alt="Logo"
        width="200"
        height="55"
        className="relative"
      />
    </>
  )
}

export default Logo
