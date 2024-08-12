import CardSlider from "../../components/actions/CardSlider";
import Heading from "../../components/design/Heading";
import Section from "../../components/design/Section";

export default function NewListedProperties() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Section>
        <Heading left={true} link={"See all Property"}>
          New Listed Properties
        </Heading>
        <CardSlider data={data} />
      </Section>
    </>
  );
}
