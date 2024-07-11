import { useState } from "react";
function Story() {
  const [buttonTexts, setButtonTexts] = useState([
    "2015",
    "2018",
    "2021",
    "2024",
   
  ]);

   

  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    const newButtonTexts = [
        "Perkenalan",
        "Jadian",
        "Lamaran",
        "Menikah",


    ];
    newButtonTexts[index] = ` ${index + 1} `;
    setButtonTexts(newButtonTexts);
  };

  const paragraphs = [
    "Awal pertemuan Ayu & Adi yaitu di SMA tahun 2015, Adi sebagai kakak kelas dan Ayu adik kelas. Mereka berkenalan saat OSIS, kebetulan mereka bedua sama-sama anak OSIS. Namun, hubungan mereka berjalan begitu saja tanpa ada PDKT bahkan bisa dibilang jarang bertegur sapa karena memang berbeda divisi.",
    "Lanjut pada tahun 2018 ternyata Fidy memilih merantau untuk menempuh pendidikan ke Jakarta dan tanpa disangka-sangka kembali bertemu dengan Aldi di kampus yang sama. Singkat cerita Adi yang ternyata tertarik dengan Fidy pun kemudian mulai pendekatan di tahun 2019 dengan mengajak belajar bareng, jalan, dsb yang membuat Ayu membuka hati untuk Aldi.",
    "Pada tahun 2021, Adi merencanakan momen yang sangat istimewa untuk melamar Ayu. Setelah berbulan-bulan mempersiapkan semuanya, dia akhirnya membawa keluarga besar untuk bertemu dengan keluarga Ayu. Suasana haru dan tegang terasa di udara saat Adi dengan penuh keyakinan mengucapkan kata-kata cinta dan niatnya untuk menjalin ikatan yang lebih serius dengan Ayu.",
    "Akhirnya pada tahun 2024, Ayu dan Adi memutuskan untuk mengikat janji suci dalam pernikahan. Mereka telah melewati banyak perjalanan bersama, dari pertemuan pertama hingga momen melamar yang penuh haru. Ayu dan Adi adalah dua orang yang berbeda, tetapi cinta mereka mengatasi segala perbedaan.",
    
  ];
  return (
    <div className="content-center text-center py-10 ">
      
      <div className=" rounded-lg shadow-lg bg-gray-400 mr-2 ml-2 md:mr-10 md:ml-10">
       
          <div className=" text-center ">
          <h1 className="py-2 text-[25px]">Our Story</h1>
          </div>
          
        
        <hr />
        <p className={`mt-4 mr-2 ml-2 ${selectedButton !== null ? "Awal pertemuan Ayu & Adi yaitu di SMA tahun 2015, Adi sebagai kakak kelas dan Ayu adik kelas. Mereka berkenalan saat OSIS, kebetulan mereka bedua sama-sama anak OSIS. Namun, hubungan mereka berjalan begitu saja tanpa ada PDKT bahkan bisa dibilang jarang bertegur sapa karena memang berbeda divisi." : "hidden"}`}>
          {paragraphs[selectedButton]}
        </p>
        <hr />
        <div className="">
          {buttonTexts.map((text, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={` border px-4 py-2 rounded mr-3 mb-2 mt-2 ${
                selectedButton === index ? "hidden" : ""
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
