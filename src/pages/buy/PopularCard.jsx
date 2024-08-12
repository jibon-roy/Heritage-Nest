import CardSlider from "../../components/actions/CardSlider";
import Section from "../../components/design/Section";

export default function PopularCard() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Section>
      <CardSlider data={data} />
    </Section>
  );
}
