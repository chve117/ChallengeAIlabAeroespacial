import { useState } from 'react';
import SearchIcon from '../assets/icons/search.svg?component'

const ToggleSearchButton = ({ className, onSearchEnter }) => {

    const [text, setText] = useState('');

    const handleSearch = (e) => {
        if(e.key=='Enter'){
            if(onSearchEnter!=undefined && text!=''){
                onSearchEnter(text);
            }
        }
    }

    return (
        <>
            <div className={`toggleLeftButton search ${className}`}>
                <SearchIcon />
                <input type="text" placeholder='Busca planeta...'
                    value={text} onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
        </>
    );
}

export default ToggleSearchButton;