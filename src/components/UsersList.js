import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import { useEffect } from 'react';

function UsersList() {
  const dispatch = useDispatch();
  const {isLoading, data, error} = useSelector((state) => state.users);
	
  useEffect(() => {
    dispatch(fetchUsers());
		console.log('i fire once');
  }, [dispatch]);

  const renderedUsers = data.map((user) => (
    <div key={user.id} className='p-3 shadow-md'>
      {user.id}: {user.name}
    </div>
  ));

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error fetching data</div>
	}

  return <div>{renderedUsers}</div>;
}

export default UsersList;
