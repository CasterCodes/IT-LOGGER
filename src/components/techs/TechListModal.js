import React, { useEffect} from 'react';
import TechListItem from './TechListItem';
import {connect} from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({tech, getTechs}) => {
    const {techs, loading} = tech
    useEffect(() => {
      
          getTechs();
         
          // eslint-disable-next-line
    }, [])
    
    return (
        <div id='tech-list-modal' className='modal'>
                <div className='modal-content'>
                      <h4>Technicians List</h4>
                      <ul className='collection'>
                            {!loading  &&  techs === null ? (<h4>No techs</h4>) : (
                                   techs.map(tech => <TechListItem  key={tech.id} tech={tech}/>)
                            )}
                      </ul>

                </div>

        </div>
    )
}
const mapStateToProps = (state) => ({
      tech:state.tech
})

export default  connect(mapStateToProps, {getTechs})(TechListModal);
