import { useAuth } from '../../hooks/useAuth';
import { loginWithGoogle, logout } from '../../api/auth';

const Header = () => {
  const { user } = useAuth()

  return (
    <header className='p-4 bg-gray-800 text-white flex justify-between'>
      <h1 className='text-lg font-bold'>My App</h1>
      {user ? (
        <div className='flex items-center gap-2'>
          <p className='text-sm'>Logged in</p>
          <button onClick={logout} className='bg-red-500 px-3 py-1 rounded'>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={loginWithGoogle} className='bg-blue-500 px-3 py-1 rounded'>
          Log in
        </button>
      )}
    </header>
  )
}

export default Header;