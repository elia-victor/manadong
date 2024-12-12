import background from '../image/PNG/background.png';
import OrderNowBtn from '../components/OrderNowBtn';

export default function Dashboard() {
  return (
    <div className="h-fit grid grid-cols-2">
        <div className="bg-soft-pink justify-items-center content-center p-4">
          <div>
            <p className="text-logo-red font-semibold text-xl md:text-base lg:text-4xl my-6">
                Manadong
            </p>
            <p className="text-navy-blue text-base md:text-sm lg:text-xl mt-2">
                is a Manado dish with a spicy
            </p>
            <p className="text-navy-blue text-base md:text-sm lg:text-xl mb-2">
                and appetizing flavour.
            </p>
            <p className="text-logo-red text-base md:text-sm lg:text-xl my-6">
                #NikmatnyaGaPakeRibet
            </p>
            <OrderNowBtn />
          </div>
        </div>
        <img
          alt="manadong"
          src={background}
          className="h-full object-cover md:object-contain lg:object-cover"
        />
    </div>
  )
}
