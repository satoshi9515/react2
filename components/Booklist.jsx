// Booklist.jsx
import { useState, useEffect } from "react";

// ð½ propsãè¿½å 
export const Booklist = ({ language, getData }) => {
  // ð½ é¢æ°ãå®è¡ï¼`?` ãä½¿ç¨ãããã¨ã§ï¼`getData` ãå­å¨ããå ´åã®ã¿é¢æ°ãå®è¡å¯è½ï¼
  const result = getData?.(language);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);



  return (
    <>
      <p>this is {JSON.stringify(bookData)} list component</p>
    </>
  );
};
