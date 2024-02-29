import { useState } from "react";

const useLoadingState = () => {
  const [loading, setLoading] = useState(false);

  const wrapper = async <T,>(
    fn: (...params: any[]) => Promise<T>,
    ...params: any[]
  ) => {
    setLoading(true);
    const response = await fn(...params);
    setLoading(false);

    return response;
  };

  return { loading, wrapper };
};

export default useLoadingState;
