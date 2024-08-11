export default function Heading({ heading, children, center }) {
  if (center)
    return (
      <div className="text-4xl mx-auto text-center font-bold">{children}</div>
    );
  return (
    <div className="max-w-lg">
      <div className="text-orange-500 flex items-center gap-3 text-lg font-semibold">
        <div className="w-10 h-1 bg-orange-500"></div>
        {heading && heading}
      </div>
      <div className="text-4xl font-bold">{children}</div>
    </div>
  );
}
