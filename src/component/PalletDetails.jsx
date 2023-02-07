import React ,{useState} from 'react'
import heart from "../assets/heart.png";
import SimilarPallets from './SimilarPallets';
/* it should take colors from the pervious page where pallet details button */
const PalletDetails = (props) => {
    
  const [like, setLike] = useState(0),
  [isLike, setIsLike] = useState(false),
  onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  return (
    
        <div className='my-[3%] mx-[10%]'>
            <div className='breadcrumbs flex flex-row justify-start font-medium text-[36px]'>
                <button className='hover:text-[#0085F7] mr-[8px]'><i class="fa fa-home"></i> Home </button>
                <span className='font-normal'> &gt; </span>
                <span className='ml-[8px]'> Pallete</span>
            </div>
            <div className="interactives   flex flex-row justify-end gap-2 ">
                <button
                    className={"like-button " + (isLike ? "likes" : "")}
                    onClick={onLikeButtonClick}
                >
                    <style>{` 
                                    .likes {
                                    background-image:url('${heart}');
                                        width:100%;
                                        height:24px;
                                        background-repeat: no-repeat;
                                        margin-left:100%;
                                    }
                                    `}</style>
                    <i
                    class=" fa fa-heart-o text-[#f66868] text-[24px]"
                    aria-hidden="true"
                    ></i>
                </button>
                <span className="text-[#7D7C83] text-sm">{`${like}`}</span>
                </div>
                <div className='selected-pallet bg-black w-full rounded-[10px] overflow-hidden  flex flex-row  my-[5%] text-white h-[400px]'>
                    {/*  after mostafa  map color to this page and remove ggfg   */}
                    <div className='w-[25%] relative bg-slate-500'><span className='absolute right-[80px] bottom-9' >#0000</span></div>
                    <div className='w-[25%] relative  bg-slate-900'><span className='absolute right-[80px] bottom-9'>#0000</span></div>
                    <div className='w-[25%] relative  bg-slate-900'><span className='absolute right-[80px] bottom-9'>#0000</span></div>
                    <div className='w-[25%] relative  bg-slate-900'><span className='absolute right-[80px] bottom-9'>#0000</span></div>
                    <div className='w-[25%] relative  bg-slate-900' ><span className='absolute right-[80px] bottom-9'>#0000</span></div>
                    
                    
                </div>

               <SimilarPallets/>

        </div> 
    )
}

export default PalletDetails