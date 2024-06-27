import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onApplyNowTextClick = useCallback(() => {
    navigate("/contact-form");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[147px] box-border max-w-full text-left text-5xl text-black font-inria-serif ${className}`}
    >
      <div className="flex-1 bg-white flex flex-row items-end justify-between py-3 pr-[72px] pl-[75px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] mq750:pl-[37px] mq750:pr-9 mq750:box-border">
        <img
          className="h-[116px] w-[198px] relative object-cover"
          loading="lazy"
          alt=""
          src="/img-20240606-165925-1@2x.png"
        />
        <div className="w-[668px] flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border max-w-full mq1050:w-0">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-36 relative gap-[20px] mq750:pl-[72px] mq750:box-border mq1050:hidden mq450:pl-5 mq450:box-border">
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <b className="relative leading-[150%] inline-block min-w-[67px]">
                About
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <b className="relative leading-[150%] inline-block min-w-[61px]">
                Team
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <b className="relative leading-[150%] inline-block min-w-[87px]">
                Contact
              </b>
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-6 bg-lightblue shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-skyblue">
              <b
                className="relative text-5xl leading-[150%] inline-block font-inria-serif text-black text-left [text-shadow:1px_0_0_#a7eaff,_0_1px_0_#a7eaff,_-1px_0_0_#a7eaff,_0_-1px_0_#a7eaff] min-w-[117px] cursor-pointer"
                onClick={onApplyNowTextClick}
              >
                Apply Now
              </b>
            </button>
            <b className="w-[108px] absolute !m-[0] top-[calc(50%_-_18px)] left-[0px] leading-[150%] flex items-center z-[1]">
              Home
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
