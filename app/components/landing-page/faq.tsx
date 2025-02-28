export default function Faq() {
  const faqItems = [
    {
      "id": 1,
      "title": "Lorem Ipsum Dolor",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "id": 2,
      "title": "Ut Enim Ad Minim",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "id": 3,
      "title": "Duis Aute Irure",
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      "id": 15,
      "title": "Excepteur Sint",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 175,
      "title": "Sed Ut Perspiciatis",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      "id": 71,
      "title": "Nemo Enim Ipsam",
      "description": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
    }
  ]

  return(
    <div className="my-2 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Dúvidas</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-3">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map(item => (
            <FaqItem key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map(item => (
            <FaqItem key={item.id} title={item.title} description={item.description} />
          ))}
      </div>
      </div>
    </div>
  )
}

function FaqItem({
  title, 
  description
}: {
  title: string,
  description: string
}) {
  return(
    <div className="w-full sm:w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  )
}
