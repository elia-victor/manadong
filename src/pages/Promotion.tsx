import PromoCard from '../components/PromoCard';
import buy2get1 from '../image/PNG/promo/Buy2Get1.png';
import discount20 from '../image/PNG/promo/Discount20.png';
import bundleDeal from '../image/PNG/promo/BundleDeal.png';

export default function Promotion() {
  const promoArray = [
    {
      id: 0,
      img: buy2get1,
      name: 'Buy 2 Get 1',
      description: 'Buy 2 and get 1 free, applicable to selected variants',
    },
    {
      id: 1,
      img: discount20,
      name: 'Discount 20%',
      description: 'Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50.000',
    },
    {
      id: 2,
      img: bundleDeal,
      name: 'Bundle Deal',
      description: 'Purchase Ayam Woku and Ayam Rica can save 30% on the total cost',
    },
  ];
  return (
    <div className="bg-soft-pink p-6 md:p-14 grid grid-cols-3 justify-start">
      <div className="justify-items-start content-center">
        <p className="text-navy-blue font-semibold text-xl md:text-base lg:text-2xl my-6">
          <a className="text-navy-blue font-semibold decoration-logo-red decoration-4 underline-offset-4 underline">
            Pro
          </a>
            motion
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-md col-span-2">
        {
          promoArray.map((promo) => (
            <PromoCard
              id={promo.id}
              img={promo.img}
              name={promo.name}
              description={promo.description}
            />
          ))
        }
      </div>
    </div>
  )
}
