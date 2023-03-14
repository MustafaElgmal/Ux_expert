import React   from 'react';


const SearchContent = () => {
    return ( 
        <div className=" flex flex-col text-left w-full">

            <div className=' font-bold  text-[25px] text-left w-[60%] px-[10%] pt-[3%] pb-[1.5%] text-[#0D1216]'>
                <h2>You searched for "Medicine" Domain..</h2>
            </div>
            <div className="text-base font-medium w-full px-[10%] pt-[1.5%] pb-[3%]">
                <h3>Here are some tips to help you make a great project regarding medicine domain:</h3>
            </div>
            <div className='one'>
                <span className='highlighted-sentense'>1. Create a consistent visual language:</span> When designing a system for the Medicine domain, it is important to create a consistent visual language that is easy to understand and recognize. This includes using the same typefaces, colors, icons, and other elements throughout the system.
            </div>
            <div className='two'>
                <span className='highlighted-sentense'>2. Make sure it is accessible:</span> Accessibility should be a priority when designing any system. Make sure that all elements are easy to read and understand for people with disabilities or those who may not be familiar with the domain.
            </div>
            <div className='three'>
                <span className='highlighted-sentense'>3. Keep it simple:</span> Keep the design of the system as simple as possible so that users can easily navigate through it without getting overwhelmed or confused.
            </div>
            <div className='four'>
                <span className='highlighted-sentense'>4. Use visuals to convey information:</span> Visuals can be used to convey information quickly and effectively, such as diagrams or charts that illustrate complex concepts in an easy-to-understand way.
            </div>
            <div className='five'>
                <span className='highlighted-sentense'>5. When choosing a color palette</span> for the Medicine domain, it is important to choose colors that are calming and professional looking while still being visually appealing. Consider using shades of <span >blue, green, gray, and white</span> as these colors are often associated with health care and medicine. Additionally, consider adding in some accent colors such as<span className='color-details'> yellow or orange</span> to add some visual interest while still keeping within the overall theme of medicine and health care.
            </div>
        </div>
    )
}

export default SearchContent