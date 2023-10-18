import { GoTrash } from 'react-icons/go';
import Button from './Button';
import ExpandeblePanel from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumListItem({ album }) {
	const [removeAlbum, results] = useRemoveAlbumMutation()
	
  const handleClick = () => {
		removeAlbum(album)
	};
  const header = (
    <div className={'flex items-center'}>
      <Button className={'mr-3'} loading={results.isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandeblePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandeblePanel>
  );
}

export default AlbumListItem;
