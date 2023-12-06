import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <h1>Dashboard navbar</h1>
            <h1>Dashboard sidebar</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;