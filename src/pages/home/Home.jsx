import Banner from "./Banner";
import DualSection from "./DualSection";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";

export default function Home() {
  return (
    <>
      <Banner />
      <DualSection
        heading={"Property Buying"}
        head={"Efficient and Transparent Home Buying Solutions"}
        image1Url={bg1}
        image2Url={bg2}
        paragraph={
          " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        imagePosition={"top"}
      />
      <DualSection
        heading={"Property Buying"}
        head={"Efficient and Transparent Home Buying Solutions"}
        image1Url={bg1}
        image2Url={bg2}
        paragraph={
          " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        imagePosition={"top"}
        rowReverse
      />
    </>
  );
}
