import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
// icons
import { BiMessageRounded, BiLinkAlt } from "react-icons/bi";
import {
  BsCalendarDate,
  BsSpeedometer,
  BsFileEarmarkPerson,
} from "react-icons/bs";

const Sidebar = () => {
  const active = "p-4 shadow-lg text-white rounded-full  bg-[#289FFF]";
  return (
    <header className="w-auto h-screen bg-white shadow-md ">
      <nav className="flex flex-col items-center justify-between h-full text-gray-700">
        <div className="my-6">
          <Link href="/">
            <a>
              <img src="/healthex.jpg" alt="company-logo" />
            </a>
          </Link>
        </div>

        <div className="mt-6 mb-3">
          <Link href="/">
            <a>
              <img src="/profile.jpg" alt="profile-logo" />
            </a>
          </Link>
        </div>
        <div className="mt-10 space-y-8">
          <ActiveLink activeClassName={active} href="/">
            <a className="flex items-center min-w-full space-x-4">
              <BsSpeedometer size={30} />
              <p className="font-semibold">Dashboard</p>
            </a>
          </ActiveLink>

          <ActiveLink activeClassName={active} href="/calendar">
            <a className="flex items-center min-w-full space-x-4 ">
              <BsCalendarDate size={30} />
              <p className="font-semibold">Calendar</p>
            </a>
          </ActiveLink>

          <ActiveLink activeClassName={active} href="/messages">
            <a className="flex items-center min-w-full space-x-4">
              <BiMessageRounded size={30} />
              <p className="font-semibold">Messages</p>
              <span className="text-white bg-[#FE9948] rounded-full px-3 font-bold text-sm">
                6
              </span>
            </a>
          </ActiveLink>

          <ActiveLink activeClassName={active} href="/apointments">
            <a className="flex items-center min-w-full space-x-4 ">
              <BsFileEarmarkPerson size={30} />
              <p className="font-semibold">Apointments</p>
            </a>
          </ActiveLink>

          <ActiveLink activeClassName={active} href="/practices">
            <a className="flex items-center min-w-full space-x-4 ">
              <BiLinkAlt size={30} rotate={90} />
              <p className="font-semibold">Practice</p>
            </a>
          </ActiveLink>
        </div>
        {/* Logo */}
        <div className="mt-auto mb-8 text-center">
          <p class="font-bold">HEALTEX 2021</p>
          <p>lorem ipsu</p>
        </div>
      </nav>
    </header>
  );
};
export default Sidebar;
