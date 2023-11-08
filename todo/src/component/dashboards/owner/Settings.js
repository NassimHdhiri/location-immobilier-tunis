import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { AiOutlineClose } from 'react-icons/ai';
import { getUser, updateUser } from '../../../store/DetailsProperties';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LogoutConfirmation from './LogoutConfirmation';

function Settings(props) {
  const [display, setDisplay] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const {isDisplayedLogoutDialogue}=useSelector((state)=>state.dashOwner)

  const { userDetails, isLoadingUser } = useSelector((state) => state.detailsProperty);

  const [data, setData] = useState({ owner_id: id});
  const [currentPwd, setCurrentP]= useState();
  const [newPwd, setNewP] = useState();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    setData({...userDetails});
    setCurrentP(data.password);
  }, [dispatch, userDetails]);

  const handleUpdate = () => {
        if(!data.firstName || !data.lastName || !data.email || !data.phoneNumber || (newPwd && currentPwd!==newPwd)){
          alert('Please fill all the required fields or current password not correct ! ');
        }else{
          dispatch(updateUser(data));
          setDisplay(!display)
        }
  };




  const keyTitle = {
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: 'Phone Number',
    photoProfile: 'Photo Profile',
    emailNotif: 'Email Notifications',
  };

  return (
    <div className="flex bg-white">
      <Sidebar role={props.role} />
      <div className="relative add-new-prop m-auto h-screen w-[90%] pt-8 gap-8 ">
        <div className=" w-[90%] min-h-[90%] max-h-[94%] overflow-y-auto m-auto p-20 pt-0 rounded-2xl border border-blue-300 shadow-indigo-300 shadow-lg">
          <h2 className="font-semibold text-3xl pt-6 -ml-5 fixed block w-[75%] bg-white ">Settings</h2>

          {display ? (
            <AiOutlineClose
              onClick={() => setDisplay(!display)}
              className="fill-gray-400 text-2xl absolute right-28 top-16 cursor-pointer hover:fill-red-600 "
            />
          ) : (
            <div
              onClick={() => setDisplay(!display)}
              className="cursor-pointer absolute right-28 top-16 z-50 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </div>
          )}

          {display ? (
            <div>
              <fieldset className="border p-5 text-center rounded-lg mt-16">
                            <legend className="text-gray-400">Profile Information</legend>
                            <div className="mt-4">
                              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                First Name
                              </label>
                              <input  value={data.firstName || ""}
                              onChange={(e) => setData({ ...data, firstName: e.target.value })}
                              type="text" id="full-name" name="full-name" className="mt-1 p-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm" placeholder="Your First Name"/>
                            </div>
                            <div className="mt-4">
                              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                Last Name
                              </label>
                              <input value={data.lastName || ""} 
                              onChange={(e) => setData({ ...data, lastName: e.target.value })}
                               type="text" id="full-name" name="full-name" className="mt-1 p-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm" placeholder="Your Last Name"/>
                            </div>
                            <div className="mt-4">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                              <input value={data.email || ""} 
                              onChange={(e) => setData({ ...data, email: e.target.value })}
                              type="email" id="email" name="email" className="mt-1 p-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm" placeholder="you@example.com"/>
                            </div>
                            <div className="mt-4">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Phone Number</label>
                              <input value={data.phoneNumber || ""}  
                              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                              type="tel" id="email" name="email" className="mt-1 p-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm" placeholder="12 123 123"/>
                            </div>
                            {/* Add more profile information fields here */}
                        </fieldset>
                        <fieldset className="border p-5 text-center rounded-lg mt-3">
                            <legend className="text-gray-400">Account Security</legend>
                            <div className="mt-4">
                              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                                Current Password
                              </label>
                              <input 
                              onChange={(e)=>setNewP(e.target.value)}
                              type="password" id="current-password" name="current-password" className="mt-1 p-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm" placeholder="Enter current password"/>
                            </div>
                            <div className="mt-4">
                              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                              <input  onChange={(e) => setData({ ...data, password: e.target.value })} type="password" id="new-password" name="new-password" className="mt-1 p-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm" placeholder="Enter new password"/>
                            </div>
                            {/* Add more account security options here */}
                        </fieldset>        
                          <fieldset className="border p-5 text-center rounded-lg mt-3">
                            <legend className="text-gray-400">Notification Preferences</legend>
                            <div className="mt-4">
                              <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
                              <div className="mt-2 space-y-2">
                                <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input value={data.emailNotif} checked={data.emailNotif} onChange={(e)=>setData({...data,emailNotif:!data.emailNotif})} id="notify-on-inquiry" name="notify-on-inquiry" type="checkbox" className="focus:ring-blue-300 h-4 w-4 text-blue-600 border-gray-300 rounded"/>
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor="notify-on-inquiry" className="font-medium text-gray-700"> Notify me on new inquiries</label>
                                  </div>
                                </div>
                                {/* Add more notification preferences here */}
                              </div>
                            </div>
                          </fieldset>                 
                          <button onClick={handleUpdate}             
                          className=" text-white mt-5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          > Save Changes</button>         
                          </div>       ) 
                          : (         
                          <div className="relative  shadow-md sm:rounded-lg mt-28 pt-5  border-2 ">           
                            
                            {userDetails.photoProfile ? (
                                      <img
                                        className="w-28 h-28 shadow-lg rounded-full m-auto mb-7"
                                        src={process.env.PUBLIC_URL + '/userImages/' + userDetails.photoProfile}
                                        alt="user"
                                      />
                                    ) : (
                                      <div className=' bg-blue-500 rounded-full text-center w-28 h-28 m-auto pt-4 '>
                                          <span className="w-full h-full text-7xl uppercase text-white  m-auto mb-7">
                                            {(userDetails.firstName)&& userDetails.lastName.charAt(0)}
                                          </span>
                                      </div>
                                    )}
                                 
                                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
                                    <tbody>
                                      {!isLoadingUser &&
                                        Object.entries(userDetails)
                                          .filter(([key]) => !['id', 'role', 'photoProfile','favoriteHouses','uid'].includes(key))
                                          .map(([key, item]) => (
                                            <tr
                                              className="capitalize bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                              key={key}
                                            >
                                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {keyTitle[key] || key}
                                              </th>
                                              <td className="px-6 py-4">{key === 'password' ? '************' : key ==="emailNotif" ? ((item===true)?"yes":"no") : item}</td>
                                            </tr>
                                          ))}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          </div>
                          {(isDisplayedLogoutDialogue) &&  <LogoutConfirmation/>}
                        </div>
  );
}

export default Settings;
