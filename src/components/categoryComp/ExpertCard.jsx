
import React from 'react';
import RatingIcon from "../../pictures/icons/RatingIcon.svg"
import CommentIcon from "../../pictures/icons/CommentsIcon.svg"
import VerifiedIcon from "../../pictures/icons/VerifiedIcon.svg"

const ExpertCard = ({ imgSrc, name, field, price, rating, comments, description }) => {
    return (
        <div className="flex gap-4 w-[90%] shadow-md rounded-md p-2.5 bg-[white]">
            <img src={imgSrc} alt={name} className='700:90px 700:w-[90px] 800:w-[100px] 800:h-[100px]  1000:w-[120px] 1000:h-[120px] 1200:w-[140px] 1200:h-[140px]' />
            <div className="space-y-3">
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <div className="text-black text-left 1000:text-[20px] 1200:text-[24px] font-bold leading-7 whitespace-nowrap">
                            {name}
                        </div>
                        <div className="text-zinc-800 text-left text-sm leading-4 whitespace-nowrap mt-1.5">
                            {field}
                        </div>
                        <div className="flex w-full gap-5 items-center">
                            <div className="flex gap-1 items-center">
                                <img
                                    loading="lazy"
                                    src={RatingIcon}
                                    className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-neutral-400 text-center text-sm leading-4 grow whitespace-nowrap">
                                    {rating}
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img
                                    loading="lazy"
                                    src={CommentIcon}
                                    className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-neutral-400 text-center text-sm leading-4 grow whitespace-nowrap">
                                    {comments}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-zinc-800 text-right text-sm leading-4 whitespace-nowrap">
                            from
                        </div>
                        <div className="text-black text-right 1000:text-[20px] 1200:text-[24px] font-bold leading-7 self-stretch whitespace-nowrap 1200:mt-1.5">
                            {price}
                        </div>
                        <div className="text-zinc-800 text-right text-sm leading-4 whitespace-nowrap mt-1.5">
                            per appointment
                        </div>
                    </div>
                </div>
                <div className="line-clamp-3 text-black text-ellipsis text-xs leading-4 mt-3.5 h-fit">
                    {description}
                </div>
            </div>
        </div>
        // <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
        //     <div className="shadow-sm bg-white grow w-full mx-auto p-2.5 rounded-lg max-md:max-w-full max-md:mt-6">
        //       <div className="gap-5 flex">
        //           <img
        //             loading="lazy"
        //             srcSet={imgSrc}
        //             className="aspect-square object-contain object-center w-40 overflow-hidden shrink-0 max-w-full max-md:mt-8"
        //           />
        //         <div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0">
        //           <div className="items-stretch flex flex-col my-auto max-md:mt-10">
        //             <div className="justify-between items-stretch flex gap-5">
        //               <div className="items-stretch flex grow basis-[0%] flex-col">
        //                 <div className="text-black text-center text-2xl font-bold leading-7 whitespace-nowrap">
        //                   {name}
        //                 </div>
        //                 <div className="text-zinc-800 text-center text-sm leading-4 whitespace-nowrap mt-1.5">
        //                   {field}
        //                 </div>
        //                 <div className="items-stretch flex w-full justify-between gap-5 mt-1.5">
        //                   <div className="justify-between items-stretch flex gap-0.5">
        //                     <img
        //                       loading="lazy"
        //                       src={RatingIcon}
        //                       className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
        //                     />
        //                     <div className="text-neutral-400 text-center text-sm leading-4 grow whitespace-nowrap">
        //                       {rating}
        //                     </div>
        //                   </div>
        //                   <div className="items-stretch flex justify-between gap-0.5">
        //                     <img
        //                       loading="lazy"
        //                       src={CommentIcon}
        //                       className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
        //                     />
        //                     <div className="text-neutral-400 text-center text-sm leading-4 grow whitespace-nowrap">
        //                       {comments}
        //                     </div>
        //                   </div>
        //                 </div>
        //               </div>
        //               <div className="items-stretch flex grow basis-[0%] flex-col">
        //                 <div className="flex flex-col pl-9 max-md:pl-5">
        //                   <div className="text-zinc-800 text-center text-sm leading-4 whitespace-nowrap">
        //                     from
        //                   </div>
        //                   <div className="text-black text-center text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-1.5">
        //                     {price}
        //                   </div>
        //                 </div>
        //                 <div className="text-zinc-800 text-center text-sm leading-4 whitespace-nowrap mt-1.5">
        //                   per appointment
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="line-clamp-3 text-black text-ellipsis text-xs leading-4 mt-3.5">
        //               {description}
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
    );
};

export default ExpertCard;
