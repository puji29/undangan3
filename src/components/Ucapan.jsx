import { useState } from "react";
import ModalUcapan from "./ModalUcapan";
import { FaPenFancy } from "react-icons/fa";
function Ucapan() {
  const [name, setName] = useState("");
  const [pesan, setPesan] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePesan = (e) => {
    setPesan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(pesan);
  };

  return (
    <div className="py-6 mb-4 mt-8 text-center">
      <h1 className="text-[25px]">Pesan & Ucapan</h1>
      <div className="h-[380px] border rounded-lg mr-2 ml-2 py-2 mx-auto overflow-y-scroll ">
        <div className="w-100 h-40 scrollbar-thin scrollbar-webkit py-2">
           <div className="rounded-lg shadow-lg bg-white mr-2 ml-2 py-2 mb-2">
            <div className="grid grid-cols-2">
              <div className="">
                <h2 className="text-start ml-3 py-2">From: Puji</h2>
              </div>
              <div className="">
                <h2 className="text-end mr-3 py-2">juni 29, 2024 </h2>
              </div>
            </div>
            <p className="text-start ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              cupiditate.
            </p>
          </div>{" "} <div className="rounded-lg shadow-lg bg-white mr-2 ml-2 py-2 mb-2">
            <div className="grid grid-cols-2">
              <div className="">
                <h2 className="text-start ml-3 py-2">From: Puji</h2>
              </div>
              <div className="">
                <h2 className="text-end mr-3 py-2">juni 29, 2024 </h2>
              </div>
            </div>
            <p className="text-start ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              cupiditate.
            </p>
          </div>{" "} <div className="rounded-lg shadow-lg bg-white mr-2 ml-2 py-2 mb-2">
            <div className="grid grid-cols-2">
              <div className="">
                <h2 className="text-start ml-3 py-2">From: Puji</h2>
              </div>
              <div className="">
                <h2 className="text-end mr-3 py-2">juni 29, 2024 </h2>
              </div>
            </div>
            <p className="text-start ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              cupiditate.
            </p>
          </div>{" "}
          <div className="rounded-lg shadow-lg bg-white mr-2 ml-2 py-2 mb-2">
            <div className="grid grid-cols-2">
              <div className="">
                <h2 className="text-start ml-3 py-2">From: Puji</h2>
              </div>
              <div className="">
                <h2 className="text-end mr-3 py-2">juni 29, 2024 </h2>
              </div>
            </div>
            <p className="text-start ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              cupiditate.
            </p>
          </div>{" "}
          <div className="rounded-lg shadow-lg bg-white mr-2 ml-2 py-2 mb-2">
            <div className="grid grid-cols-2">
              <div className="">
                <h2 className="text-start ml-3 py-2">From: Puji</h2>
              </div>
              <div className="">
                <h2 className="text-end mr-3 py-2">juni 29, 2024 </h2>
              </div>
            </div>
            <p className="text-start ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              cupiditate.
            </p>
          </div>{" "}
        </div>
      </div>
        <div className="py-2">
          <button
            onClick={() => setShowModal(true)}
            className="border rounded-lg flex bg-gray-400 text-black py-2 px-4 mx-auto hover:bg-white"
          ><FaPenFancy className="mt-1 mr-2" />
            Tulis Ucapan
          </button>
        </div>
      <ModalUcapan isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="py-4 px-4 text-left">
          <h3>Pesan & Ucapan</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                name="name"
                className="border w-full py-2 px-2 rounded-md"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="mt-2">
              <label htmlFor="">Pesan dan Ucapan</label>
              <textarea
                type="text"
                name="pesan"
                className="border w-full py-2 px-2 rounded-md"
                value={pesan}
                onChange={handlePesan}
              />
            </div>
            <div className="py-2 flex flex-col">
              <button className="border px-2 py-2 place-self-end">Kirim</button>
            </div>
          </form>
        </div>
      </ModalUcapan>
    </div>
  );
}

export default Ucapan;
