import { useState, useEffect } from "react";
import ky from "ky";

export const useRemoteService = (initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await ky.get("http://localhost:8080/books").json();
        setData(res);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return { data, loading, error };
};
