import SearchBar from './SearchBar'
import UserProfile from './UserProfile'

function Navbar() {
  return (
    <div className='bg-white p-4 flex justify-between items-center shadow'>
      <h1 className='text-2xl font-bold'>Drive Clone</h1>
      <SearchBar />
      <UserProfile />
    </div>
  )
}

export default Navbar