const FloatingButton = ({ count = 0, onOpen }) => {
  if (count === 0) return null;

  return (
    <div
      onClick={onOpen}
      className="relative flex items-center text-2xl text-black font-bold gap-2 bottom-[-10px] left-1/2 right-1/2 transform -translate-x-1/2 bg-[#FFBB5A] w-fit px-6 py-3 space-x-2 rounded-full cursor-pointer"
    >
      <span className="text-[#3B4747]">Checkout</span>
      <span className="bg-white rounded-lg px-2 ">{count}</span>
    </div>
  );
};

export default FloatingButton;
