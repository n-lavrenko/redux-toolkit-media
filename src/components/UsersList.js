import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import { useEffect } from 'react';
import Button from './Button';
import Skeleton from './Skeleton';
import useThunk from '../hooks/use-thunk';

function UsersList() {
  const [doFetchUsers, isLoadingUsers, fethcUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  const renderedUsers = data.map((user) => (
    <div key={user.id} className='mb-2 border p-2 shadow-md rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        {user.name}
      </div>
    </div>
  ));

  if (isLoadingUsers) {
    return <Skeleton times={6} className='h-10 w-full' />;
  }

  if (fethcUsersError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          {isCreatingUser ? 'Creating a User...' : '+ Add User'}
        </Button>
        {creatingUserError && 'Error creating user'}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
