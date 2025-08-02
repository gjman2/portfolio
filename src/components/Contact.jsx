import contactConfig from "../data/contactConfig.js";

export default function Contact() {
  return (
    <section className="flex flex-col bg-primary px-5 py-32" id="contact">
      <div className="flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold border-b-4 mt-5 mb-5 w-[140px]">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me.
        </p>
        {contactConfig.contacts.map((item, index) => {
          return (
            <p key={index} className="py-2">
              <span className="font-bold">{item.type}</span> {item.value}
            </p>
          );
        })}
      </div>
    </section>
  );
}
