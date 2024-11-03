import React from 'react'

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-10 xl:px-20 h-screen">
      <table className="w-full border-separate border-spacing-3">
        <thead className="">
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th className="">Date</th>
            <th className="">Price</th>
            <th className="hidden md:block">Products</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-sm odd:bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              2024-12-12
            </td>
            <td className="py-6 px-1">$99.99</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              On the way (approx. 10min)...
            </td>
          </tr>
          <tr className="text-sm odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              2024-12-12
            </td>
            <td className="py-6 px-1">$99.99</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              Delivered
            </td>
          </tr>
          <tr className="text-sm odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              2024-12-12
            </td>
            <td className="py-6 px-1">$99.99</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              Delivered
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage
