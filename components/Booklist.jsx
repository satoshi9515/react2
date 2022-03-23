// Booklist.jsx
import { useState, useEffect } from "react";

// 🔽 propsを追加
export const Booklist = ({ language, getData }) => {
  // 🔽 関数を実行（`?` を使用することで，`getData` が存在する場合のみ関数を実行可能）
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
