import { useState } from "react";
import toast from "react-hot-toast";

const useOptimisticUpdate = (addAction, removeAction, initialState = false, onSuccess = () => {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(initialState);

  const toggleState = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const previousState = state;

    // Optimistic update
    setState(!previousState);

    try {
      if (previousState) {
        await removeAction();
      } else {
        await addAction();
      }
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error("Failed to update");
      // Revert optimistic update if API call fails
      setState(previousState);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, state, toggleState, setState };
};

export default useOptimisticUpdate;
