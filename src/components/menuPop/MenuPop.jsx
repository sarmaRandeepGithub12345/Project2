import React from 'react'

const MenuPop = ({onClose , visible, isLoading,item,values}) => {
  const handleClose = (e)=>{
    e.preventDefault();
    
    console.log('trying')
    if(e.target.id==='parent'){
      onClose()
    }
  }
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  if(!visible)
    return null;
  
    return (
    <div 
    id="parent" 
    className={`${values} fixed z-[100] inset-0 bg-[black] bg-opacity-50 `}
    onClick={handleClose}
    >
      <div onClick={stopPropagation}>
      {item}
      </div>

    </div>
  )
}

export default MenuPop