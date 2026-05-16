function StorageBar() {
  return (
    <div className='bg-white p-5 rounded-xl shadow mb-5'>
      <div className='flex justify-between mb-2'>
        <span>Storage Used</span>
        <span>7GB / 15GB</span>
      </div>

      <div className='w-full bg-gray-200 h-3 rounded-full'>
        <div className='bg-blue-500 h-3 rounded-full w-[50%]'></div>
      </div>
    </div>
  )
}

export default StorageBar