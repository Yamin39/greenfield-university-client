const CartItemSkeleton = () => {
    return (
      <tr className="animate-pulse">
        <td className="p-3">
          <div className="w-[70px] h-[70px] bg-gray-200 rounded" />
        </td>
        <td className="p-3">
          <div className="h-4 bg-gray-200 rounded w-32" />
        </td>
        <td className="p-3">
          <div className="h-4 bg-gray-200 rounded w-16" />
        </td>
        <td className="max-w-[150px]">
          <div className="py-2 px-4 border border-gray-200 rounded-full">
            <div className="flex justify-between items-center gap-x-5">
              <div className="h-6 w-6 bg-gray-200 rounded-full" />
              <div className="h-4 w-8 bg-gray-200 rounded" />
              <div className="h-6 w-6 bg-gray-200 rounded-full" />
            </div>
          </div>
        </td>
        <td className="p-3 text-right">
          <div className="h-6 w-6 bg-gray-200 rounded-full ml-auto" />
        </td>
      </tr>
    );
  };

export default CartItemSkeleton;