function Maps() {
  return (
    <div className="rounded-lg shadow-lg bg-gray-400 text-center  items-center content-center py-2  mr-2 ml-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.491267063233!2d112.60024726977537!3d-7.960368999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827d27276d9b%3A0xc90abb7f889cd70d!2sGedung%20Graha%20Tirta!5e0!3m2!1sid!2sid!4v1720691898814!5m2!1sid!2sid"
        // width="600" height="450"
        className="mx-auto rounded-lg border w-[90%] h-[300px]  md:w-[98%]  py-2"
        style={{ border:1 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="py-2"><a href="https://maps.app.goo.gl/cwF7DvFXBWAKW56Q6" className="border rounded-lg py-2 px-2 hover:bg-white hover:cursor-pointer mb-3" target="_blank">Petunjuk Arah</a ></div>
    </div>
  );
}

export default Maps;
