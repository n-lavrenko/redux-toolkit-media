import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandeblePanel from './ExpandablePanel';
import Button from './Button';

export default function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
	const [addAlbum, results] = useAddAlbumMutation();

	const handleClick = () => {
		addAlbum(user);
	}

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error while loading user albums</div>;
  } else {
		content = data.map((album) => {
			const header = <divc>
				{album.title}
				</divc>;
      return <ExpandeblePanel header={header}>
        List of photos in the album
      </ExpandeblePanel>;
    });
  }

  return (
    <>
      <div className='pb-3 flex justify-between items-center'>
				Albums for {user.name}
				<Button onClick={handleClick}>+ Add Album</Button>
				</div>
      <div>{content}</div>
    </>
  );
}
