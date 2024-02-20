import React ,{ useEffect, useState } from 'react'


const DesktopModeNotification = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const userAgent = window.navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    }, []);
  
    return (
      <div>
        {isMobile && (
          <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
            For better viewing experience, please switch to desktop mode.
          </div>
        )}
      </div>
    );
  };
  
export default DesktopModeNotification