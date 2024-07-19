import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import GlobalApi from "../../lib/GlobalApi";
import Sidebar from "./Sidebar";

function FormEditRsvp() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    findReservasiById(id);
  }, []);

  const findReservasiById = async (id) => {
    try {
      const response = await GlobalApi.getReservasiById(id);
      setData(response.data.data);
      console.log(response.data.data.data);
      
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await GlobalApi.updateReservasi(id,data);
      console.log("data updated:", response.data.data.data);
      alert('Data updated succesfullly')
      navigate('/admin')
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
              <label htmlFor="name">Jumlah:</label>
              <br />
              <input
                type="number"
                name="jumlah"
                className="border rounded-md w-full py-2 px-3 outline-none"
                value={data.jumlah}
                onChange={(e) => setData({ ...data, jumlah: e.target.value })}
              />
            </div>
            <div className=" mr-7 ml-6 rounded-md py-1 px-3 ">
              <label htmlFor="name">Status:</label>
              <br />
              <input
                type="text"
                name="status"
                className="border rounded-md w-full py-2 px-3 outline-none"
                value={data.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
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

export default FormEditRsvp;
