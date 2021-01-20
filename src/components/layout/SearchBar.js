import React,{useRef} from 'react';
import {searchLogs} from '../../actions/LogActions';
import {connect} from 'react-redux';

const SearchBar = ({searchLogs}) => {
    let text = useRef('');
    const handleSearch = (e) => {
           searchLogs(text.current.value);
    }
    return (
        <nav style={{marginBottom:'30px'}} className='blue'>
            <div className='nav-wrapper'>
                <form>
                     <div className='input-field'>
                         <input id='search' 
                                type='search' 
                                placeholder='Search For Logs ...'
                                onChange={handleSearch}
                                ref={text}
                                 />
                         <label className='label-icon' htmlFor='search'>
                              <i className='material-icons'>search</i>
                         </label>
                        <i className='material-icon'>close</i>
                     </div>

                </form>
            </div>
            
        </nav>
    )
}

export default connect(null, {searchLogs}) (SearchBar)
