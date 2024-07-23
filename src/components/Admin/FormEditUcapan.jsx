import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import GlobalApi from "../../lib/GlobalApi";
import Sidebar from "./Sidebar";

function FormEditUcapan() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    findUcapanById(id);
  }, []);

  const findUcapanById = async (id) => {
    try {
      const response = await GlobalApi.getUcapanById(id);
      setData(response.data.data);
      console.log(response.data.data);
      
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await GlobalApi.updateUcapan(id,data);
      console.log("data updated:", response.data.data);
      alert('Data updated succesfullly')
      navigate('/ucapan')
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="">
        <div className="h-screen   py-4 border rounded-lg bg-gray-300  mr-4 ml-4 mt-5 ">
          <h2 className="font-bold text-start ml-9 mb-3">EDIT DATA</h2>
          <form onSubmit={handleUpdate}>
            <div className=" mr-7 ml-6 rounded-md py-1 px-3 ">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                className="border rounded-md w-full py-2 px-3 outline-none"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className=" mr-7 ml-6 rounded-md py-1 px-3 ">
              <label htmlFor="ucapan">Ucapan:</label>
              <br />
              <input
                type="text"
                name="ucapan"
                className="border rounded-md w-full py-2 px-3 outline-none"
                value={data.ucapan}
                onChange={(e) => setData({ ...data, ucapan: e.target.value })}
              />
            </div>
            
            <div className="flex">
              <button className="mx-auto bg-blue-600 rounded-lg py-2 px-2 ">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormEditUcapan;
