import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs'
import FindPros from './pages/FindPros.js'
import SignUp from '../src/component/SignUp'
import Login from './component/Login';
import ForgetPwd from './component/ForgetPwd';
import GetCodePin from './component/GetCodePin';
import SetNewPwd from './component/SetNewPwd';
import Finished from './component/Finished';
import DashOwner from './component/dashboards/owner/DashOwner';
import BasicInfos from './component/dashboards/owner/BasicInfos';
import Settings from './component/dashboards/owner/Settings';
import Chats from './component/dashboards/seeker/Chats';
import DashRetailer from './component/dashboards/seeker/DashRetailer';
import NotFound from './component/NotFound';
import HomeDetails from './pages/HomeDetails';
import PrivateRoute from './auth/PrivateRoute'
import AlertInfo from './component/dashboards/owner/AlertInfo';
import { Offline, Online } from "react-detect-offline";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [isOnline,setIsOnline] = useState(true);

  useEffect(() => {
       setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // 5 seconds

      return () => {
        clearTimeout(timer);
      };
  }, []);

  return (
    <div>
      <NavBar/> 
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/find-props" >
            <Route path=":propsId" element={<HomeDetails />}/>
            <Route path="/find-props" element={<FindPros />}/>
          </Route>
          <Route path="/contact-us" element={<Contact />}>
            Contact us
          </Route>
          <Route path="/about-us" element={<AboutUs />}>
            about us
          </Route>
          <Route path="/sign-up" element={<SignUp/>}>
            about us
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/forget-pwd' element={<ForgetPwd/>}></Route>
          <Route path='/get-code-pin' element={<GetCodePin/>}></Route>
          <Route path='/set-new-pwd' element={<SetNewPwd/>}></Route>
          <Route path='/finished' element={<Finished/>}></Route>
          <Route path="/dash-owner/:id" >
            <Route path="add-new-props" element={<PrivateRoute><BasicInfos settings={{id:null,sideBar:true}}/></PrivateRoute>} />
            <Route path="settings"  element={<PrivateRoute><Settings role={1}/></PrivateRoute>} /> 
            <Route path=":propsId" element={<PrivateRoute><HomeDetails /></PrivateRoute>} />
            <Route path="/dash-owner/:id"  element={<PrivateRoute><DashOwner/></PrivateRoute>}/>
          </Route >
          <Route path="/dash-retailer/:id" >
            <Route path="chats" element={<PrivateRoute><Chats/></PrivateRoute>} />
            <Route path="settings" element={<PrivateRoute><Settings role={2}/></PrivateRoute>} />
            <Route path=":propsId" element={<PrivateRoute><HomeDetails/></PrivateRoute>} />
            <Route path="/dash-retailer/:id"  element={<PrivateRoute><DashRetailer/></PrivateRoute>}/> 
          </Route>
          <Route path="*"  element={<NotFound/>}/>
        </Routes>
          <Online>
            {(showAlert) && <AlertInfo isOnline={true}/>}
      		</Online>
      		<Offline>
            <AlertInfo isOnline={false} />  
      		</Offline>

    </div>
  );
}

export default App;
