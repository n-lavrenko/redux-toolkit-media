import { useFetchPhotosQuery } from '../store'

export default function PhotosList({album}) {
	const {data, error, isLoading} = useFetchPhotosQuery(album)



	// const renderedPhotosList = data.map(photo => <div key={photo.id}>{photo.url}</div>)

	return <div>
		{album.title}
		</div>
}