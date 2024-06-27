import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[173px] pr-[23px] pl-6 box-border max-w-full text-center text-13xl text-black font-inria-serif mq1050:pb-28 mq1050:box-border mq450:pb-[73px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[57px] max-w-full mq750:gap-[28px]">
        <div className="w-[1352px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <b className="w-[1126px] relative [text-decoration:underline] leading-[150%] flex items-center justify-center shrink-0 max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Our Services
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[8px] max-w-full mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[595px] max-w-full mq750:min-w-full">
            <div className="w-[472px] flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[700px] w-full absolute !m-[0] right-[0px] bottom-[-435px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white" />
              <img
                className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
                alt=""
                src="/v5orbx4n-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq1050:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[287px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
                    <i className="flex-1 relative leading-[49px] inline-block font-bold max-w-full z-[1] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      Study Visa
                    </i>
                  </div>
                  <i className="w-[427px] relative text-xl leading-[150%] inline-block font-bold text-left max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
                    We assists students in navigating the complex process of
                    obtaining visas for education abroad. We provide guidance on
                    application procedures, required documents, and offer
                    support to ensure students meet all necessary requirements
                    for studying in their desired country.
                  </i>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[284px] max-w-full">
                  <i className="self-stretch relative leading-[49px] font-bold z-[3] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                    Tourist Visa
                  </i>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-left text-xl">
                    <i className="flex-1 relative leading-[150%] inline-block font-bold max-w-full z-[3] mq450:text-base mq450:leading-[24px]">
                      We facilitates travelers in securing visas for leisure
                      trips abroad. We streamline the application process,
                      advise on required documentation, and ensure compliance
                      with visa regulations. And help travelers navigate the
                      bureaucratic procedures to enjoy hassle-free journeys to
                      their desired destinations.
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[469px] flex flex-col items-start justify-start gap-[18px] min-w-[469px] max-w-full mq750:min-w-full mq1225:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[700px] w-[472px] absolute !m-[0] bottom-[-435px] left-[-3px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white z-[4]" />
              <img
                className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[5]"
                loading="lazy"
                alt=""
                src="/images-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[17px] box-border max-w-full">
              <i className="flex-1 relative leading-[49px] inline-block font-bold max-w-full z-[5] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                Work Visa
              </i>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[22px] box-border max-w-full text-left text-xl">
              <i className="flex-1 relative leading-[150%] inline-block font-bold max-w-full z-[5] mq450:text-base mq450:leading-[24px]">{`We specializes in assisting individuals seeking employment opportunities abroad. We provide guidance on visa application procedures, necessary documentation, and ensure compliance with immigration laws. `}</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
