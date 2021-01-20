import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteLog, setCurrentLog} from '../../actions/LogActions';

const LogItem = ({log, deleteLog, setCurrentLog}) => {
    const handleDelete = (id) => {
       deleteLog(id);
    }
    const handleEdit = (log) => {
        setCurrentLog(log)
    }
    return (
        <li className='collection-item'>
              <div>
                  <a href='#edit-log-modal' 
                     className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                     onClick={() => handleEdit(log)}
                  >{log.message}</a>
                  <br></br>
                  <span className='grey-text'>
                        <span className='black-text'>ID #{log.id}</span> Last updated by  {' '}
                        <span className='black-text'>{ log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                  </span>
                  <a href='#!' className='secondary-content'><i className='material-icons grey-text' onClick={() => handleDelete(log.id)}>delete</i></a>
              </div>
        </li>
    )
}


LogItem.propTypes = {
      log: PropTypes.object.isRequired,
      deleteLog:PropTypes.func.isRequired,
      setCurrentLog:PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrentLog})(LogItem);
