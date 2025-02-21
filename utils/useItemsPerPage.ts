import { useState, useEffect } from "react";

const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  return itemsPerPage;
};

export default useItemsPerPage;
