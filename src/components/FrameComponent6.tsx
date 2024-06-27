import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[30px] box-border max-w-full ${className}`}
    >
      <div className="w-[1287px] flex flex-col items-end justify-start gap-[91px] max-w-full mq750:gap-[45px] mq450:gap-[23px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full">
            <img
              className="h-[129px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[274px]"
              loading="lazy"
              alt=""
              src="/images-2-1@2x.png"
            />
            <div className="h-[142px] w-[403px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/images-1-2@2x.png"
              />
            </div>
            <img
              className="w-[402px] relative max-h-full object-cover min-h-[142px] max-w-full"
              loading="lazy"
              alt=""
              src="/images-3@2x.png"
            />
          </div>
        </div>
        <div className="w-[1245px] flex flex-row items-end justify-start gap-[31px] max-w-full mq750:gap-[15px] mq1050:flex-wrap">
          <div className="h-[193px] w-[355px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/ut07ziym-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[33px] box-border min-w-[271px] max-w-full mq1050:flex-1">
            <img
              className="self-stretch h-[117px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/7rustm4m-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[267px] max-w-full mq1050:flex-1">
            <img
              className="self-stretch h-[147px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/universityofnotredamevectorlogo-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
