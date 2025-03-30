import { manageAuth } from "@/app/actions/manage-auth"
import { auth } from "@/app/lib/auth"
import Button from "@/app/ui/button"
import Image from "next/image"

export default async function Header() {
  const session = await auth()

  console.log(session)

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
        {session && <Button>Minha página</Button>}
        <form action={manageAuth}>
          <Button>{session ? "Sair" : "LogIn"}</Button>
        </form>
      </div>
    </div>
  )
}
