import React from 'react'
import Stories from 'react-insta-stories';
const Test = () => {
   
    window.addEventListener('touchstart', function() {
        // some logic
    }, {passive:false});
    const stories = [
        'https://review2020.s3.us-east-1.amazonaws.com/1678582278691primary%20buttons.png',
        'https://review2020.s3.us-east-1.amazonaws.com/1678577830143input%20with%20label.png'
    ];
    
    return (
        <div>
        <Stories stories={stories} keyboardNavigation={true} loop={true} defaultInterval={800} />
        </div>
    );
}

export default Test