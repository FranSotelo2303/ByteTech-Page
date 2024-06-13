import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";

const ContactInfo = () => {
  return (
    <div className="bg-[#013c63] col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full content-center justify-center">
      <h5 className="text-text-darkGray flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> <a href="mailto:julianagm@unicauca.edu.co">julianagm@unicauca.edu.co</a>
      </h5>
      <h5 className="text-text-darkGray flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> <p>+57 305 2466274</p>
      </h5>
    </div>
  );
};

export default ContactInfo;
