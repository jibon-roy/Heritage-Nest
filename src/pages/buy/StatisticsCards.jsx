import Section from "../../components/design/Section";

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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {statisticsCards.map((card, idx) => (
            <div
              key={idx}
              className={`card rounded-sm shadow-xl ${
                card.color === "blue" ? "bg-blue-100" : "bg-orange-200/70"
              }`}
            >
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
