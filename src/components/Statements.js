import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStock } from 'redux/finance/financeSlice';
import Statement from './Statement';

const Statements = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((store) => store.finance);

  useEffect(() => {
    dispatch(getStock('AAN'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <ul className="list">
      {data.map((item) => <Statement key={item.id} item={item} />)}
    </ul>
  );
};

export default Statements;
