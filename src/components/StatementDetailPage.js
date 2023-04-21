import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StatementDetail from './StatementDetail';

function StatementDetailPage() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.finance);
  const detail = data.find((item) => item.id === id);

  return (
    <main data-testid="statement-detail-page">
      <StatementDetail detail={detail} />
      ;
    </main>
  );
}

export default StatementDetailPage;
