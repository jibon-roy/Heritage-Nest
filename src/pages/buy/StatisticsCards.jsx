import { Link } from "react-router-dom";
import Section from "../../components/design/Section";
import { BsArrowDownCircle } from "react-icons/bs";

export default function StatisticsCards() {
  const statisticsCards = [
    {
      number: 2,
      disc: "New Flat Listed",
      route: "/",
      color: "orange",
    },
    {
      number: 2,
      disc: "New Flat Listed",
      route: "/",
      color: "blue",
    },
    {
      number: 2,
      disc: "New Flat Listed",
      route: "/",
      color: "orange",
    },
    {
      number: 2,
      disc: "New Flat Listed",
      route: "/",
      color: "blue",
    },
  ];
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-6 my-20 sm:grid-cols-2 md:grid-cols-4">
          {statisticsCards.map((card, idx) => (
            <div
              key={idx}
              className={`card rounded-sm ${
                card.color === "blue" ? "bg-blue-100" : "bg-orange-100"
              }`}
            >
              <div className="card-body p-6">
                <h2
                  className={`card-title text-4xl ${
                    card.color === "blue" ? "text-blue-800" : "text-orange-700"
                  }`}
                >
                  {card.number}k+
                </h2>
                <p className="font-medium mb-6">{card.disc}</p>
                <div>
                  <Link
                    to={"/"}
                    className={`underline flex font-medium justify-between items-center ${
                      card.color === "blue"
                        ? "text-blue-600"
                        : "text-orange-500"
                    }`}
                  >
                    View all
                    <BsArrowDownCircle className="text-3xl " />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
