import CardSlider from "../../components/actions/CardSlider";
import Loading from "../../components/common/Loading";
import Heading from "../../components/design/Heading";
import Section from "../../components/design/Section";
import useLoadProperties from "./../../lib/hooks/admin/useLoadProperties";

export default function PopularCard() {
  const { properties, isLoading } = useLoadProperties();
  // const data = properties?.slice(0, 5);
  const data = properties?.slice(0, 6);
  // console.log(properties?.slice(0, 5));
  if (isLoading) return;
  <Loading className={isLoading ? "block" : "hidden"} />;
  return (
    <Section>
      <Heading left={true} link={"See all Property"}>
        Popular Properties
      </Heading>
      <CardSlider data={data} />
    </Section>
  );
}
