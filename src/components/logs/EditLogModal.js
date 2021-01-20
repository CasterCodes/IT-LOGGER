import React, {useState,useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {updateLog, clearCurrentLog} from '../../actions/LogActions';
import TechSelectOptions from '../techs/TechSelectOptions';
 
const EditLogModal = ({log:{current}, updateLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention]  = useState(false);
    const [tech, setTech] = useState('');


    useEffect(() => {
           if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
           }  
           // eslint-disable-next-line  
    }, [])


    const onSubmit = () => {
        
           if(message === '' || tech ===''){
                M.toast({html:"Please enter a message and technician"})
           }else {
               const updatedLog = {
                   id:current.id,
                   message,
                   tech,
                   attention,
                   date:Date.now()
               }
               updateLog(updatedLog);
               clearCurrentLog();
                setTech('');
                setMessage('');
           }      
    }

    return (
        <div id='edit-log-modal' className='modal' styles={modalStyle}>
            <div className='modal-content'>
                 <h4 className='center'> Edit System Log</h4>
                 <div className='row'>
                         <div className='input-field'>
                            <input type='text'name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
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
const mapStateToProps = (state) => ({
    log:state.log
})
export default connect(mapStateToProps, { updateLog })(EditLogModal);
