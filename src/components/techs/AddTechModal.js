import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect } from 'react-redux';
import {addTech} from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


    const onSubmit = () => {
           if(firstName === '' || lastName ===''){
                M.toast({html:"Please enter your first and last name"})
           }else {
                const newTech = {
                     firstName,
                     lastName,
                }
                addTech(newTech);
                M.toast({html:"Technician was added"})
                setFirstName('');
                setLastName('');
           }      
    }
    return (
        <div id='add-tech-modal' className='modal' styles={modalStyle}>
            <div className='modal-content'>
                 <h4>Add Technician</h4>
                 <div className='row'>
                         <div className='input-field'>
                            <input type='text'name='message' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <label htmlFor='firstname' className='active'>FirstName</label>
                         </div>
                 </div>
                 <div className='row'>
                         <div className='input-field'>
                            <input type='text'name='message' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <label htmlFor='message' className='active'>LastName</label>
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

export default  connect(null, {addTech})(AddTechModal);
