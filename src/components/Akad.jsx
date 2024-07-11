function Akad({handleClick}) {
  return (
    <>
    <div className="fade-left grid grid-cols-2 py-4">
      <div className="">
        <h1 className="text-[25px]">Tanggal</h1>
        <p className="mt-2">21 Juli 2024</p>
      </div>
      <div className="">
        <h1 className="text-[25px]">Waktu</h1>
        <p className="mt-2">08.00</p>
      </div>
      
    </div>
    <hr className="fade-left text-black mr-12 ml-14" />
          <p className="fade-left py-2 mr-12 ml-14">
            Jl. Bend. Sengguruh No.32, Sumbersari, Kec. Lowokwaru, Kota Malang,
            Jawa Timur 65145
          </p>
          <button className="fade-left border rounded-lg py-1 px-20 hover:bg-white cursor-pointer shadow-lg mb-2">
            Simpan tanggal
          </button>
    </>
    
  );
}

export default Akad;
