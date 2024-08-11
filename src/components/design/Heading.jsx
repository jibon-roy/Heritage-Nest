export default function Heading({ heading, children, center, className }) {
  if (center)
    return (
      <div
        className={`text-4xl mx-auto mb-16 text-center font-bold ${
          className && className
        }`}
      >
        {children}
      </div>
    );
  return (
    <div className={`max-w-lg ${className && className}`}>
      <div className="text-orange-500 flex items-center gap-3 text-lg font-semibold">
        <div className="w-10 h-1 bg-orange-500"></div>
        {heading && heading}
      </div>
      <div className="text-4xl font-bold">{children}</div>
    </div>
  );
}
