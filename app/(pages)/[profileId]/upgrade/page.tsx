import Header from "@/app/components/landing-page/header"
import Button from "@/app/ui/button"

export default function Upgrade() {
  return(
    <div className="flex w-full flex-col">
      <Header />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-20">Escolha o plano</h2>
        <div className="flex gap-4 mt-10">
          <Button>R$ 9,90 / mês</Button>
          <Button>R$ 99,90 / vitalício</Button>
        </div>
      </div>
    </div>
  )
}
