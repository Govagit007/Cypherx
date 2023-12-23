import { useState } from "react";
import { IoMoon } from "react-icons/io5";

const Header = ({ setGroup, setOrder, setDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter1Change = (e) => {
    const data = e.target.value;
    setGroup(data);
    localStorage.setItem("Grouping", data);
  };

  const handleFilter2Change = (e) => {
    const data = e.target.value;
    setOrder(data);
    localStorage.setItem("Ordering", data);
  };

  return (
    <div className="flex flex-row bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-10 py-3">
      <div
        className="absolute right-16 top-1/8"
        onClick={() => setDarkMode(!darkMode)}
      >
        <IoMoon />
      </div>
      <div>
        {isOpen && (
          <div className="absolute top-16 flex flex-col bg-white rounded-xl shadow dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-10 gap-4 -translate-x-3">
            <div className="flex gap-10 ">
              <h1>Grouping</h1>
              <select
                onChange={handleFilter1Change}
                className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-2"
              >
                <option value="priority">Priority</option>
                <option value="users">Users</option>
                <option value="status">Status</option>
              </select>
            </div>
            <div className="flex gap-10">
              <h1>Ordering</h1>
              <select
                onChange={handleFilter2Change}
                className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-2"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-slate-400 text-slate-800" : "bg-slate-100 text-slate-800"
        } px-3 py-1 rounded`}
      >
        {" "}
        {`${isOpen ? "Close" : "Open"} Filter`}
      </button>
    </div>
  );
};

export default Header;
