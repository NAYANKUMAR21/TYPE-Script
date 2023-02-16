import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGenders } from '../redux/products/prod.actions';

const PoroductsSHow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  console.log(id);
  useEffect(() => {
    dispatch(getGenders(id));
  }, [id]);

  return <div></div>;
};

export default PoroductsSHow;
