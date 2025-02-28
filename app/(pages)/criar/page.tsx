import Header from "@/app/components/landing-page/header"
import Button from "@/app/ui/button"
import TextInput from "@/app/ui/text-input"
import { FaRocket } from "react-icons/fa"

export default function CreatePage() {
  return(
    <div>
      <Header />
      <div className="flex flex-col gap-10 mt-32 items-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Encolha seu link</h1>
          <FaRocket size={30}/>
        </div>
        <form 
          action=""
          className="flex items-center gap-2 w-full mt-[10vh] flex-col sm:flex-row">
          <div className="flex items-center w-full">
            <span className="text-white">projectinbio.com/</span>
            <TextInput className=""/>
          </div>  
          <Button className="w-full sm:w-auto">Criar</Button>
        </form>
        <div className="">
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  )
}
