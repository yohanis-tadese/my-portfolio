import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import "./archive.scss";

const ArchiveCard = ({ title, des, listItem, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="archivecard w-full h-80 rounded-lg bg-[#fff] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group ">
        <div
          style={{ color: "#0794C9" }}
          className="archiveicone flex justify-between items-center"
        >
          <FaRegFolder className="text-4xl " />
          <RxOpenInNewWindow className="text-2xl " />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide ">
            {title}
          </h2>
          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
