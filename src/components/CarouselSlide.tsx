import { FaAngular, FaCss3, FaGit, FaHtml5, FaJs, FaNode, FaPython, FaReact, FaSass, FaVuejs, FaWordpress } from "react-icons/fa";

export function CarouselSlide() {
    return (
        <div className="bg-gradient-carousel p-8 mt-6">
            <div className="animate-slideCarousel flex gap-6 whitespace-nowrap">
                <div className="flex gap-8">
                <div>
                    <FaNode className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaReact className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaVuejs className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaAngular className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaGit className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaPython className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaJs className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaCss3 className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaHtml5 className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaSass className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                <div>
                    <FaWordpress className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[35px]"  />
                </div>
                
                </div>
            </div>
        </div>
    )
}