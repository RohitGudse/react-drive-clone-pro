import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import FileTable from '../components/FileTable'
import StorageBar from '../components/StorageBar'

function Dashboard() {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />

      <div className='flex-1'>
        <Navbar />

        <div className='p-5'>
          <StorageBar />
          <FileTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard