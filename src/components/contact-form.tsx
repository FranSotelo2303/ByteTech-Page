import React from "react";
import Button from "./button.tsx";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <form className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            className="col-span-1 p-4 rounded-xl border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-lightGray"
            placeholder="¿Quien eres?"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="col-span-1 p-4 rounded-xl border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-lightGray"
            placeholder="Tu email"
          />
        </label>
        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            className="col-span-1 p-4 rounded-xl border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-lightGray"
            placeholder="¿Que servicio necesitas?"
          />
        </label>
        <label htmlFor="phone">
          <input
            type="number"
            name="phone"
            className="col-span-1 p-4 rounded-xl border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-lightGray"
            placeholder="Tu telefono"
          />
        </label>
        <textarea
          name="message"
          className="col-span-2 p-4 rounded-xl border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-lightGray"
          cols={30}
          rows={10}
          placeholder="Cuentanos que necesitas..."
        ></textarea>

        <div className="w-full flex justify-end col-span-2">
          <Button text="Enviar" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
