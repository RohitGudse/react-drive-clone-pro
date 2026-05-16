function FileCard({ file }) {
  return (
    <div className='bg-white p-5 rounded-xl shadow'>
      <h2 className='text-lg font-bold'>{file.name}</h2>
      <p>{file.size}</p>

      <div className='mt-4 flex gap-2'>
        <button className='bg-blue-500 text-white px-3 py-1 rounded'>
          Download
        </button>

        <button className='bg-green-500 text-white px-3 py-1 rounded'>
          Share
        </button>
      </div>
    </div>
  )
}

export default FileCard