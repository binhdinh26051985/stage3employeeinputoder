import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Home from './components/home'
import Employee from './components/employee'
import Category from './components/category'
import Profile from './components/profile'
import AddCategory from './components/AddCategory'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/edit_employee'
import Start from './components/start'
import EmployeeLogin from './components/employeeLogin'
import EmployeeDetail from './components/employeeDetail'
import PrivateRoute from './components/privateRoute'
import EmpDashboard from './components/empdashboard'
import Stylemodel from './components/stylemodel'
import Stylegroup from './components/styleGroups'
import Customer from './components/customer'
import Detailstyle from './components/styledetai'
import Addgroup from './components/Addstylegroup'
import AddStyles from './components/addnewstyle'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/empldashboard' element={<EmpDashboard />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
      </Route>
      <Route path='/empldashboard' element={
        <PrivateRoute >
          <EmpDashboard />
        </PrivateRoute>
      }>
        <Route path='/empldashboard/style' element={<Stylemodel/>}></Route>
        <Route path='/empldashboard/groupstyle' element={<Stylegroup/>}></Route>
        <Route path='/empldashboard/customer' element={<Customer/>}></Route>
        <Route path='/empldashboard/styldetail' element={<Detailstyle/>}></Route>
        <Route path='/empldashboard/addgroup' element={<Addgroup/>}></Route>
        <Route path='/empldashboard/addstyle' element={<AddStyles/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App