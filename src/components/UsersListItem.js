import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import useThunk from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumList from './AlbumList';

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(() => removeUser(user));

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className={'mr-3'} loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}
