const Nav = () => {
  return (
    <ul className='flex space-x-6 font-bold'>
        <li>
            <a className='bg-[#8C4A32] px-2 py-1 rounded-sm text-white' href="#">Shop</a>
        </li>
        <li>
            <a href="#">Popular</a>
        </li>
        <li>
            <a href="#">Gifts</a>
        </li>
        <li>
            <a href="#">Summer Sale</a>
        </li>
    </ul>
  )
}

export default Nav;