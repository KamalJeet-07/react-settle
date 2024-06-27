import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[68px] pb-[111px] box-border max-w-full text-center text-13xl text-black font-inria-serif mq1050:pb-[72px] mq1050:box-border mq450:pb-[47px] mq450:box-border mq1225:pl-[34px] mq1225:pr-[34px] mq1225:box-border ${className}`}
    >
      <div className="w-[1273px] flex flex-col items-end justify-start gap-[76px] max-w-full mq750:gap-[38px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
            <b className="w-[812px] relative [text-decoration:underline] leading-[150%] flex items-center justify-center shrink-0 max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Top UK Universities
            </b>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[46px] max-w-full grid-cols-[repeat(3,_minmax(298px,_1fr))] mq750:gap-[23px] mq750:grid-cols-[minmax(298px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(298px,_516px))]">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[163px] mq750:w-full"
              loading="lazy"
              alt=""
              src="/e1-1@2x.png"
            />
            <div className="h-[163px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/e2-1@2x.png"
              />
            </div>
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[163px] mq750:w-full"
              loading="lazy"
              alt=""
              src="/e7-1@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full">
          <div className="flex flex-row items-start justify-center gap-[63px] max-w-full mq750:gap-[31px] mq450:gap-[16px] mq1225:flex-wrap">
            <div className="h-[146px] w-[340px] flex flex-col items-start justify-start py-0 pr-[26px] pl-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/e9-1@2x.png"
              />
            </div>
            <img
              className="w-[369px] relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/e8-1@2x.png"
            />
            <div className="h-[166px] w-[390px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/e4-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1250px] flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[53px] max-w-full mq750:gap-[26px]">
            <div className="h-[145px] w-[356px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/uk00-1@2x.png"
              />
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[255px] min-h-[164px]"
              loading="lazy"
              alt=""
              src="/e6-1@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[255px] min-h-[164px]"
              loading="lazy"
              alt=""
              src="/e5-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
