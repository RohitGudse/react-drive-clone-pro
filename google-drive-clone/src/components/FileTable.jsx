import FileCard from './FileCard'

function FileTable() {
  const files = [
    {
      id: 1,
      name: 'Project.zip',
      size: '12MB',
    },
    {
      id: 2,
      name: 'Photo.png',
      size: '4MB',
    },
  ]

  return (
    <div className='grid grid-cols-3 gap-5'>
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  )
}

export default FileTable