import { Link } from "react-router-dom";

export default function Heading({
  heading,
  children,
  center,
  className,
  left,
  link,
  route,
}) {
  if (left) {
    return (
      <div className="flex my-5 justify-between items-center">
        <div className={`text-4xl font-bold ${className && className}`}>
          {children}
        </div>
        <Link to={route ? route : "/"}>
          <div className="text-xl font-semibold hover:text-blue-500 underline text-blue-600">
            {link}
          </div>
        </Link>
      </div>
    );
  }
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
        {heading && <div className="w-10 h-1 bg-orange-500"></div>}
        {heading && heading}
      </div>
      <div className="text-4xl font-bold">{children}</div>
    </div>
  );
}
