import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getIdValidate } from '../services/GeneralService';

export const useValidateId = () => {
    const [dataId, setDataId] = useState({});

    useEffect(() => {
        const get = async () => {
            const object  = await getIdValidate(dataId);
            setDataId(object);
          }
      get()
    }, [dataId])
    
  return dataId;
}
