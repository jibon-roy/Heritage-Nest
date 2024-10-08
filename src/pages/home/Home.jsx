import Banner from "./Banner";
import DualSection from "./DualSection";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import bg4 from "../../assets/images/bg4.jpg";
import bg5 from "../../assets/images/bg5.jpg";
import bg6 from "../../assets/images/bg6.jpg";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Banner />
      <DualSection
        heading={"Property Buying"}
        head={"Efficient and Transparent Home Buying Solutions"}
        image1Url={bg3}
        image2Url={bg2}
        paragraph={
          " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        imagePosition={"bottom"}
        col
      />
      <DualSection
        heading={"Property Buying"}
        head={"Efficient and Transparent Home Buying Solutions"}
        image1Url={bg5}
        image2Url={bg4}
        paragraph={
          " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        imagePosition={"top"}
        rowReverse
        col
      />
      <DualSection
        heading={"Property Buying"}
        head={"Efficient and Transparent Home Buying Solutions"}
        image1Url={bg1}
        image2Url={bg6}
        paragraph={
          " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        imagePosition={"bottom"}
        row
        col
      />
      <Services />
    </>
  );
}
