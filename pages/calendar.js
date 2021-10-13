import MainCalendar from "@/components/MainCalendar";
import Head from "next/head";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
const Calendar = () => {
  return (
    <>
      <Head>
        <title>Calendar</title>
        <link
          rel="shortcut icon"
          href="./public/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <section>
        <div className="flex items-center justify-between">
          {/* left */}
          <div>
            <p className="text-2xl font-semibold ">
              Events
              <span className="bg-[#289FFF] ml-3 text-white px-2 text-lg rounded-full">
                26
              </span>
            </p>
          </div>
          {/* rigth */}
          <div className="flex space-x-4">
            <div>
              <p className="font-semibold text-normal ">
                Remainders
                <span className="bg-[#FE9948] ml-3 text-white px-2 text-sm rounded-full">
                  19
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-normal ">
                Apointments
                <span className="bg-[#289FFF] ml-3 text-white px-2 text-sm rounded-full">
                  12
                </span>
              </p>
            </div>

            <p>/</p>
            <div>
              <p className="font-semibold text-normal ">
                Events
                <span className="bg-[#289FFF] ml-3 text-white px-2 text-sm rounded-full inline-block relative">
                  12
                  <span class="animate-ping absolute top-1 right-0.5 block h-[5px] w-[5px] rounded-full ring-2 ring-green-400 bg-green-600"></span>
                </span>
              </p>
            </div>
            <p>/</p>
            <div>
              <p className="font-semibold text-normal ">
                With out state
                <span className="bg-[#289FFF] ml-3 text-white px-2 text-sm rounded-full inline-block relative">
                  12
                  <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <p className="text-3xl font-semibold">October </p>
            <p className="ml-4 text-3xl">
              13 - 10, <span className="text-xl text-gray-500">2021</span>{" "}
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#344858] text-white px-4 py-1 shadow-md rounded-full mr-4">
              Today
            </div>
            <div className="bg-[#289FFF] text-white rounded-l-full px-4">
              <IoMdArrowDropleft size={32} />
            </div>
            <div className="bg-[#289FFF] text-white rounded-r-full ml-1 px-4">
              <IoMdArrowDropright size={32} />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <MainCalendar />
        </div>
      </section>
    </>
  );
};

export default Calendar;
