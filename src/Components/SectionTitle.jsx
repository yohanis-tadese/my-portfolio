import "./title.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className="title-of-any font-titleFont text-xl lg:text-3xl font-semibold flex text-center capitalize items-center -mb-6 md:mb-2">
      <span className="hidden md:inline-flex md:w-10 lg:w-12 h-[2.5px] bg-gray-700 mr-6"></span>
      {title}
      <span className="hidden md:inline-flex md:w-10 lg:w-12 h-[2.5px] bg-gray-700 ml-6"></span>
    </div>
  );
};

export default SectionTitle;
