interface PromoCardProps {
    id: number;
    img: any;
    name: string;
    description: string;
  }
  
  export default function PromoCard({id, img, name, description} : PromoCardProps) {
    return (
      <div className="flex flex-col bg-white p-4 rounded">
        <img
          alt={`menu-${name}`}
          src={img}
          className="object-contain mb-6"
        />
        <div className="justify-items-start content-start p-0">
          <p className="font-semibold text-sm md:text-base lg:text-lg text-navy-blue mr-2">{name}</p>
          <p className="text-xs md:text-sm lg:text-base mr-2">{description}</p>
        </div>
      </div>
    )
  }
  