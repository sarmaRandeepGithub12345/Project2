import React from 'react';
import SettingsNav from '../../components/settingsComp/settingsNav/SettingsNav';
import SettingsLeft from '../../components/settingsComp/settingsLeft/SettingsLeft';
import { objItems } from '../../utils/commonObjects';

function Settings() {
  const [index, setindex] = React.useState(0);

  return (
    <>
    <div>
      <SettingsNav/>
    </div>
      <div className='flex bg-[rgb(196,196,196)]'>
        <SettingsLeft setindex={setindex}/>
          {
            objItems[index].itemToShow
          }         
      </div>
    </>  
  )
} 

export default Settings