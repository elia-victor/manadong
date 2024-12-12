import { MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

interface ReviewCardProps {
  id: number;
  title: string;
  description: string;
}
  
  export default function LocationCard({id, title, description} : ReviewCardProps) {
    return (
      <div className="flex flex-initial justify-items-center items-center bg-white p-4 border border-solid rounded">
        <MapPinIcon className="text-logo-red bg-logo-red/30 rounded h-10 w-10 p-2" />
        <div className="justify-items-start content-start p-2 h-36">
          <p className="font-semibold text-navy-blue mb-2">{title}</p>
          <p className="text-xs mb-2">{description}</p>
          <div className="border-b-2 border-logo-red flex justify-items-center items-center">
            <PaperAirplaneIcon className="text-logo-red -rotate-45 rounded h-8 w-8 p-2" />
            <p className="text-logo-red">
              View Map
            </p>
          </div>
        </div>
      </div>
    )
  }
  