import { useTranslation } from 'react-i18next';
import Chevron from '../../assets/icons/chevron-down.svg';

const Nav = () => {
    const { t } = useTranslation();
  
    return (
    <ul className='flex items-center justify-center space-x-6 font-bold'>
        <li>
            <a 
                className='bg-[#8C4A32] px-2 py-1 rounded-sm text-white flex items-center justify-center gap-2' 
                href="#">
                    {t('nav.shop')} 
                    <img src={Chevron} alt="" className='w-4 h-4' 
                />
            </a>
        </li>
        <li>
            <a href="#">{t('nav.popular')}</a>
        </li>
        <li>
            <a href="#">{t('nav.gifts')}</a>
        </li>
        <li>
            <a href="#">{t('nav.summer sale')}</a>
        </li>
    </ul>
  )
}

export default Nav;