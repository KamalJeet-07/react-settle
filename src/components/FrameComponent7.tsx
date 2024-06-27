import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1416px] flex flex-col items-end justify-start pt-0 pb-[385px] pr-5 pl-0 box-border gap-[69px] max-w-full text-left text-xl text-black font-inria-serif mq750:gap-[34px] mq750:pb-[250px] mq750:box-border mq450:gap-[17px] ${className}`}
    >
      <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-black" />
      <div className="w-[1313px] flex flex-row items-start justify-end py-0 px-10 box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1225:flex-wrap">
          <div className="w-[551px] flex flex-row items-start justify-start relative min-w-[551px] max-w-full mq750:min-w-full mq1225:flex-1">
            <img
              className="h-[688px] w-[1455px] absolute !m-[0] right-[-781px] bottom-[-438px] rounded-3xs object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/xzxbytb5-1@2x.png"
            />
            <b className="flex-1 relative leading-[150%] inline-block max-w-full z-[3] mq450:text-base mq450:leading-[24px]">
              We are Settling Abroad, your dedicated partners in exploring the
              world. With a passion for travel and years of experience, we craft
              seamless journeys tailored to your dreams. Whether you seek
              adventure, relaxation, or cultural immersion, we are here to turn
              your wanderlust into unforgettable experiences
            </b>
          </div>
          <div className="w-[440px] flex flex-col items-start justify-end pt-0 px-0 pb-[27px] box-border max-w-full text-17xl text-white">
            <b className="self-stretch relative leading-[150%] z-[3] mq750:text-10xl mq750:leading-[43px] mq450:text-3xl mq450:leading-[32px]">
              Who We Are
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
