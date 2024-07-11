function Galery() {
  return (
    <div>
      <div className="rounded-lg shadow-lg py-4 text-center bg-gray-400 mr-2 ml-2">
        <h1 className="text-[25px] py-2">Galery</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 mr-8 ml-8 gap-3 mx-auto">
          <div className="">
            <img
              src="../../public/img/galery/galery5.jpg"
              alt="galery"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="">
            <img
              src="../../public/img/galery/galery4.jpg"
              alt="galery"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="">
            <img
              src="../../public/img/galery/galery3.jpg"
              alt="galery"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="">
            <img
              src="../../public/img/galery/galery2.jpg"
              alt="galery"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="">
            <img
              src="../../public/img/galery/galery1.jpg"
              alt="galery"
              className="md:ml-[104%] transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className=" ">
            <img
              src="../../public/img/galery/galery1.jpg"
              alt="galery"
              className="md:ml-[104%] transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galery;
