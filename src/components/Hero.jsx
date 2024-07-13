import { useEffect, useState } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ModalRsvp from "./ModalRsvp";
import Navbar from "./Navbar";
import Quotes from "./Quotes";
import Couple from "./Couple";
import Story from "./Story";
import Galery from "./Galery";
import Rsvp from "./Rsvp";
import Maps from "./Maps";
import Ucapan from "./Ucapan"
import Gifts from "./Gifts";
import Footer from "./Footer";
function Hero() {
  let token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [status, setStatus] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

  const handleName = (e)=> {
    setName(e.target.value)
  }

  const handleJumlah = (e)=> {
    setJumlah(e.target.value)
  }
  const handleStatus = (e)=> {
    setStatus(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(name)
    console.log(jumlah)
    console.log(status)
  }



  return (
      <div className="">
      <div className="w-screen bg-[url('./public/img/bg1.jpg')] h-screen bg-cover bg-center content-center text-white ">
        <Navbar  />
      <div className="text-center mx-auto mt-20">
        <h2 className="text-[20px] md:text-[50px] font-semibold py-2 ">Undangan Pernikahan</h2>
        <h1 className="mx-auto text-[40px] font-semibold py-2 md:text-[50px]">
          Adi Putra S. Kom <span className="block">&</span> Ayu Dwi S. Kom
        </h1>
        <p className="font-bold text-xl py-2 md:text-[30px]">Minggu, 21 Juli 2024</p>
        <div className="py-2 ">
          <button
            onClick={() => setShowModal(true)}
            className=" border rounded-lg py-2 px-2 shadow-lg mb-5 flex items-center mx-auto hover:animate-wiggle md:text-[20px]"
          >
            <BsCalendarCheck className="mr-2 mb-1" />
            Reservasi
          </button>
        </div>
        <ModalRsvp isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="py-6 px-6 text-left">
            <h3>Reservasi</h3>
            <p>harap isi sebelum tanggal 21 Juli 2024</p>
            <form onSubmit={handleSubmit}>
              <div className="mt-2">
                <label htmlFor="">Nama</label>
                <input type="text" name="name" className="border w-full py-2 px-2 rounded-md" value={name} onChange={handleName} />
              </div>
              <div className="mt-2">
                <label htmlFor="">Jumlah Orang</label>
                <input type="number" name="jumlah" min="1" max="2" className="border w-full py-2 px-2 rounded-md" placeholder="maximal 2 orang" value={jumlah} onChange={handleJumlah} />
              </div>
              <div className="mt-2">
                <label htmlFor="">Konfirmasi Kehadiran</label>
                <select  name="status" className="border w-full bg-white py-2 px-2 rounded-md" value={status} onChange={handleStatus}>
                    <option value="" className="w-full">Pilih salah satu</option>
                    <option value="hadir">Hadir</option>
                    <option value="tidak hadir">Tidak Hadir</option>
                </select>
              </div>

              <div className="py-2 flex flex-col">
                <button className="border px-2 py-2 place-self-end">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </ModalRsvp>
      </div>
    </div>
    <Quotes />
    <Couple />
    <Story />
    <Galery />
    <Rsvp />
    <Maps />
    <Ucapan />
    <Gifts />
    <Footer />

    </div>
  );
}

export default Hero;
