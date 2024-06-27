import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";

const LandingPage = () => {
  const navigate = useNavigate();

  const onPrimaryButtonClick = useCallback(() => {
    navigate("/contact-form");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[53px] leading-[normal] tracking-[normal] text-left text-17xl text-black font-inria-serif mq750:gap-[26px]">
      <FrameComponent />
      <div className="w-[472px] !m-[0] absolute top-[1001px] left-[484px] flex flex-row items-start justify-start max-w-full">
        <div className="h-[700px] w-full absolute !m-[0] right-[0px] bottom-[-430px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white z-[2]" />
        <img
          className="h-[267px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[3]"
          alt=""
          src="/94oxzk0i-1@2x.png"
        />
      </div>
      <div className="w-[892px] flex flex-row items-start justify-center pt-0 px-5 pb-[140px] box-border max-w-full mq750:pb-[91px] mq750:box-border">
        <div className="w-[704px] flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[73px] max-w-full mq750:gap-[36px] mq450:gap-[18px]">
              <div className="w-[372px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                  <b className="flex-1 relative leading-[150%] inline-block max-w-full z-[1] mq750:text-10xl mq750:leading-[43px] mq450:text-3xl mq450:leading-[32px]">
                    SETTLING
                  </b>
                </div>
                <b className="self-stretch relative leading-[150%] text-deepskyblue z-[1] mq750:text-10xl mq750:leading-[43px] mq450:text-3xl mq450:leading-[32px]">
                  ABROAD
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-13xl">
                <blockquote className="m-0 flex-1 relative leading-[150%] font-bold inline-block max-w-full z-[1] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                  “Acino your study abroad experience”
                </blockquote>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer py-[19px] pr-14 pl-[57px] bg-lightblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-skyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200"
            onClick={onPrimaryButtonClick}
          >
            <b className="relative text-5xl leading-[150%] inline-block font-inria-serif text-black text-left [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[117px]">
              Apply Now
            </b>
          </button>
        </div>
      </div>
      <div className="w-[472px] !m-[0] absolute top-[1784px] left-[484px] flex flex-row items-start justify-start max-w-full">
        <div className="h-[700px] w-full absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white z-[1]" />
        <img
          className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[3]"
          alt=""
          src="/download-1@2x.png"
        />
      </div>
      <div className="w-[472px] !m-[0] absolute top-[2570px] left-[484px] flex flex-row items-start justify-start max-w-full">
        <div className="h-[700px] w-full absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white z-[1]" />
        <img
          className="h-[262px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[3]"
          alt=""
          src="/images-1-1@2x.png"
        />
      </div>
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <section className="w-full h-[724px] absolute !m-[0] top-[160px] right-[0px] left-[0px] rounded-3xs bg-gray-100 box-border border-[1px] border-solid border-black" />
      <FrameComponent6 />
      <FrameComponent7 />
      <section className="w-full h-[688px] absolute !m-[0] top-[196px] right-[0px] left-[0px]">
        <img
          className="absolute top-[519px] left-[-161px] rounded-[600px] w-[1970.5px] h-[169px] z-[1]"
          alt=""
          src="/rectangle-12.svg"
        />
        <div className="absolute top-[0px] left-[802px] rounded-[360px] w-[598px] h-[547px] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0px] top-[4px] [transform:scale(1.106)]"
            loading="lazy"
            alt=""
            src="/borcelle-school-1@2x.png"
          />
        </div>
        <div className="absolute top-[5px] left-[131px] rounded-[50%] bg-gainsboro-300 w-[11px] h-[7px] z-[1]" />
      </section>
      <section className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-end justify-start pt-px pb-[39px] pr-[79px] pl-[63px] box-border gap-[44px] max-w-full text-left text-13xl text-black font-inria-serif mq750:gap-[22px] mq750:pl-[31px] mq750:pr-[39px] mq750:box-border">
        <div className="w-[1281px] h-px relative box-border max-w-full border-t-[1px] border-solid border-gainsboro-100" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[297px] flex flex-col items-start justify-start gap-[14px] min-w-[297px] mq1050:flex-1">
              <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                <b className="relative leading-[150%] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                  Settling Abroad
                </b>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start text-xl">
                <div className="self-stretch flex flex-row items-end justify-start gap-[7px]">
                  <div className="h-[108px] w-[87px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-[87px] h-[60px] object-cover"
                      alt=""
                      src="/whatsapplogowine-1@2x.png"
                    />
                    <img
                      className="absolute top-[48px] left-[0px] w-[87px] h-[60px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/whatsapplogowine-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                        <b className="flex-1 relative leading-[150%] whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                          +44 7440 101043
                        </b>
                      </div>
                      <b className="self-stretch relative leading-[150%] whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                        +44 7385 171877
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[275px] flex flex-row items-start justify-end py-0 px-0.5 box-border">
                  <div className="flex-1 flex flex-row items-end justify-start gap-[32px] mq450:gap-[16px]">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                      <img
                        className="w-[38px] h-8 relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/download-3@2x.png"
                      />
                    </div>
                    <b className="flex-1 relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                      @settlingabroad_
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[620px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[620px] max-w-full text-base text-darkslategray-100 font-small-text mq1050:flex-1 mq1050:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[29.5px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
                  <div className="self-stretch relative leading-[150%] font-medium text-black">
                    Topic
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Home
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
                  <div className="self-stretch relative leading-[150%] font-medium text-black">
                    Topic
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[140px]">
                  <div className="self-stretch relative leading-[150%] font-medium text-black">
                    Topic
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Page
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
