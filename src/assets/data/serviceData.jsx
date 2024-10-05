import { FaServer, FaDatabase, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const serviceData = [
  {
    icon: <FaReact />,
    title: "Frontend Development with React",
    description:
      "I build dynamic and highly interactive user interfaces using React.js, ensuring seamless performance, modularity, and scalability for your applications.",
    color: "text-blue-500",
  },
  {
    icon: <FaServer />,
    title: "Backend API Development",
    description:
      "I create robust RESTful and GraphQL APIs using Node.js and Express, delivering scalable and secure server-side solutions that integrate seamlessly with your frontend.",
    color: "text-green-600",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design & Management",
    description:
      "I specialize in designing and managing database architectures using MongoDB, MySQL, and PostgreSQL. From schema design and data modeling to optimization and query performance.",
    color: "text-yellow-600",
  },
  {
    icon: <SiJavascript />,
    title: "Fullstack JavaScript Solutions",
    description:
      "Using JavaScript across the entire stack (React, Node.js, and MongoDB), I deliver consistent, maintainable, and high-performance web applications for your business needs.",
    color: "text-orange-500",
  },
];

export default serviceData;
