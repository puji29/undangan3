import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalApi from "../../lib/GlobalApi";
// import { useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Sidebar from "./Sidebar";
function TableReservasi() {
  const [reservasiData, setReservasiData] = useState([]);

  useEffect(() => {
    getReservasi();
  }, []);

  const getReservasi = async () => {
    await GlobalApi.getReservasi().then((res) => {
      setReservasiData(res.data.data.data);
      console.log(res.data.data.data);
    });
  };

  const handleDelete = async (id) => {
    try {
      await GlobalApi.deleteReservasi(id);
      alert("delete data succesfully");
      setReservasiData(reservasiData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Sidebar />
      <div className="h-screen items-center text-center  py-4 ">
        <table className="w-[80%] md:w-[50%] border-collapse border  border-slate-400 mx-auto">
          <thead className="">
            <tr>
              <th className="border border-slate-300 ">No</th>
              <th className="border border-slate-300 ">Name</th>
              <th className="border border-slate-300">Jumlah</th>
              <th className="border border-slate-300">Status</th>
              <th className="border border-slate-300">Action</th>
            </tr>
          </thead>

          {reservasiData.map((data, index) => (
            <tbody key={index}>
              <tr className="border border-slate-300">
                <td className="border border-slate-300">{index + 1}</td>
                <td className="border border-slate-300">{data.name}</td>
                <td className="border border-slate-300">{data.jumlah} Orang</td>
                <td className="border border-slate-300">{data.status}</td>
                <td className="border border-slate-300">
                  <div className="grid grid-cols-2 content-center justify-items-center mx-auto  ">
                    <div className="">
                      <Link to={`/edit/${data.id}`}>
                        <CiEdit className=" text-[24px] " />
                      </Link>
                    </div>

                    <div className="">
                      <Link onClick={() => handleDelete(data.id)}>
                        <MdDeleteOutline className="text-[24px]" />
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default TableReservasi;
