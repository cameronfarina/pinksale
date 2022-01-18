import SectionHeading from "./Headings";

const Contact = () => {
  return (
    <div id="contact">
      {" "}
      <SectionHeading text="CONTACT" />
      <div className="text-lg" id="contact">
        <div className="max-w-screen-2xl mx-auto w-full px-4">
          <div className="flex items-center"></div>
          <div className="">
            <div className="mt-4 text-center flex justify-center">
              <p className="text-xl text-gray-400 mb-16 max-w-screen-md">
                We are here to answer any questions you have regarding our
                services. If you have any further questions, please message us
                on Telegram: @Alex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
