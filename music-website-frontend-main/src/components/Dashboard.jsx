import DashBoardSidebar from './DashBoardSidebar'
import DashboardForm from './DashboardForm'
import Navbar from '../components/common/Navbar'

const Dashboard = ({ user }) => {
  return (
    <>
      {/* <DashBoardSidebar /> */}
      <Navbar user={true} />
      <DashboardForm user={user} />
    </>
  )
}

export default Dashboard