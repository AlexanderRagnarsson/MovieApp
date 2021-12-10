import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getToken from '../actions/tokenActions';

const token = async () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.token);
  if (test === '') {
    useEffect(() => {
      dispatch(getToken());
    }, []);
  }
  return useSelector((state) => state.token);
};

export default token;
