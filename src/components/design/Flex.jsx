import Section from "./Section";

export default function Flex({
  children,
  className,
  background,
  col,
  colReverse,
  row,
  rowReverse,
}) {
  return (
    <Section background={background ? background : ""}>
      <div
        className={`flex max-lg:gap-20 max-lg:items-center ${
          className && className
        } 
         ${col && "max-lg:flex-col-reverse"} 
         ${colReverse && "max-lg:flex-col-reverse"}
         ${row && "lg:flex-row"}
         ${rowReverse && "lg:flex-row-reverse"}
                  `}
      >
        {children}
      </div>
      ;
    </Section>
  );
}
