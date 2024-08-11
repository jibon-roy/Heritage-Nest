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
      <div className={`container ${className}`}>{children}</div>
    </section>
  );
}
