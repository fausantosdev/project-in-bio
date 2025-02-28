import Button from "@/app/ui/button"
import Image from "next/image"

export default function Header() {
  return(
    <div className="flex flex-col sm:flex-row items-center justify-between py-5">
      <div className="flex items-center gap-4 mb-5 sm:mb-0">
        <Image 
          src="/logo.svg"
          alt="ProjectInBio"
          width={50}
          height={50}/>
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>  
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  )
}
