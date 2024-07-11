import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Couple() {
  return (
    <div className="content-center text-center py-10 ">
        <h1 className="text-[25px] md:py-2 md:text-[30px]">Assalamualaikum Warahmatullahi Wabarakatuh</h1>
        <p className="md:py-2">Dengan memohon rahmat dan ridho Allah SWT, Kami bermaksud mengundang Bapak / Ibu / Saudara(i) dalam rangkaian acara resepsi pernikahan putra-putri kami:</p>
        <div className="grid md:grid-cols-2 text-center py-4 mr-3 ml-3 md:mr-5 md:ml-5 gap-3">
            <div className=" outline-dashed rounded-lg shadow-md py-3">
                <img src="../../public/img/cowo.png" alt="cowok" className="w-[40%] mx-auto" />
                <h1 className="text-[23px] mt-2">Adi Putra S. Kom</h1>
                <h2>Putra</h2>
                <p>Bpk Lorem & Ibu Ipsum</p>
               <div className="flex  justify-center py-2 gap-1">
               <a href="#" target="_blank"><FaInstagram /></a>
                <a href="" target="_blank"><FaLinkedin /></a>
               </div>
            </div>
            <div className=" outline-dashed rounded-lg shadow-md py-3">
                <img src="../../public/img/cewe.png" alt="cowok" className="w-[40%] mx-auto" />
                <h1 className="text-[23px] mt-2">Ayu Dwi S. Kom</h1>
                <h2>Putri</h2>
                <p>Bpk Ipsum & Ibu Lorem </p>
               <div className="flex  justify-center py-2 gap-1">
               <a href="#" target="_blank"><FaInstagram /></a>
                <a href="#" target="_blank"><FaLinkedin /></a>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Couple