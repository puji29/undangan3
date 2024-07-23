import { useEffect, useState } from "react";
import Akad from "./Akad";
import Resepsi from "./Resepsi";


function Rsvp() {
  const [showAkad, setShowAkad] = useState(true);
  const [showRespsi, setShowResepsi] = useState(false);
  const targetDate = new Date("2024-07-24T00:00:00"); // Tanggal target (24 Juli 2024)
  const now = new Date();
  const timeRemaining = Math.max(targetDate - now, 0) / 1000; // Waktu dalam detik

  const [countdown, setCountdown] = useState(timeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400); // 86400 detik dalam sehari
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return `${days} Hari ${hours} Jam ${minutes
      .toString()
      .padStart(2, "0")} Menit ${seconds.toString().padStart(2, "0")} Detik`;
  };

  const handleButton1 = () => {
    setShowAkad(true);
    setShowResepsi(false);
  };
  const handleButton2 = () => {
    setShowResepsi(true);
    setShowAkad(false);
  };

  return (
    <div className="max-h-screen mx-auto content-center text-center py-4 ">
      <h1 className="text-[25px] py-2 mt-5">Informasi Acara</h1>
      <div className="rounded-lg shadow-lg bg-gray-400 mr-2 ml-2">
        <div className="grid grid-cols-2">
          <div className="py-2 mt-2">
            <button
              onClick={handleButton1}
              className=" bg-black rounded-md text-white py-1 px-10 md:px-20"
            >
              Akad
            </button>
          </div>
          <div className="py-2 mt-2">
            <button
              onClick={handleButton2}
              className=" bg-black rounded-md text-white py-1 px-10 md:px-20"
            >
              Resepsi
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="rounded-lg shadow-lg bg-white py-1 px-3 mr-12 ml-14 ">
            {countdown > 0 ? (
              <p>{formatTime(countdown)}</p>
            ) : (
              <p>Acara telah selesai</p>
            )}
          </div>
          {showAkad ? <Akad /> : null}
          {showRespsi ? <Resepsi /> : null}
        </div>
      </div>
      
      
    </div>
  );
}

export default Rsvp;
