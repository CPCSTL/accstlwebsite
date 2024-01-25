import RepairDeskWidget from 'components/test/Repairwidget';
import React from 'react';


const MyPage = () => {
    return (
        <div style={{textAlign:"center", paddingTop:"10vh"}}>
            <h1>My Booking Page</h1>
            <RepairDeskWidget />
            {/* Other content of your page */}
        </div>
    );
};

export default MyPage;
