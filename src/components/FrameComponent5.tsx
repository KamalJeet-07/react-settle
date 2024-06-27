import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[62px] pr-5 pl-14 box-border max-w-full text-center text-13xl text-black font-inria-serif mq1225:pl-7 mq1225:box-border ${className}`}
    >
      <div className="w-[1243px] flex flex-col items-start justify-start gap-[87px] max-w-full mq750:gap-[43px] mq450:gap-[22px]">
        <div className="w-[1218px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <b className="w-[812px] relative leading-[150%] flex items-center justify-center shrink-0 max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Top USA Universities
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[26px] max-w-full mq1050:flex-wrap">
          <div className="h-[149px] w-[374px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-3.5 pl-0 box-border max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
              loading="lazy"
              alt=""
              src="/images-2@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[266px] max-w-full mq1050:flex-1">
            <img
              className="self-stretch h-32 relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/3fx45dti-1@2x.png"
            />
          </div>
          <img
            className="h-[130px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[266px] mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/universityofpennsylvania-fulllogo-rgb4-0-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
