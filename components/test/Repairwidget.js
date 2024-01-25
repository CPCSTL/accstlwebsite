import React, { useState, useEffect } from 'react';
import { parseScriptUrl } from 'utils/parseScriptUrl';


const RepairDeskWidget = () => {
    const [iframeSrc, setIframeSrc] = useState('');
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        const scriptUrl = "https://phonegeeks.repairdesk.co/widgets/repair_widget.js?token=5dae419862a401571701144&width=100%&scrolling=no";
        const params = parseScriptUrl(scriptUrl);
        console.log(params);

        const iframeUrl = `https://${params.host}/widget.php?r=site/repairwidget&token=${params.token}&width=${params.width}&scrolling=${params.scrolling}`;
        setIframeSrc(iframeUrl);
    }, []);

    const handleIframeLoad = () => {
        setLoading(false); // Set loading to false when iframe is loaded
    };

    return (
        <div style={{height:"fit-content", overflow:"auto", paddingLeft:"5%", paddingRight:"5%"}}>
            {loading && <div>Loading...</div>} {/* Loading indicator */}
            <iframe 
            
                id="repair-desk-widget" 
                src={iframeSrc} 
                width="100%" 
            height="1200px"
    
                scrolling="yes"
                frameBorder="2px"
                style={{marginBottom:"100px" , overflow:"auto" }} // Adjust height as needed
                onLoad={handleIframeLoad} // Event handler for iframe load
            ></iframe>
        </div>
    );
};

export default RepairDeskWidget;
