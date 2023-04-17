import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStockList, getStock } from 'redux/finance/financeSlice';
import Statement from './Statement';

const Statements = () => {
  const dispatch = useDispatch();
  const { stocks, isLoading, error } = useSelector((store) => store.finance);

  useEffect(() => {
    dispatch(getStockList());
  }, [dispatch]);
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
      {stocks.map((item) => <Statement key={item.date} statement={item} />)}
    </ul>
  );
};

export default Statements;
