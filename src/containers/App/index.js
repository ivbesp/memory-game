import React from 'react';
import './style/style.scss';

const App = (props) => {
    return (
        <div className='application'>
            {/* Вывод дочерних компонентов */}
            {props.children}
        </div>
    )
};

export default App;

