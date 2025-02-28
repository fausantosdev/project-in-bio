import TotalVisits from "@/app/components/commons/total-visits"
import UserCard from "@/app/components/commons/user-card"
import ProjectCard from "@/app/ui/projec-card"
import Link from "next/link"
import { FaPlus } from "react-icons/fa"

type Props = {
  params: {
    profileId: string
  }
}

export default async function Profile({ params }: Props) {
  const { profileId } = await params
  
  return(
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 w-full flex flex-col sm:flex-row justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão triel.</span>
        <Link href={`${profileId}/upgrade`}>
          <button className="text-accent-green font-bold">Faça upgrade agora</button>
        </Link>
      </div>
      <div className="mt-24 flex flex-col sm:flex-row">
        <UserCard />
        
        <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-x-auto mt-10 sm:mt-0">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed border-border-secondary">
            <FaPlus className="size-10 text-accent-green"/>
            <span>Novo projeto</span>
          </button>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <TotalVisits />
      </div>
    </div>
  )
}
