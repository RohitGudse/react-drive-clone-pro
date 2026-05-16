import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-64 bg-white shadow-lg p-5'>
      <h2 className='text-xl font-bold mb-5'>Menu</h2>

      <div className='flex flex-col gap-4'>
        <Link to='/'>Dashboard</Link>
        <Link to='/shared'>Shared</Link>
        <Link to='/trash'>Trash</Link>
      </div>
    </div>
  )
}

export default Sidebar