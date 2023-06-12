import React from 'react';
import Navbar from './Components/Navbar';
import AutoComplete from './Components/AutoComplete';
import Buttons from './Components/Buttons';
import ButtonsGroups from './Components/ButtonsGroup';
import Cards from './Components/Cards';
import IconsVariants from './Components/IconsVariants';
import AlertVariants from './Components/AlertVariants';

const App = () => {
  return (
    <>
      <Navbar />
      <AutoComplete />
      <hr />
      <Buttons />
      <hr />
      <ButtonsGroups />
      <hr />
      <Cards />
      <hr />
      <IconsVariants />
      <hr />
      <AlertVariants />
    </>
  );
};

export default App;
