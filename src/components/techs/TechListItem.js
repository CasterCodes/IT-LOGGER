import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import {deleteTech} from '../../actions/techActions';

const TechListItem = ({tech, deleteTech}) => {
    const handleDelete =(id) => {
         deleteTech(id);
         M.toast({html:'Technician Deleted'});
    }
    return (
        <li className='collection-item'>
             <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className='secondary-content' onClick={() => handleDelete(tech.id)}>
                       <i className='material-icons grey-text'>delete</i>
                </a>
             </div>
        </li>
    )
}

TechListItem.propTypes = {
    tech:PropTypes.object.isRequired
}
export default  connect(null, {deleteTech})(TechListItem);
