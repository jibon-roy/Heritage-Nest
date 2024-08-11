export default function Section({
  background,
  style,
  className,
  sectionClass,
  children,
}) {
  return (
    <section
      style={{ background: background, ...style }}
      className={sectionClass}
    >
      <div className={`container px-2 md:px-10 lg:px-20  ${className}`}>
        {children}
      </div>
    </section>
  );
}
