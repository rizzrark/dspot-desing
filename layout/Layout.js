import Sidebar from "@/components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-3">
          <Sidebar />
        </div>

        <main className="col-start-3 col-end-13 px-10 py-6 text-gray-700">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
