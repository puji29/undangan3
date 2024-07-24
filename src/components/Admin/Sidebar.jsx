import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import GlobalApi from "../../lib/GlobalApi";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const logout = async()=>{
    try {
      await GlobalApi.logout(token)
      alert('Logout succesfully')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <nav className="bg-gray-900 py-5 px-5 sticky top-0 ">
        <div className="text-end">
          <span className="text-gray-100">icon</span>
          {/* <dropdown>
            <select name="select" id="" className="">
              <option value="">logout</option>
            </select>
          </dropdown> */}
        </div>
      </nav>

      <span
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className=" absolute text-white text-4xl top-5 left-4 cursor-pointer"
      >
        <IoFilterSharp className="px-2 bg-gray-900 rounded-md" />
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 ${
          isSidebarOpen ? "left-0" : "left-[-300px]"
        } p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 flex items-center">
            <AiFillDashboard className="px-2 py-1 bg-blue-200 rounded-md" />
            <h1 className="font-bold text-gray-200 text-[20px] ml-3">
              Dashboard
            </h1>
            {isSidebarOpen && (
              <IoMdClose
                onClick={() => setIsSidebarOpen(false)}
                className="ml-20 cursor-pointer lg:hidden"
              />
            )}
          </div>
          <hr className="my-2 text-gray-600" />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <IoSearch className="text-[15px]" />
          <input
            type="text"
            placeholder="Search ..."
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <Link to={"/reservasi"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <BsCalendarCheckFill className="text-[15px] mr-3" />
            <span>Reservasi</span>
          </div>
        </Link>
        <Link to={"/ucapan"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <FaPenFancy className="text-[15px] mr-3" />
            <span>Ucapan & Pesan</span>
          </div>
        </Link>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <IoLogOutOutline className="text-[22px] mr-3" />
          <span onClick={()=> logout()}>Logout</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
