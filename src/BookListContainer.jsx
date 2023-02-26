import { BookList } from "./BookList";
import { useRemoteService } from "./hooks/hooks";

export const BookListContainer = () => {
const {data,loading,error} = useRemoteService([])

  return (

    <BookList books={data} loading={loading} error={error}/>

  );
}
