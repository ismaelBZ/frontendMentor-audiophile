import { NavLink } from "react-router";
import HeadphoneImg from "./../../../assets/shared/mobile/HeadphoneShadowImg.png";
import ArrowIcon from "./../../../assets/utils/buttons/shop-arrow.svg";

const CategoryCard = () => {
    return (
        <NavLink to="/headphones">
            <div className="relative">
                <img className="mx-auto" src={HeadphoneImg} alt="" />
                <div className="-mt-2 pb-6 flex flex-col gap-4">
                    <p className="font-bold text-[15px] text-center tracking-[1px] uppercase">Headphones</p>
                    <p className="font-bold text-[13px] text-center text-gray">SHOP<span><img className="inline ml-3" src={ArrowIcon} alt="" /></span></p>
                </div>
                <div className="absolute bottom-0 w-full h-[75%] -z-10 bg-ice "></div>
            </div>
        </NavLink>
    )
}
export default CategoryCard