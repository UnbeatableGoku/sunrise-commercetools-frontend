import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationFunction = () => {
  return (
    <Stack spacing={2} >
      <Pagination count={10} shape='rounded' className='mx-auto' />
    </Stack>
  );
};
export default PaginationFunction;
