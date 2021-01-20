import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import React, {useEffect, Fragment} from 'react';
import SearchBar from './components/layout/SearchBar';
import AddLogBtn from './components/layout/AddLogBtn';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

const  App = () => {
  useEffect(() => {
    M.AutoInit();
  })
  return (
    <Provider store={store}> 
        <Fragment>
          <SearchBar />
          <div className='container'> 
                  <AddLogBtn/>
                  <AddLogModal />
                  <AddTechModal />
                  <EditLogModal />
                  <TechListModal />
                  <Logs />
          </div>
      </Fragment>
    </Provider>
    
  );
}

export default App;