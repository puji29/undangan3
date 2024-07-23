import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalApi from "../../lib/GlobalApi";
// import { useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Sidebar from "./Sidebar";

function TableUcapan() {
  const [UcapanData, setUcapanData] = useState([]);

  useEffect(() => {
    getUcapan();
  }, []);

  const getUcapan = async () => {
    await GlobalApi.getUcapans().then((res) => {
      setUcapanData(res.data.data.data);
      console.log(res.data.data.data);
    });
  };

  const handleDelete = async (id) => {
    try {
      await GlobalApi.deleteUcapan(id);
      alert("delete data succesfully");
      setUcapanData(UcapanData.filter((item) => item.id !== id));
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
              <th className="border border-slate-300">Ucapan</th>
             
              <th className="border border-slate-300">Action</th>
            </tr>
          </thead>

          {UcapanData.map((data, index) => (
            <tbody key={index}>
              <tr className="border border-slate-300">
                <td className="border border-slate-300">{index + 1}</td>
                <td className="border border-slate-300">{data.name}</td>
                <td className="border border-slate-300">{data.ucapan}</td>
                <td className="border border-slate-300">
                  <div className="grid grid-cols-2 content-center justify-items-center mx-auto  ">
                    <div className="">
                      <Link to={`/ucapan/edit/${data.id}`}>
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

export default TableUcapan;
