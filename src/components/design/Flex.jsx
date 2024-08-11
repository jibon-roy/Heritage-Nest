import Section from "./Section";

export default function Flex({ children, className, background }) {
  return (
    <Section background={background ? background : ""}>
      <div className={`flex ${className && className}`}>{children}</div>;
    </Section>
  );
}
