import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import Skeleton from './Skeleton'
import PhotosListItem from './PhotosListItem'

export default function PhotosList({album}) {
	const {data, error, isFetching} = useFetchPhotosQuery(album);
	const [addPhoto, addPhotoResult] = useAddPhotoMutation(album);

	let content;
	if (isFetching) {
		content = <Skeleton times={3} className={'flex flex-row h-32 w-32'}></Skeleton>
	}
	else if (error) {
		content = <div>Photos fetching error</div>
	}
	else {
		content = data.map(photo => {
			return <PhotosListItem key={photo.id} photo={photo} />
		})
	}

	const handleAddPhoto = () => {
		addPhoto(album)
	}

	return (
	<div>
		<div className='flex justify-between items-center'>
			<h3 className='text-lg font-bold'>Photos from in Album {album.title}</h3>
			<Button loading={addPhotoResult.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
		</div>
		<div className='mx-8 flex flex-row flex-wrap justify-center'>
			{content}
		</div>
		</div>
	)
}