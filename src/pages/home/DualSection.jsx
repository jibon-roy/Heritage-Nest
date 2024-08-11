import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../components/actions/Button";
import Flex from "../../components/design/Flex";
import Heading from "./../../components/design/Heading";
import ImageContainer from "../../components/design/ImageContainer";

export default function DualSection({
  image1Url,
  image2Url,
  imagePosition,
  heading,
  head,
  paragraph,
  col,
  colReverse,
  row,
  rowReverse,
}) {
  return (
    <>
      <Flex
        col={col ? col : ""}
        row={row ? row : ""}
        rowReverse={rowReverse ? rowReverse : ""}
        colReverse={colReverse ? colReverse : ""}
        className={"my-20 justify-between"}
      >
        <div className="lg:w-1/2 max-w-lg">
          <ImageContainer
            image1Url={image1Url}
            image2Url={image2Url}
            imagePosition={imagePosition}
          ></ImageContainer>
        </div>
        <div className="lg:w-1/2 max-w-lg">
          <Heading heading={heading}>{head}</Heading>
          <p className="text-shadow mt-7 mb-10">{paragraph}</p>
          <Button type={"primary"}>
            <HiMagnifyingGlass className="text-2xl" />
            Find Property
          </Button>
        </div>
      </Flex>
    </>
  );
}
