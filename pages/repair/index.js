import Script from 'next/script'
import React from 'react'

export const Index = () => {
  return (
    <div>
    <Script async type="module" id="repairdeskwidget" src="https://phonegeeks.repairdesk.co/widgets/repair_widget.js?token=5dae419862a401571701144&width=100%&scrolling=no"  />
    
    </div>
  )
}

export default Index