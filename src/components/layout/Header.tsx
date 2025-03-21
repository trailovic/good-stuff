import Auth from "../custom/Auth";
import Nav from "../custom/Nav";
import LanguageSwitcher from "../custom/LanguageSwitcher";

import Logo from "../custom/Logo";
import Search from "../custom/Search";
import Cart from '../../assets/icons/cart.svg';
import Heart from '../../assets/icons/heart.svg';

const Header = () => {
  return (
    <header className='py-4 px-12 bg-[#FBF0B2] text-gray-900 flex justify-between items-center'>
      <Logo />
      <Nav />
      <Search />
      <LanguageSwitcher />
      <div className='flex gap-4 items-center'>
        <a href="#">
          <img src={Cart} alt="Cart icon" className='w-6 h-6' />
        </a>
        <a href="#">
          <img src={Heart} alt="Heart icon" className='w-6 h-6' />
        </a>
        <Auth />
      </div>
    </header>
  );
};

export default Header;