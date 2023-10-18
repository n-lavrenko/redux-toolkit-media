import { useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import ExpandeblePanel from './ExpandablePanel';

export default function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error while loading user albums</div>;
  } else {
		content = data.map((album) => {
			const header = <div>{album.title}</div>;
      return <ExpandeblePanel header={header}>
        List of photos in the album
      </ExpandeblePanel>;
    });
  }

  return (
    <>
      <div className='pb-3'>Albums for {user.name}</div>
      <div>{content}</div>
    </>
  );
}
