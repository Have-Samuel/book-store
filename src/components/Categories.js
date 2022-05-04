import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((store) => store.checkStatus);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      {status}
      <button type="submit" id="CHECK_STATUS" onClick={handleCheckStatus}>
        Check status
      </button>
    </div>
  );
}
