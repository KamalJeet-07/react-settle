import PropTypes from "prop-types";

const ConsultantColumns = ({
  className = "",
  careerCounseling56a0f2ae5,
  carrerConsultant,
  weOffersPersonalizedGuida,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[15px] min-w-[307px] max-w-full text-center text-13xl text-black font-inria-serif mq1225:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[700px] w-[472px] absolute !m-[0] right-[-3px] bottom-[-438px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white" />
        <img
          className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[2]"
          alt=""
          src={careerCounseling56a0f2ae5}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-[21px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
          <i className="self-stretch relative leading-[49px] font-bold z-[1] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            {carrerConsultant}
          </i>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-0.5 box-border max-w-full text-left text-xl">
            <i className="flex-1 relative leading-[150%] inline-block font-bold whitespace-pre-wrap max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
              {weOffersPersonalizedGuida}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

ConsultantColumns.propTypes = {
  className: PropTypes.string,
  careerCounseling56a0f2ae5: PropTypes.string,
  carrerConsultant: PropTypes.string,
  weOffersPersonalizedGuida: PropTypes.string,
};

export default ConsultantColumns;
