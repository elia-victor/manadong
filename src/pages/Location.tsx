import OrderNowBtn from '../components/OrderNowBtn';
import LocationCard from '../components/LocationCard';

export default function Location() {
  const locationArray = [
    {
      id: 0,
      title: 'Senopati, Petogogan',
      description: 'Santa Modern Market, Lt. 1 Blok CKS 5, Jl. Cipaku I No. 1, Petogogan, Jakarta Selatan',
    },
    {
      id: 1,
      title: 'Kebun Jeruk / Tanjung Duren',
      description: 'Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat',
    },
    {
      id: 2,
      title: 'Food Plaza PIK',
      description: 'Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara',
    },
    {
      id: 3,
      title: "Kuningan - D'Kanteen",
      description: 'D Kanteen, Jl. Komando Raya No. 18 DKI Jakarta 12920',
    },
    {
      id: 4,
      title: 'Bintaro, Thelapan Square',
      description: 'Jl. Jurang Mangu Bar. No. 38, Kota Tangerang Selatan, Banten',
    },
    {
      id: 5,
      title: 'Gading Serpong',
      description: 'Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No. 25, ...',
    },
    {
      id: 6,
      title: 'Cipete',
      description: 'Jl. Cipete Raya No. 74c, RW. 3, Cipete, Jakarta Selatan 12410',
    },
    {
      id: 7,
      title: 'Menteng',
      description: 'Jl. H. Agus Salim No. 60, Menteng, Jakarta Pusat 10350',
    },
  ];
  return (
    <div className="w-full bg-white px-14 flex flex-col my-6 mb-20">
      <p className="text-navy-blue font-semibold text-xl md:text-base lg:text-2xl my-6">
        <a className="text-navy-blue font-semibold decoration-logo-red decoration-4 underline-offset-4 underline">
          Loc
        </a>
        ations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-wrap">
        {
          locationArray.map((loc) => (
            <LocationCard
              id={loc.id}
              title={loc.title}
              description={loc.description}
            />
          ))
        }
      </div>
    </div>
  )
}
