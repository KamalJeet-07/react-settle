import { useMemo } from "react";
import PropTypes from "prop-types";

const Input = ({
  className = "",
  firstName,
  labelPlaceholder,
  propWidth,
  propPadding,
  propAlignSelf,
}) => {
  const inputStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  return (
    <div
      className={`w-[295px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] text-left text-xl text-white font-inria-serif ${className}`}
      style={inputStyle}
    >
      <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
        {firstName}
      </b>
      <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-start justify-start pt-2.5 px-[15px] pb-[9px] border-[1px] border-solid border-gainsboro-200">
        <input
          className="w-full [border:none] [outline:none] inline-block font-inria-serif text-xl bg-[transparent] h-[30px] flex-1 relative leading-[150%] font-bold text-gray-200 text-left min-w-[158px] p-0 mq450:text-base mq450:leading-[24px]"
          placeholder={labelPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  labelPlaceholder: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Input;
