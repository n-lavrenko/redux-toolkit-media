export default function UsersListItem({ user }) {
  return       <div className='mb-2 border p-2 shadow-md rounded'>
	<div className='flex p-2 justify-between items-center cursor-pointer'>
		{user.name}
	</div>
</div>;
}
