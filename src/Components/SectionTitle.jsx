import "./title.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className="title-of-any font-titleFont text-2xl font-semibold flex items-center">
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </div>
  );
};

export default SectionTitle;
