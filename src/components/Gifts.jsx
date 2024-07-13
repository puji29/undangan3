import { useState } from "react"
import ModalRsvp from "./ModalRsvp";
import { IoGiftSharp } from "react-icons/io5";

function Gifts() {
  const [showModal,setShowModal] = useState(false)

  const clickToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(()=>{
      alert("Teks Berhasil disalin")
    })
    .catch((error)=>{
      console.error('Gagal menyalin teks', error)
    })
  }
  const teks1 = "1234567890"
  const teks2 = "0987654321"
  return (
    <div className="text-center" >
        <h1 className="text-[26px] py-2">Gifts</h1>
        <p>Doa dan restu Anda adalah hadiah terbaik dalam menapaki lembaran baru perjalanan hidup kami.</p>
        <div className="py-2">
        <button
          onClick={() => setShowModal(true)}
          className="border flex rounded-lg bg-gray-400 text-black py-2 px-5 mx-auto hover:animate-wiggle hover:bg-white"
        ><IoGiftSharp  className=" mr-1 mt-1" />
          Kirim Gift
        </button>
      </div>
      <ModalRsvp isVisible={showModal} onClose={() => setShowModal(false)}>
        <h2 className="font-semibold text-start mt-2 px-2">Kirim Gift</h2>
        <p className="text-start px-2">Untuk Adi Putra S. Kom dan Ayu Dwi S. Kom</p>
        <div className="h-[380px] py-2 overflow-y-scroll ">
          <div className="w-100 h-40 content-center scrollbar-thin scrollbar-webkit">
          <div className="justify-items-center mx-auto py-2 ">
          <img src="../../public/img/barcode.gif" alt="pp" className="border w-[50%] mx-auto" />
          <p className="py-2">BCA a.n Adi Putra S. Kom</p>
          <p>1234567890</p>
          <button onClick={()=>clickToClipboard(teks1)} className="border rounded-lg py-1 px-5">Salin</button>
          </div>
          <div className="justify-items-center mx-auto py-2 ">
          <p className="py-2">BRI a.n Ayu Dwi S. Kom</p>
          <p>0987654321</p>
          <button onClick={()=>clickToClipboard(teks2)} className="border rounded-lg py-1 px-5">Salin</button>
          </div>
          </div>
        </div>
      </ModalRsvp>
    </div>
  )
}

export default Gifts