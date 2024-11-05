import { IoGlobe } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";

const SchoolNumbers = () => {
  const schoolNumbers = [
    {
      Icon: IoGlobe,
      number: "18",
      title: "Full time faculty",
    },
    {
      Icon: PiStudentFill,
      number: "350",
      title: "Current Enrollment",
    },
    {
      Icon: PiChalkboardTeacherFill,
      number: "20:1",
      title: "Teacher/Student Ratio",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {schoolNumbers.map((number, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-sm sm:bg-transparent col-span-1 sm:justify-center flex p-2 max-sm:w-full"
        >
          <div className="flex gap-4 border-b-2 sm:border-primary pb-4 w-fit">
            <number.Icon className="text-4xl text-primary" />
            <div>
              <p className="text-subtitle font-semibold">{number.number}</p>
              <span>{number.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolNumbers;
