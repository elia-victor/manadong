import ReviewCard from '../components/ReviewCard';

export default function Review() {
  const promoArray = [
    {
      id: 0,
      name: 'Jennifer',
      review: 'Such a good value for your money. Really good Manadonese food. Well recommended!',
    },
    {
      id: 1,
      name: 'A*********a',
      review: 'Cakalangnya terbaiiikkkkk, the best cakalang everrr',
    },
    {
      id: 2,
      name: 'Nadia',
      review: 'Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab',
    },
  ];
  return (
    <div className="w-full bg-navy-blue/20 p-14 flex flex-col">
      <div className="content-start">
        <p className="text-navy-blue font-semibold text-xl md:text-base lg:text-2xl md:text-base lg:text-2xl my-6">
          <a className="text-navy-blue font-semibold decoration-logo-red decoration-4 underline-offset-4 underline">
            Rev
          </a>
            iews
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          promoArray.map((promo) => (
            <ReviewCard
              id={promo.id}
              name={promo.name}
              review={promo.review}
            />
          ))
        }
      </div>
    </div>
  )
}
