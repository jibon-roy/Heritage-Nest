export default function Loading({ className }) {
  return (
    <div className={`${className} h-screen w-full z-30 backdrop-blur-sm fixed`}>
      <div className={` flex justify-center w-full h-full items-center  `}>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
}
