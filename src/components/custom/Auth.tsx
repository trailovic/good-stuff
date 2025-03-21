import { useAuth } from '../../hooks/useAuth';
import { loginWithGoogle, logout } from '../../api/auth';
import { useState } from 'react';

import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from '../ui/dialog';
import { Button } from '../ui/button';

const Auth = () => {
    const { user } = useAuth()
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleLogout = () => {
        logout()
        setDialogOpen(false) // Close the dialog after logging out
    }

    return (
        <div>
            {user ? (
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className='flex items-center focus:outline-none cursor-pointer'>
                    {user.photoURL ? (
                        <img src={user.photoURL} alt='Profile' className='w-8 h-8 rounded-full border border-gray-300 cursor-pointer' />
                    ) : (
                        <span className='bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer'>
                        {user.displayName ? user.displayName[0] : '?'}
                        </span>
                    )}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-40 bg-white border border-gray-300 rounded-md shadow-lg'>
                    <DropdownMenuItem className='hover:bg-gray-100 cursor-pointer' onSelect={(e) => e.preventDefault()}>
                    Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className='hover:bg-gray-100 cursor-pointer' onSelect={(e) => e.preventDefault()}>
                    Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    className='text-red-600 hover:bg-red-100 cursor-pointer'
                    onSelect={() => setDialogOpen(true)}
                    >
                    Log Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button onClick={loginWithGoogle} className='bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'>
                Log in
                </Button>
            )}

            {/* Logout Confirmation Dialog */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className='bg-white border border-gray-300'>
                <DialogHeader>
                    <DialogTitle className='text-gray-900'>Confirm Logout</DialogTitle>
                    <DialogDescription className='text-gray-600'>
                    Are you sure you want to log out?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='flex justify-end space-x-2'>
                    <Button
                    variant='secondary'
                    onClick={() => setDialogOpen(false)}
                    className='bg-gray-100 text-gray-700 cursor-pointer'
                    >
                    Cancel
                    </Button>
                    <Button
                    variant='destructive'
                    onClick={handleLogout}
                    className='bg-red-500 hover:bg-red-600 text-white cursor-pointer'
                    >
                    Log Out
                    </Button>
                </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Auth;