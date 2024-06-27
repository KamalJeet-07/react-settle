import ConsultantColumns from "./ConsultantColumns";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[143px] pr-5 pl-[21px] box-border max-w-full text-center text-13xl text-black font-inria-serif mq750:pb-[93px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[2px] max-w-full mq1225:flex-wrap">
        <ConsultantColumns
          careerCounseling56a0f2ae5="/careercounseling56a0f2ae5f9b58eba4b575ac-1@2x.png"
          carrerConsultant="Carrer Consultant"
          weOffersPersonalizedGuida="We offers personalized guidance to individuals seeking career advancement. We assess skills, interests, and goals to provide strategic advice on job searches, resume building, and interview preparation. We  empower clients with tools and insights to achieve their professional aspirations effectively."
        />
        <div className="w-[450px] flex flex-col items-start justify-start pt-[277px] pb-0 pr-1.5 pl-0 box-border max-w-full mq750:pt-[180px] mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[41px] max-w-full mq450:gap-[20px]">
            <i className="self-stretch relative leading-[100%] font-bold z-[2] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
              Interview Preparaton
            </i>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full text-left text-xl">
              <i className="flex-1 relative leading-[150%] inline-block font-bold max-w-full z-[2] mq450:text-base mq450:leading-[24px]">
                We equips individuals with skills and confidence needed for
                successful job interviews. We offer mock interviews, feedback on
                performance, and strategies to handle tough questions. And help
                candidates enhance their interview techniques and improve their
                chances of securing employment opportunities.
              </i>
            </div>
          </div>
        </div>
        <ConsultantColumns
          careerCounseling56a0f2ae5="/download-2@2x.png"
          carrerConsultant="Scholarship"
          weOffersPersonalizedGuida="We connects students with funding opportunities based on academic achievements and financial need. We assist in identifying suitable scholarships, navigating application processes, and ensuring all requirements are met. "
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
