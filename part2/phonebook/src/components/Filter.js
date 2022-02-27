import React from 'react';

const Filter = (props) => {
    return (
        <div>
            Filter names with:
            <input 
                onChange={props.onChangeHandler} 
            />
      </div>
    );
};

export default Filter;