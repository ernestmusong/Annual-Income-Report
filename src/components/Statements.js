import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStock } from 'redux/finance/financeSlice';
import Statement from './Statement';
import Hero from './Hero';

const Statements = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((store) => store.finance);

  useEffect(() => {
    dispatch(getStock('AAPL'));
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
    <>
      <Hero
        title1="Annual Income Statement for"
        title2="Apple Inc."
      />
      <section className="list-section">
        <h2>stats by year</h2>
        <ul data-testid="statements" className="list">
          {data.map((item) => <Statement key={item.id} item={item} />)}
        </ul>
      </section>
    </>
  );
};

export default Statements;
