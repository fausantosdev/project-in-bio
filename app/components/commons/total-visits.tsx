import Button from "@/app/ui/button"
import { FaUpDown } from "react-icons/fa6"

export default function TotalVisits() {
  return(
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg">
      <div className="font-bold text-white">Total de visitas</div>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold">12548</span>
        <FaUpDown />
      </div>
      {/*<div className="flex items-center gap-2">
        <Button variant="ghost">Sair</Button>
        <Button variant="ghost">Portal</Button>
      </div>*/}
    </div>
  )
}
