import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import OrderNowBtn from '../components/OrderNowBtn';
import MenuCard from '../components/MenuCard';
import ayamWoku from '../image/PNG/menu/Ayam Woku.png';
import cumiHitam from '../image/PNG/menu/Cumi Hitam.png';
import cakalangTinorasak from '../image/PNG/menu/Cakalang Tinorasak.png';
import perkedelJagung from '../image/PNG/menu/Perkedel Jagung.png';
import ayamRica from '../image/PNG/menu/Ayam Rica.png';
import laukFrozen from '../image/PNG/menu/Frozen Food.png';
import cakalangRabe from '../image/PNG/menu/Cakalang Rabe.png';

export default function OurMenu() {
  const [dialog, setDialog] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  const toggleDialog = (id: number) => {
    setSelectedMenu(id);
    setDialog((cur) => !cur);
  };

  const menuArray = [
    {
      id: 0,
      img: ayamRica,
      name: 'Ayam Rica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 40.000',
      newFlag: true,
    },
    {
      id: 1,
      img: cumiHitam,
      name: 'Cumi Hitam',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 40.000',
      newFlag: false,
    },
    {
      id: 2,
      img: cakalangTinorasak,
      name: 'Cakalang Tinorasak',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 40.000',
      newFlag: false,
    },
    {
      id: 3,
      img: perkedelJagung,
      name: 'Perkedel Jagung',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 20.000',
      newFlag: false,
    },
    {
      id: 4,
      img: ayamWoku,
      name: 'Ayam Woku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 40.000',
      newFlag: false,
    },
    {
      id: 5,
      img: laukFrozen,
      name: 'Lauk Frozen',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 90.000',
      newFlag: false,
    },
    {
      id: 6,
      img: cakalangRabe,
      name: 'Cakalang Rabe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'Rp. 40.000',
      newFlag: false,
    },
  ];
  return (
    <div className="bg-white px-14 flex flex-col my-6">
      <p className="text-navy-blue font-semibold text-xl md:text-base lg:text-2xl my-6">
        <a className="text-navy-blue font-semibold decoration-logo-red decoration-4 underline-offset-4 underline mr-2">
          Our
        </a>
        Menu
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          menuArray.map((menu) => (
            <MenuCard
              id={menu.id}
              img={menu.img}
              name={menu.name}
              newFlag={menu.newFlag}
              onClick={() => toggleDialog(menu.id)}
            />
          ))
        }
      </div>
      <div className="self-center my-6">
        <OrderNowBtn />
      </div>
      {
        dialog && (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg max-w-xs md:max-w-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*body*/}
                  <XMarkIcon onClick={toggleDialog} className="bg-white absolute right-2 top-2 rounded-full h-6 w-6 md:h-7 md:w-7 " />
                  <div className="flex flex-col basis-1/4">
                    <img
                      alt={`menu-${menuArray[selectedMenu].name}`}
                      src={menuArray[selectedMenu].img}
                      className="object-contain"
                    />
                    <div className="justify-items-start content-center p-2 px-4">
                      <div className="flex flex-row">
                        <p className="font-semibold text-navy-blue text-sm md:text-base lg:text-lg mr-2">{menuArray[selectedMenu].name}</p>
                        {
                          menuArray[selectedMenu].newFlag && (
                            <a className="text-xs md:text-sm lg:text-base px-1 text-logo-red border-solid border-2 border-logo-red rounded max-h-7">NEW</a>
                          )
                        }
                      </div>
                      <p>{menuArray[selectedMenu].description}</p>
                      <p className="text-logo-red font-semibold">{menuArray[selectedMenu].price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )
      }
    </div>
  )
}
