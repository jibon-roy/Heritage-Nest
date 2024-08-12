import SearchBox from "../../components/actions/SearchBox";
import LandingCard from "../../components/design/LandingCard";
import TestimonialSection from "../../components/design/Testimonial";
import NewListedProperties from "./NewListedProperties";
import PopularCard from "./PopularCard";
import StatisticsCards from "./StatisticsCards";

export default function Buy() {
  return (
    <>
      <SearchBox />
      <StatisticsCards />
      <PopularCard />
      <NewListedProperties />
      <TestimonialSection />
      <LandingCard />
    </>
  );
}
