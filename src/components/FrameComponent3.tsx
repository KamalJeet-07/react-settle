import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[205px] pr-5 pl-[21px] box-border max-w-full text-center text-13xl text-black font-inria-serif mq1050:pb-[133px] mq1050:box-border mq450:pb-[86px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[3px] max-w-full mq1225:flex-wrap">
        <div className="w-[472px] flex flex-col items-end justify-start gap-[15px] min-w-[472px] max-w-full mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[700px] w-full absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white" />
            <img
              className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[2]"
              alt=""
              src="/kdlmzqwl-1@2x.png"
            />
          </div>
          <div className="w-[459px] flex flex-row items-start justify-end py-0 px-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
              <i className="self-stretch relative leading-[49px] font-bold z-[1] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                Aid In Assessment
              </i>
              <i className="w-[427px] relative text-xl leading-[150%] inline-block font-bold text-left max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
                We supports individuals or organizations in evaluating skills,
                capabilities, or projects. We provide tools, expertise, and
                feedback to ensure accurate assessments. And enhance
                decision-making processes by offering insights and
                recommendations based on thorough evaluation and analysis.
              </i>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[15px] min-w-[600px] max-w-full mq750:min-w-full">
          <div className="w-[472px] flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[700px] w-full absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white" />
            <img
              className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[4]"
              loading="lazy"
              alt=""
              src="/ioefmum4-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start gap-[11px] max-w-full mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[294px] max-w-full mq450:gap-[20px]">
                <i className="w-[437px] relative leading-[100%] flex font-bold items-center justify-center max-w-full z-[2] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
                  Assisting With Accomodation
                </i>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[25px] box-border max-w-full text-left text-xl">
                  <i className="flex-1 relative leading-[150%] inline-block font-bold max-w-full z-[2] mq450:text-base mq450:leading-[24px]">
                    We aids clients in finding suitable housing, negotiating
                    leases, and addressing relocation needs. We provide guidance
                    on rental markets, neighborhood suitability, and legal
                    requirements. And facilitate smooth transitions and ensure
                    clients secure comfortable living arrangements tailored to
                    their preferences and circumstances.
                  </i>
                </div>
              </div>
              <div className="w-[441px] flex flex-col items-start justify-start gap-[30px] min-w-[441px] max-w-full mq750:min-w-full mq1050:flex-1">
                <i className="self-stretch relative leading-[49px] font-bold z-[1] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                  Institution Selection
                </i>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full text-left text-xl">
                  <i className="flex-1 relative leading-[150%] inline-block font-bold max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
                    We assists students in choosing suitable educational
                    institutions. We evaluate academic goals, preferences, and
                    financial constraints to recommend suitable schools or
                    universities. And provide insights on programs, facilities,
                    and admissions processes, ensuring students make informed
                    decisions about their educational paths.
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
