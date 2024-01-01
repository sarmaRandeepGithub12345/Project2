
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useCommonItems = () => {
    const [visible, setvisible] = useState(false)
    const handleClose =()=>{
      setvisible(false)
    }
    const dispatch = useDispatch();
    const obj = useSelector(state=>state.counter)

    const [isLoading, setisLoading] = useState(false);
    return {
        isLoading,
        setisLoading,
        visible,
        setvisible,
        handleClose,
        
        dispatch,
        obj
    }
}

export default useCommonItems