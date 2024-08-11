export default function Button({ className, children, props, type, center }) {
  if (type == "primary") {
    return (
      <button
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
