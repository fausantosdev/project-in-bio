import { TextareaHTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {}

export default function TextArea({ ...props }: Props) {
  return(
    <textarea
      {...props} 
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl 
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}/>
  )
}
