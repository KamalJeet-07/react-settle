import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-between py-3 pr-[83px] pl-[21px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-5xl text-black font-inria-serif mq750:pr-[41px] mq750:box-border ${className}`}
    >
      <img
        className="h-[116px] w-[199px] relative object-cover"
        loading="lazy"
        alt=""
        src="/img-20240606-165925-11@2x.png"
      />
      <div className="w-[442px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-full mq750:w-0">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-[131px] relative gap-[20px] mq450:pl-5 mq450:box-border mq750:hidden">
          <b className="relative leading-[150%] inline-block min-w-[67px]">
            About
          </b>
          <b className="relative leading-[150%] inline-block min-w-[61px]">
            Team
          </b>
          <b className="relative leading-[150%] inline-block min-w-[87px]">
            Contact
          </b>
          <b
            className="absolute !m-[0] top-[0px] left-[0px] leading-[150%] inline-block min-w-[67px] cursor-pointer z-[1]"
            onClick={onHomeTextClick}
          >
            Home
          </b>
        </div>
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
