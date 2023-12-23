import { FaCircle } from "react-icons/fa6";

const Card = ({
  group,
  order,
  id,
  title,
  priority,
  name,
  icon,
  tag,
  status,
}) => {
  return (
    <div className="w-[270px] bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow rounded-xl  gap-2 flex flex-col justify-center items-start p-3 pb-4">
      <div className="flex justify-between w-full ">
        <h1>{id}</h1>
        {group !== "users" ? <p>{name}</p> : null}
      </div>
      <div className="flex gap-2 items-center justify-center">
        {group !== "status" ? <div>{status.icon}</div> : null}
        <p className="">{title}</p>
      </div>

      <div className="flex gap-2 justify-center items-center">
        {group !== "priority" ? <div>{icon}</div> : null}

        <p className="text-slate-400 border px-2 flex gap-2 justify-center items-center">
          <FaCircle />
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Card;
