interface ReviewCardProps {
    id: number;
    name: string;
    review: string;
  }
  
  export default function ReviewCard({id, name, review} : ReviewCardProps) {
    return (
      <div className="flex flex-col basis-4/12 bg-white p-4 rounded">
        <p className="text-gold-yellow text-6xl max-h-8">"</p>
        <div className="justify-items-start content-start p-2 h-36">
          <p className="font-semibold text-navy-blue">{name}</p>
          <p className="text-sm">{review}</p>
        </div>
        <p className="text-gold-yellow self-end text-6xl max-h-5">"</p>
      </div>
    )
  }
  