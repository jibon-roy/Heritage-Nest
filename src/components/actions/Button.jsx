export default function Button({
  className,
  children,
  props,
  type,
  center,
  onClick,
}) {
  if (type == "primary") {
    return (
      <button
        onClick={onClick}
        className={`font-montserrat flex gap-2 active:scale-95 transition-all text-xl rounded justify-center items-center py-3 px-5 font-medium bg-blue-50 text-blue-700 ${
          className && className
        } ${center && "mx-auto"}`}
        {...props}
      >
        {children}
      </button>
    );
  } else if (type == "secondary") {
    return (
      <button
        onClick={onClick}
        className={`font-montserrat flex gap-2 active:scale-95 transition-all text-xl rounded justify-center items-center py-3 px-5 font-normal bg-blue-600 text-white ${
          className && className
        } ${center && "mx-auto"}`}
        {...props}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`font-montserrat flex gap-2 active:scale-95 transition-all text-xl rounded justify-center items-center py-3 px-5 ${
          className && className
        } ${center && "mx-auto"}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}
