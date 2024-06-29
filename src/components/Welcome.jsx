import { Link } from "react-router-dom";
import { BsEnvelopeOpen } from "react-icons/bs";
function Welcome() {
  const cek = () => {
    localStorage.setItem("token", "ini");
  };
  return (
    <>
      <div className="w-screen bg-[url('./public/img/bg.jpg')] h-screen bg-cover bg-center content-center ">
        <div className="rounded-xl shadow-lg backdrop-blur-sm w-[80%] sm:w-[50%] text-center mx-auto">
          <h2 className="text-[20px] font-semibold py-2 ">
            Undangan Pernikahan
          </h2>
          <h1 className="mx-auto text-[40px] font-semibold py-2">
            Adi Putra S. Kom <span className="block">&</span> Ayu Dwi S. Kom
          </h1>
          <div className="py-2 ">
            <Link to="/hero">
              <button
                onClick={cek}
                className=" border rounded-lg py-2 px-2 shadow-lg mb-5 flex items-center mx-auto hover:animate-wiggle"
              >
                <BsEnvelopeOpen className="mr-2 mb-1" />
                Buka Undangan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
