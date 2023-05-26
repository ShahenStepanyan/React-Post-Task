import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Result, Button } from 'antd';

export const NoMatch = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);

  const backHome = () => {
    history.push('/')
  }

  if (!location?.from?.pathname) return <Redirect to="/" />

  return (
    <div className='page404'>
      <Result
        status='404'
        title='404'
        subTitle={`Page ${location.from.pathname} not found`}
        extra={<Button onClick={backHome} type='primary'>Back to main page</Button>}
      />
    </div>
  );
};
