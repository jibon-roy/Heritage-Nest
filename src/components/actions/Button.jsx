export default function Button({ className, children, props, type, center }) {
  if (type == "primary") {
    return (
      <button
        className={`font-montserrat flex active:scale-95 transition-all rounded justify-center items-center py-2 px-4 bg-blue-100 text-blue-500 ${
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
        className={`font-montserrat flex active:scale-95 transition-all rounded justify-center items-center py-3 px-6 font-normal bg-blue-600 text-white ${
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
        className={`font-montserrat flex active:scale-95 transition-all rounded justify-center items-center py-2 px-4 ${
          className && className
        } ${center && "mx-auto"}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}
