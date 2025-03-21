import Banner from '../../assets/img/hero-banner.jpg';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Tiktok from '../../assets/icons/tiktok.svg';
import Pinterest from '../../assets/icons/pinterest.svg';
import Logo from '../../assets/img/no-bg-logo.png';

const Hero = () => {
  return (
    <div
        style={{ backgroundImage: `url(${Banner})` }}
        className='flex gap-30 h-[40%] bg-cover bg-center px-[20%] pt-20 pb-10'
    >
        <div className='flex flex-col items-start justify-between h-full'>
            <div className='flex flex-col items-center justify-center gap-2 text-center text-white bg-[#8C4A32] w-45 h-45 rounded-full'>
                <p className='text-[12px]'>LIMITED SALE</p>
                <h1 className='text-5xl font-black'>-20%</h1>
                <p className='text-[12px]'>ON 2 OR MORE ITEMS</p>
            </div>
            <div className='flex gap-4'>
                <img 
                    src={Instagram} 
                    alt="Instagram icon" 
                    className='w-6 h-6' 
                />
                <img 
                    src={Facebook} 
                    alt="Facebook icon"
                    className='w-6 h-6'
                />
                <img 
                    src={Tiktok} 
                    alt="Tiktok icon"
                    className='w-6 h-6' 
                />
                <img 
                    src={Pinterest} 
                    alt="Pinterest icon"
                    className='w-6 h-6' 
                />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='text-6xl font-black text-[#8C4A32]'>It's natural.</h1>
            <h1 className='text-6xl font-black text-[#8C4A32]'>It's eco-friendly.</h1>
            <h1 className='text-6xl font-black text-[#8C4A32] flex gap-4'>It's <img src={Logo} alt="Logo" className='w-8' /> good stuff.</h1>
        </div>
    </div>
  )
}

export default Hero;