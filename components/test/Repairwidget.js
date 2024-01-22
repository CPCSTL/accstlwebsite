import React, { useEffect } from 'react';

const RepairDeskWidget = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = "https://phonegeeks.repairdesk.co/widgets/repair_widget.js?token=5dae419862a401571701144&width=100%&scrolling=no";
        script.async = true;
        script.id = "repairdeskwidget";

        // Append the script to the body
        document.body.appendChild(script);

        // Remove the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; // Since it doesn't render anything
};

export default RepairDeskWidget;
