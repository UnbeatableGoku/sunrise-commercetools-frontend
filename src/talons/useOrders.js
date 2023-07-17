import { useQuery } from '@apollo/client';
import React from 'react';
import { verifyUserByToken } from '../graphql/queries';

const useOrders = () => {
    const {data,error:userError}=useQuery(verifyUserByToken)
    if(userError){
        console.log(userError);
    }
    console.log(data);
    return {

    }
};

export default useOrders;
