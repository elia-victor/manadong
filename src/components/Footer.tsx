import logo from '../image/SVG/logo.svg';
import facebook from '../image/PNG/socialmedia/facebook.png';
import instagram from '../image/PNG/socialmedia/instagram.png';
import whatsapp from '../image/PNG/socialmedia/whatsapp.png';

export default function Footer() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center bg-navy-blue p-4">
      <div className="max-w-1/3 p-sm md:px-xl flex-col items-center">
        <img
          alt="manadong"
          src={logo}
          className="h-20"
        />
        <p className="text-white">
          Copyright © 2023 PT Bogadong Anugerah Indonesia
        </p>
      </div>
      <div className="max-w-1/3 p-sm md:px-xl flex-col items-center">
        <p className="text-white text-2xl">
          Contact Us
        </p>
        <p className="text-white">
          Email: <a className="underline text-sm">manadong@gmail.com</a>
        </p>
        <p className="text-white">
          Telp: <a className="underline">+62-811-1009-115</a>
        </p>
        <div className="flex flex-row justify-center p-3">
          <img
            alt="wa-manadong"
            src={whatsapp}
            className="h-5 px-3"
          />
          <img
            alt="fb-manadong"
            src={facebook}
            className="h-5 px-3"
          />
          <img
            alt="ig-manadong"
            src={instagram}
            className="h-5 px-3"
          />
        </div>
      </div>
      <div className="max-w-1/3 p-sm md:px-xl flex-col items-center">
        <p className="text-white text-2xl">
          Available On
        </p>
        <p className="text-white underline">
          Grab Food
        </p>
        <p className="text-white underline">
          GoFood
        </p>
        <p className="text-white underline">
          Shopee Food
        </p>
      </div>
    </div>
  )
}
