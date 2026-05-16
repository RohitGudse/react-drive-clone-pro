function FolderCard({ folder }) {
  return (
    <div className='bg-yellow-100 p-4 rounded-xl shadow'>
      <h2 className='font-bold'>{folder.name}</h2>
    </div>
  )
}

export default FolderCard