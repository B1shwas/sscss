import { contactInfoList } from "@/lib/constants/contactInfoLists";
import { ContactInfoItem } from "../NavbarAndFooter/SchoolDetailsHead";
import Form from "./Form";

const AdmissionForm = () => {
  return (
    <div className="bg-primary" id="admission">
      <div className="container py-6 text-white flex flex-col lg:flex-row gap-5 md:gap-10">
        <div className="py-6 space-y-4">
          <div className="space-y-2">
            <h4 className="uppercase text-xl font-medium">contact us</h4>
            <h1 className="text-title font-bold tracking-tighter">
              Admission Inquiry
            </h1>
            <p className="text-paragraph">
              Message us and we will reply you as soon as possible Please submit
              your information below and we will be in touch shortly.
            </p>
          </div>
          <div>
            {contactInfoList.map((info, index) => (
              <ContactInfoItem
                key={index}
                icon={info.icon}
                text={info.text}
                className="border-none mb-4 !text-2xl"
              />
            ))}
            <p className="mt-2 text-red-500">
              Please note: We only accept admissions from nursery to class 9.
            </p>
          </div>
        </div>
        <div className="py-6 w-[100%]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
