import Input from "./Input";
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full text-left text-xl text-white font-inria-serif mq750:gap-[29px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0.5 box-border max-w-full text-13xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq1050:text-7xl mq450:text-lgi">
            Apply Now
          </h2>
          <b className="self-stretch relative text-5xl leading-[150%] mq450:text-lgi mq450:leading-[29px]">
            Get Ready For Dream Destination
          </b>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-3.5 pr-0 pl-0.5 box-border max-w-full">
        <div className="w-[631px] flex flex-row flex-wrap items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[24px_32px] min-h-[155px] max-w-full z-[1] mq750:gap-[16px]">
          <Input firstName="First name" labelPlaceholder="Jane" />
          <Input
            firstName="Last name"
            labelPlaceholder="Smitherton"
            propWidth="297px"
            propPadding="0px 0px 0px"
            propAlignSelf="unset"
          />
          <Input
            firstName="Email address"
            labelPlaceholder="Example@gmail.com"
            propWidth="626px"
            propPadding="unset"
            propAlignSelf="unset"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[17px] max-w-full">
          <Input
            firstName="Contact Number"
            labelPlaceholder="+0123456789"
            propWidth="unset"
            propPadding="unset"
            propAlignSelf="stretch"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[12.5px] max-w-full">
            <Input
              firstName="Which Country You Want To Travel"
              labelPlaceholder="USA / UK / EU"
              propWidth="unset"
              propPadding="unset"
              propAlignSelf="stretch"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[8px] max-w-full z-[1]">
              <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                Visa Type
              </b>
              <div className="self-stretch rounded-lg bg-white box-border flex flex-row items-start justify-start py-[13px] px-[15px] gap-[16px] max-w-full text-gray-200 font-small-text border-[1px] border-solid border-gainsboro-200">
                <div className="flex-1 relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%_-_40px)] mq450:text-base mq450:leading-[19px]">
                  Choose Visa
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full z-[1]">
                <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                  Your message
                </b>
                <textarea
                  className="bg-white h-[156px] w-auto [outline:none] self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg box-border flex flex-row items-start justify-start py-3 px-4 font-inria-serif font-bold text-xl text-gray-200 border-[1px] border-solid border-gainsboro-200"
                  placeholder="Enter your question or message"
                  rows={8}
                  cols={31}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-5 bg-lightblue self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-start justify-center z-[1] hover:bg-skyblue">
          <b className="relative text-5xl leading-[150%] inline-block font-inria-serif text-black text-left min-w-[81px] mq450:text-lgi mq450:leading-[29px]">
            Submit
          </b>
        </button>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
