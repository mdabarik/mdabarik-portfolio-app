import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h1>Home navbar</h1>
            {children}
            <h2>HOme footer</h2>
        </div>
    );
};

export default layout;