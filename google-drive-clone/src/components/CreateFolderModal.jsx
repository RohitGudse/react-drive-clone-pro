function CreateFolderModal() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
      <div className='bg-white p-5 rounded-xl'>
        <input
          type='text'
          placeholder='Folder Name'
          className='border p-2 rounded'
        />
      </div>
    </div>
  )
}

export default CreateFolderModal