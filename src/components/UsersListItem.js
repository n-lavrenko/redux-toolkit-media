import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import useThunk from '../hooks/use-thunk';

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(() => removeUser(user));

  const handleClick = () => {
		doRemoveUser(user);
	};

  return (
    <div className='mb-2 border p-2 shadow-md rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
					<div className='flex flex-row items-center justify-between'>
						<Button className={'mr-3'} loading={isLoading} onClick={handleClick}>
							<GoTrash />
						</Button>
						{error && <div>Error deleting user.</div>}
						{user.name}
					</div>
					
      </div>
    </div>
  );
}
