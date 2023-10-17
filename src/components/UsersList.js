import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import { useEffect } from 'react';
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log('i fire once');
  }, [dispatch]);

  const renderedUsers = data.map((user) => (
    <div key={user.id} className='mb-2 border p-2 shadow-md rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
    </div>
  ));

  if (isLoading) {
    return <Skeleton times={6} className='h-10 w-full' />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return <div>{renderedUsers}</div>;
}

export default UsersList;
