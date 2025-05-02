import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store';
import { Button } from 'antd';
import { addBook } from './store/slices/bookingSlice';


function App() {
  const bookSlice = useSelector((store: RootState) => store.BookSlice);
  const dispatch = useDispatch();
  
  const addBookHandle = () => {
    dispatch(addBook())
  }

  return (
    <>
      <h1>Street Sport</h1>
      <button></button>
      <Button onClick={() => {addBookHandle()}}>Kitob qo'shish</Button>
    </>
  )
}

export default App
