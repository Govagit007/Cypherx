import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuSignalLow } from "react-icons/lu";
import { LuSignalMedium } from "react-icons/lu";
import { LuSignalHigh } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Main = ({ group, order }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const status = [
    { name: "Backlog", icon: <LuCircleDashed /> },
    { name: "Todo", icon: <FaRegCircle /> },
    { name: "In progress", icon: <MdOutlineIncompleteCircle /> },
    { name: "Done", icon: <FaCheckCircle /> },
    { name: "Cancelled", icon: <MdCancel /> },
  ];

  const priorityData = [
    { name: "No Priority", icon: <BsThreeDots /> },
    { name: "Low", icon: <LuSignalLow /> },
    { name: "Medium", icon: <LuSignalMedium /> },
    { name: "High", icon: <LuSignalHigh /> },
    { name: "Urgent", icon: <IoWarningOutline /> },
  ];

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
    );

    setTickets(data.tickets);
    console.log(data);
    setUsers(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300 flex gap-10 flex-col min-h-screen">
      {group === "priority" && (
        <div className="flex justify-around">
          {priorityData.map((p, i) => {
            let arr = tickets.filter((t) => t.priority === i);
            console.log(arr);
            if (order === "title") {
              arr = arr.sort((a, b) => a.title.localeCompare(b.title));
            }
            return (
              <div key={i} className="">
                <div className="flex justify-center items-center gap-3">
                  {p.icon} <span>{p.name}</span>{" "}
                </div>
                <div className="flex  flex-col gap-4">
                  {arr.map((a, j) => {
                    const user = users.find((u) => u.id === a.userId);
                    const st = status.find((s) => s.name === a.status);
                    return (
                      <Card
                        key={j}
                        group={group}
                        order={order}
                        id={a.id}
                        title={a.title}
                        priority={a.priority}
                        name={user.name}
                        icon={p.icon}
                        tag={a.tag}
                        status={st}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {group === "users" && (
        <div className="flex gap-4">
          {users.map((u, i) => {
            let arr = tickets.filter((t) => t.userId === u.id);
            if (order === "title") {
              arr = arr.sort((a, b) => a.title.localeCompare(b.title));
              console.log(arr);
            }
            return (
              <div key={i}>
                <div>
                  {u.name}
                  {u.id}
                </div>
                <div className="flex flex-col gap-8">
                  {arr.map((a, j) => {
                    const prior = priorityData.find((p, k) => k === a.priority);
                    const st = status.find((s) => s.name === a.status);
                    return (
                      <Card
                        key={j}
                        group={group}
                        order={order}
                        id={a.id}
                        title={a.title}
                        priority={a.priority}
                        name={u.name}
                        icon={prior.icon}
                        tag={a.tag}
                        status={st}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {group === "status" && (
        <div className="flex gap-4">
          {status.map((s, i) => {
            let arr = tickets.filter((t) => t.status === s.name);
            if (order === "title") {
              arr = arr.sort((a, b) => a.title.localeCompare(b.title));
            }
            return (
              <div key={i}>
                <div>
                  {s.name}
                  {s.icon}
                </div>
                <div className="flex flex-col gap-4">
                  {arr.map((a, j) => {
                    const user = users.find((u) => u.id === a.userId);
                    const prior = priorityData.find((p, k) => k === a.priority);
                    return (
                      <Card
                        key={j}
                        group={group}
                        order={order}
                        id={a.id}
                        title={a.title}
                        priority={a.priority}
                        name={user.name}
                        icon={prior.icon}
                        tag={a.tag}
                        status={s}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
