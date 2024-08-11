import Heading from "../../components/design/Heading";
import Section from "../../components/design/Section";
import { RiHome6Line } from "react-icons/ri";

export default function Services() {
  const serviceCard = [
    {
      title: "Advanced Property Search",
      paragraph:
        "Effortlessly find your dream property with advanced search filters.",
    },
    {
      title: "Virtual Tours and Multimedia",
      paragraph:
        "Explore properties through immersive virtual tours and HD photos.",
    },
    {
      title: "Secure Online Transactions",
      paragraph:
        "Ensure secure transactions and e-sign documents seamlessly online.",
    },
  ];
  return (
    <>
      <Section className={"my-20"}>
        <Heading center>Our Services</Heading>
        <div className="flex gap-6">
          {serviceCard.map((card, idx) => (
            <div
              key={idx}
              className="card rounded-md bg-blue-50 font-montserrat"
            >
              <div className="p-4 gap-4 flex">
                <div>
                  <div className="bg-orange-500 h-10 w-10 rounded-md text-2xl text-white flex justify-center items-center">
                    <RiHome6Line />
                  </div>
                </div>
                <div>
                  <h2 className="card-title mb-4">{card.title}</h2>
                  <p>{card.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
