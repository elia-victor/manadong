interface MenuCardProps {
  id: number;
  img: any;
  name: string;
  newFlag?: boolean;
  onClick?: any;
}

export default function MenuCard({id, img, name, newFlag, onClick} : MenuCardProps) {
  return (
    <div className="flex flex-col basis-1/5" onClick={onClick}>
      <img
        alt={`menu-${name}`}
        src={img}
        className="object-cover md:max-h-30 lg:max-h-30"
      />
      <div className="justify-items-center content-center p-2">
        <div className="flex flex-row">
          <p className="font-semibold text-sm md:text-base lg:text-lg mr-2">{name}</p>
          {
            newFlag && (
              <a className="text-xs md:text-sm lg:text-base px-1 text-logo-red border-solid border-2 border-logo-red rounded max-h-7">NEW</a>
            )
          }
        </div>
      </div>
    </div>
  )
}
