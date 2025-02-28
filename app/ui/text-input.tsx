import { InputHTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

type Props = InputHTMLAttributes<HTMLInputElement> & {}

export default function TextInput({ ...props }: Props) {
  return(
    <input
      {...props}
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl 
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}/>
  )
}
