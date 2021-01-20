import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from '../../actions/LogActions';
import TechSelectOptions from '../techs/TechSelectOptions';
 
const AddLogModal = ({addLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention]  = useState(false);
    const [tech, setTech] = useState('');


    const onSubmit = () => {
           if(message === '' || tech ===''){
                M.toast({html:"Please enter a message and technician"})
           }else {

                const formData = {
                    message,
                    attention,
                    tech,
                    date:Date.now()
                }

                addLog(formData);

                M.toast({html:'Log was added successfully'});

                setTech('');

                setMessage('');
           }      
    }
    return (
        <div id='add-log-modal' className='modal' styles={modalStyle}>
            <div className='modal-content'>
                 <h4> Enter System Logs</h4>
                 <div className='row'>
                         <div className='input-field'>
                            <input type='text'name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                            <label htmlFor='message' className='active'>Log Message</label>
                         </div>
                 </div>
                 <div className='row'>
                         <div className='input-field'>
                           <select name="tech" value={tech} className='browser-default' onChange={(e) => setTech(e.target.value)}>
                                <option disabled >Select Technician</option>
                                <TechSelectOptions/>
                           </select>
                         </div>
                 </div>
                 <div className='row'>
                         <div className='input-field'>
                            <p>
                                <label>
                                    <input type='checkbox' 
                                           className='filled-in' 
                                           checked={attention} 
                                           value={attention}
                                           onChange={(e) => setAttention(!attention)}
                                           />
                                           <span>Needs Attention</span>
                                </label>
                            </p>
                         </div>
                 </div>
                 
            </div>
            <div className='modal-footer'>
                   <a href='#!' 
                      className='modal-close waves-effect blue  btn'
                      onClick={onSubmit}
                      >Submit</a>
            </div>
            
        </div>
    )
}

const modalStyle ={
      width:'75%',
      height:'75%',
}

AddLogModal.propTypes = {
     addLog:PropTypes.func.isRequired,
}

export default   connect (null, { addLog }) (AddLogModal);
