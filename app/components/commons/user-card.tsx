import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaPlus } from "react-icons/fa"
import Image from "next/image"
import Button from "@/app/ui/button"

export default function UserCard() {
  const icons = [
    FaGithub, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaPlus 
  ]

  return(
    <div className="w-full sm:w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <Image 
          width={150}
          height={150}
          src="https://avatars.githubusercontent.com/u/24240332?v=4" 
          alt="Fau Santos" 
          className="rounded-full object-cover w-full h-full"/>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Fau Santos</h3>
        </div>
        <p className="opacity-40">"Desenvolvendo soluções"</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xl font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map((Icon, index) => (
            <Button key={index} className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
              <Icon />
            </Button>
          ))}
        </div>
      </div> 
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Template SaaS - Compre Agora</Button>
          <Button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
            <FaPlus />
          </Button>
        </div>
      </div>
    </div>
  )
}
