import Button from "../../components/actions/Button";
import Flex from "../../components/design/Flex";
import Heading from "./../../components/design/Heading";

export default function DualSection() {
  return (
    <>
      <Flex>
        <div className="lg:w-1/2">
          <Heading heading={"Property Buying"}>
            Efficient and Transparent Home Buying Solutions
          </Heading>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Button type={"secondery"}></Button>
        </div>
      </Flex>
    </>
  );
}
