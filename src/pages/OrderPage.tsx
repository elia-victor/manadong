import OrderNowBtn from '../components/OrderNowBtn';
import GrabFood from '../image/PNG/partner/grab.png';
import GoFood from '../image/PNG/partner/gofood.png';
import ShopeeFood from '../image/PNG/partner/shopee.png';

export default function Review() {
  const partnerArray = [
    {
      id: 0,
      name: 'GrabFood',
      img: GrabFood,
    },
    {
      id: 1,
      name: 'GoFood',
      img: GoFood,
    },
    {
      id: 2,
      name: 'ShopeeFood',
      img: ShopeeFood,
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="justify-items-center items-center m-10">
        <p className="text-navy-blue font-semibold text-xl md:text-base lg:text-2xl md:text-base lg:text-2xl my-6">
          <a className="text-navy-blue font-semibold decoration-logo-red decoration-4 underline-offset-4 underline">
            Ord
          </a>
            er Now On :
        </p>
        <div className="grid grid-cols-3 gap-6">
          {
            partnerArray.map((partner) => (
              <div className="justify-items-center self-end grid grid-row-2">
                <img
                  alt={partner.name}
                  src={partner.img}
                  className="object-cover max-h-25 md:max-h-30 lg:max-h-30"
                />
                  <OrderNowBtn type="fill" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
