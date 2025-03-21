import Image from '../../assets/img/no-bg-logo.png';

const Logo = () => {
  return (
    <div className='flex items-center space-x-4'>
        <img src={Image} alt="logo" className='w-8' />
        <h1 className='font-black text-4xl'>Good Stuff</h1>
    </div>
  )
}

export default Logo;