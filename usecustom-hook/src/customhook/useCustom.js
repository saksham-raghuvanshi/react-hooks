import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useCustom = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);
  return { data };
};

export default useCustom;
