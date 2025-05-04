import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store';
import { Button, Input, Modal } from 'antd';
import { addStadium, deleteStadium, updateStadium } from './store/slices/stadiumSlice';
import { FaEdit, FaMapMarkerAlt } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useState } from 'react';
import { IStadium } from './types';

import logo from '../public/logo.png';
import stadion1 from '../public/stadions/stadion-1.png';

function App() {
  const stadiumSlice = useSelector((store: RootState) => store.stadiumSlice);
  const dispatch = useDispatch();

  const [isAdd, setAdd] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [addStadiumData, setAddStadiumData] = useState<IStadium | null >(null);
  const [editStadiumData, setEditStadiumData] = useState<IStadium | null >(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addStadiumHandle = () => {
    setAddStadiumData({ name: '', address: '', price: 0 });
    setAdd(true);
  };

  const handleSaveAddedStadium = () => {
    if (addStadiumData && addStadiumData.name && addStadiumData.address && addStadiumData.price) {
      dispatch(addStadium(addStadiumData));
      setAdd(false);
      setAddStadiumData({ name: '', address: '', price: 0 });
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  const handleAddInputChange = (field: keyof IStadium, value: string | number) => {
    if (addStadiumData) {
      setAddStadiumData({
        ...addStadiumData,
        [field]: value,
      });
    }
  };

  const editStadiumHandle = (idx: number): void => {
    const currentVal = stadiumSlice.stadium.find((_, i) => i === idx)
    if (currentVal) {
      setEditStadiumData(currentVal);
      setEditIndex(idx);
      setEdit(true);
    }
  };

  const handleInputChange = (field: keyof IStadium, value: string | number) => {
    if (editStadiumData) {
      setEditStadiumData({
        ...editStadiumData,
        [field]: value
      });
    }
  };

  const handleSaveEditedStadium = () => {
    if (editStadiumData && editIndex !== null) {
      dispatch(updateStadium({ idx: editIndex, updateStadium: editStadiumData }));
      setEdit(false);
      setEditStadiumData(null);
      setEditIndex(null);
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex items-center justify-between mb-0 mt-8'>
        <img className='cursor-pointer' src={logo} alt="Logo" />
        <Button className='btn' onClick={addStadiumHandle}>Stadion qo'shish</Button>
      </div>
      <hr className='text-[#f0eded] mt-10 mb-15' />

      <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-[1110px] m-auto'>
        {
          stadiumSlice.stadium.map((stadion, idx) => (
            <div key={idx} className='group w-[260px] h-[320px] relative rounded-[5px] overflow-hidden shadow-[0px_0px_40px_rgba(0,0,0,.1)] cursor-pointer'>
              <img className='absolute z-[-1] w-[100%] h-[100%] object-cover' src={stadion1} alt="Stadion rasmi" />
              <div className='flex flex-col items-start px-4 py-5 text-white absolute bottom-0 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/40 to-transparent w-full h-full justify-end'>
                <h2 className='font-[600] text-[22px] m-0'>{stadion.name}</h2>
                <a className='flex items-center gap-x-2 text-[14px] text-gray-400 hover:text-gray-300 duration-300 mb-0 leading-4' href="/">
                  <FaMapMarkerAlt fontSize={12} />
                  {stadion.address}
                </a>
                <p className='flex gap-x-[8px] text-[24px] text-[#0d9817f5] font-[800]'>Narxi: <span className='font-[400] text-white'>{stadion.price} so'm</span></p>
              </div>
              <div className='flex flex-col items-center gap-y-4 absolute top-6 left-4 text-gray-200 shadow-[0px_0px_50px_rgba(0,0,0,.5)] lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                <FaEdit className='ml-1 cursor-pointer hover:text-white duration-300' fontSize={20} onClick={() => editStadiumHandle(idx)} />
                <RiDeleteBinLine className='cursor-pointer hover:text-white duration-300' fontSize={24} onClick={() => dispatch(deleteStadium(idx))} />
              </div>
            </div>
          ))
        }
      </div>

      {/* Add Modal */}
      <Modal
        className='modal'
        title="Stadion ma'lumotlarini qo'shish"
        okText="Qo'shish"
        cancelText='Bekor qilish'
        open={isAdd}
        onCancel={() => setAdd(false)}
        onOk={handleSaveAddedStadium}
      >
        <Input
          className='input'
          value={addStadiumData?.name || ''}
          onChange={(e) => handleAddInputChange('name', e.target.value)}
          placeholder="Stadion nomi"
        />
        <Input
          className='input'
          value={addStadiumData?.address || ''}
          onChange={(e) => handleAddInputChange('address', e.target.value)}
          placeholder="Manzil"
          style={{ marginTop: '20px' }}
        />
        <Input
          className='input'
          value={addStadiumData?.price.toString() || ''}
          onChange={(e) => handleAddInputChange('price', Number(e.target.value))}
          placeholder="Narx"
          style={{ marginTop: '20px' }}
        />
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Stadion ma'lumotlarini tahrirlash"
        okText='Saqlash'
        cancelText='Bekor qilish'
        open={isEdit}
        onCancel={() => setEdit(false)}
        onOk={handleSaveEditedStadium}
      >
        <Input
          value={editStadiumData?.name || ''}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Stadion nomi"
        />
        <Input
          value={editStadiumData?.address || ''}
          onChange={(e) => handleInputChange('address', e.target.value)}
          placeholder="Manzil"
          style={{ marginTop: '10px' }}
        />
        <Input
          value={editStadiumData?.price.toString() || ''}
          onChange={(e) => handleInputChange('price', Number(e.target.value))}
          placeholder="Narx"
          style={{ marginTop: '10px' }}
        />
      </Modal>

      <hr className='text-[#f0eded] mt-20 mb-10' />
      <div className='flex justify-between mb-10'>
        <p className='text-gray-800'><b>Email:</b> <a className='text-[#34C52D] hover:text-[#31f327] duration-300' href="/">info@streetsport.uz</a></p>
        <p className='text-gray-800'><b>Telefon:</b> <a href="/">+998 88 123 12 82</a></p>
      </div>
    </div>
  );
}

export default App;
