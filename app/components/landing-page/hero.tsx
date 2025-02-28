import Button from "@/app/ui/button"
import TextInput from "@/app/ui/text-input"
import UserCard from "../commons/user-card"
import TotalVisits from "../commons/total-visits"
import ProjectCard from "@/app/ui/projec-card"

export default function Hero() {
  return(
    <div className="flex flex-col sm:flex-row">
      <div className="w-full flex flex-col justify-center gap-2 mb-10 sm:mb-0">
				<h1 className="text-3xl text-center sm:text-left font-bold text-white">
				  Seus projetos e redes sociais em um único link
				</h1>
				<h2 className="text-xl leading-6 text-center sm:text-left">
					Crie sua própria página de projetos e compartilhe eles com o mundo
					<br />
					Acompanhe o engajamento com Analytics e cliques
				</h2>
				<div className="flex items-center gap-2 w-full mt-[10vh] flex-col sm:flex-row">
          <div className="flex items-center w-full">
            <span className="text-white text-xs">projectinbio.com/</span>
            <TextInput placeholder="Seu link"/>
          </div>
					<Button className="w-full sm:w-auto">Criar agora</Button>
				</div>
			</div>
			<div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
				<div className="relative">
					<UserCard />
					<div className="hidden md:block absolute -bottom-[7%] -right-[10%] lg:-right-[45%]">
						<TotalVisits />
					</div>
					<div className="hidden md:block absolute top-[20%] -left-[45%] -z-10 opacity-35">
						<ProjectCard />
					</div>
					<div className="hidden md:block absolute -top-[5%] -left-[55%] -z-10">
						<ProjectCard />
					</div>
				</div>
			</div>
    </div>
  )
}
