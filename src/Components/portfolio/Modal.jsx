import { FaArrowAltCircleRight } from "react-icons/fa";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.description1}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Project Details:</h3>
          <ul className="text-sm leading-relaxed list-disc pl-6">
            {project.details.map((detail, index) => (
              <li key={index} className="flex items-center">
                <FaArrowAltCircleRight className="mr-2 text-textroyalBlue" />
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
          <ul className="text-sm flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="p-3 bg-gray-200 rounded-md shadow hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="dotted-border mb-4 p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform"
            >
              <h3 className="text-lg font-semibold mb-4">{image.title}</h3>
              <p className="text-sm leading-relaxed mb-2">
                {image.description}
              </p>
              <img
                src={image.src}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mt-4">
          For more details and insights about this project, please explore the
          links below. You can view the source code on GitHub or check out the
          live preview.
        </p>

        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}
          {project.link && (
            <a
              className="px-4 py-2 border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
