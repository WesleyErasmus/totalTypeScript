import { useEffect, useState } from "react";

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
    // Use state with undefined >> adding | undefined to the Data interface
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

};
