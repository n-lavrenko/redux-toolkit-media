import { useRemovePhotoMutation } from '../store';
import { GoTrash } from 'react-icons/go';

export default function PhotosListItem({ photo }) {
  const [removePhoto, result] = useRemovePhotoMutation(photo);

  const hanldeRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className='m-4 relative cursor-pointer'>
      <img className='h-32 w-32 aspect-auto rounded-md shadow-sm' src={photo.url} />
      <div
        onClick={hanldeRemovePhoto}
        className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'
      >
        <GoTrash className='h-10 w-10' />
      </div>
    </div>
  );
}
