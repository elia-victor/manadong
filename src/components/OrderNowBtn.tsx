import { useNavigate } from 'react-router-dom';

interface OrderNowBtnProps {
  type: string;
}


export default function OrderNowBtn({ type }: OrderNowBtnProps) {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate("/order")}
      className={type != 'fill'
        ? 'bg-transparent text-sm md:text-base lg:text-lg border border-navy-blue text-navy-blue py-2 px-4 font-semibold hover:text-soft-pink hover:bg-navy-blue hover:border-transparent rounded max-h-10'
        : 'bg-navy-blue text-sm md:text-base lg:text-lg border border-transparent text-white py-2 px-4 font-semibold hover:text-navy-blue hover:bg-transparent hover:border-navy-blue rounded max-h-10'
      }>
        Order Now
    </button>
  )
}
