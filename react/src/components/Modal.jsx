// Import images from the assets folder
import purpleImage from '../assets/purple.jpeg';
import cyanImage from '../assets/cyan.jpeg';
import blueImage from '../assets/blue.jpeg';
import blackImage from '../assets/black.jpeg';

const Modal = ({ isOpen, onClose, cart, totalPrice, totalQuantity }) => {
  if (!isOpen) return null;

  // Map color ids to corresponding images
  const colorImages = {
    purple: purpleImage,
    cyan: cyanImage,
    blue: blueImage,
    black: blackImage,
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 p-4">
      <div className="relative w-full max-w-[650px] p-4 md:p-6 bg-white rounded-3xl">
        <button onClick={onClose} className="absolute right-4 top-1">✖</button>

        <h2 className="text-xl md:text-2xl font-bold mb-4">Your Cart</h2>

        {!cart.length ? (
          <p>No items added to cart yet!</p>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#DADFEB] text-[#8090A6]">
                  <th className="p-2 text-left">Item</th>
                  <th className="p-2 text-left">Color</th>
                  <th className="p-2 text-left">Size</th>
                  <th className="p-2 text-left">Qnt</th>
                  <th className="p-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => (
                  <tr key={i} className="border-b border-[#DADFEB]">
                    <td className="p-2 flex gap-2">
                      {/* Dynamically use the image based on the item color */}
                      <img src={colorImages[item.color]} alt={item.color} className="w-9 h-9" />
                      {item.name}
                    </td>
                    <td className="p-2 capitalize">{item.color}</td>
                    <td className="p-2">{item.size}</td>
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2 text-right">${item.totalItemPrice}</td>
                  </tr>
                ))}
                <tr className="font-semibold">
                  <td colSpan="3" className="p-2">Total</td>
                  <td className="p-2">{totalQuantity}</td>
                  <td className="p-2 text-right">${totalPrice}</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end gap-4 mt-4">
              <button onClick={onClose} className="h-[36px] px-4 font-semibold border-2">Continue Shopping</button>
              <button className="bg-[#6477ff] h-[36px] px-4 font-semibold text-white rounded-[4px]">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
