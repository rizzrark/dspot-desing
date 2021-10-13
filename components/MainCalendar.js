import { FcClock } from "react-icons/fc";
const cal = [
  {
    time: "8 am",
  },
  {
    time: "8:30 am",
  },
  {
    time: "9 am",
  },
  {
    time: "9:30 am",
  },
  {
    time: "10 am",
  },
  {
    time: "10:30 am",
  },
  {
    time: "11:00 am",
  },
];

export default function MainCalendarl() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 rounded-lg shadow">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="text-xl ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    <FcClock size={32} />
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Monday
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Tuesday
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Wednesday
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Thursday
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Friday
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Saturday
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Sunday
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cal.map((data) => (
                  <tr key={data.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-blue-500">{data.time}</div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900"></div>
                          <div className="text-sm text-gray-500"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 ">
                      <div className="text-sm text-gray-900">{data.title}</div>
                      <div className="text-sm text-gray-500"></div>
                    </td>
                    <td className="px-6 py-4 ">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"></span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"></td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      ></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
