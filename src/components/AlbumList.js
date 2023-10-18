import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandeblePanel from './ExpandablePanel';
import Button from './Button';

export default function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
	const [addAlbum, {isLoading: isLoadingAdd}] = useAddAlbumMutation();

	const handleAddAlbum = () => {
		addAlbum(user);
	}

  let content;
  if (isLoading) {
    content = <Skeleton className={'h-10 w-full'} times={3} />;
  } else if (error) {
    content = <div>Error while loading user albums</div>;
  } else {
		content = data.map((album) => {
			const header = <div>
				{album.title}
				</div>;
      return <ExpandeblePanel key={album.id} header={header}>
        List of photos in the album
      </ExpandeblePanel>;
    });
  }

  return (
    <div>
      <div className='m-2 flex flex-row justify-between items-center'>
				<h3 className='text-lg font-bold'>Albums for {user.name}</h3>
				<Button loading={isLoadingAdd} onClick={handleAddAlbum}>+ Add Album</Button>
				</div>
      <div>{content}</div>
    </div>
  );
}
