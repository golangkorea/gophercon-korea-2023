import { Sponsor } from "@/constants/sponsors";
import { gsap } from "gsap";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "react-use";
import Gopher from "/public/images/gopher.png";

interface SponsorCardProps extends Sponsor {}
const SponsorCard: React.FC<SponsorCardProps> = ({ ...props }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isDetail, setIsDetail] = React.useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const { name, thumbnail, youtube, logo, link, service, description, detail } = props;
  const { width } = useWindowSize();

  const zoomInAnimation = React.useCallback(() => {
    let tl = gsap.timeline();
    tl.to(cardRef.current, {
      duration: 0.3,
      scale: 0,
    })
      .to(cardRef.current, {
        duration: 0.1,
        position: "absolute",
        width: 800,
        height: 900,
        zIndex: 1000,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
      })
      .to(cardRef.current, {
        duration: 0.3,
        scale: 1,
      });
    setIsDetail(true);
  }, []);

  const zoomOutAnimation = React.useCallback(() => {
    let tl = gsap.timeline();
    tl.to(cardRef.current, {
      duration: 0.3,
      scale: 0,
    })
      .to(cardRef.current, {
        duration: 0.1,
        width: 500,
        height: 500,
        left: "unset",
        top: "unset",
        right: "unset",
        bottom: "unset",
        margin: "unset",
        position: "relative",
        zIndex: 0,
      })
      .to(cardRef.current, {
        duration: 0.3,
        scale: 1,
      });
    setIsDetail(false);
  }, []);

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => {
        let tl = gsap.timeline();
        tl.to(cardRef.current, {
          duration: 0.5,
          scale: 0,
        }).to(cardRef.current, {
          duration: 0.5,
          opacity: 1,
          scale: 1,
        });
      }, 200);
    }
  }, [inView]);

  const handleZoom = React.useCallback(() => {
    if (width < 768) {
      window.open(link, "_blank");
      return;
    }
    if (isDetail) {
      zoomOutAnimation();
    } else {
      zoomInAnimation();
    }
  }, [isDetail, width, link]);

  const openHomepage = (e: any) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  React.useEffect(() => {
    if (isDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDetail]);

  if (!width) return null;

  return (
    <>
      <div
        className='h-[500px] w-[500px] scale-0 cursor-pointer rounded-xl bg-white shadow-2xl max-lg:w-full max-lg:scale-100'
        onClick={handleZoom}
        ref={cardRef}
      >
        {width > 768 && <div ref={ref} />}
        {!isDetail && (
          <>
            <div className='flex h-16 w-full items-center justify-between gap-2 rounded-t-xl bg-white px-5 py-2 shadow-md'>
              <div className='flex gap-2'>
                <div className='h-4 w-4 cursor-pointer rounded-full bg-red-400' />
                <div className='h-4 w-4 rounded-full bg-yellow-400' />
                <div className='z-[10000] h-4 w-4 cursor-pointer rounded-full bg-green-400' />
              </div>
              <div className='flex h-full w-full items-center justify-center rounded-2xl border border-gray-200'>
                <p className='text-xl tracking-wide'>{name}</p>
              </div>
              <img src={Gopher.src} alt={"gopher"} className='h-12 w-12 rounded-full border border-gray-200 p-1' />
            </div>
            <div className='flex h-full flex-col'>
              {thumbnail && <img src={thumbnail} alt={name} className='h-[250px] w-full' />}
              <div className='whitespace-pre-line p-4'>{description}</div>
            </div>
          </>
        )}
        {isDetail && (
          <>
            <div className='flex h-16 items-center justify-between gap-2 px-5 py-2 shadow-2xl'>
              <div className='flex gap-2'>
                <div className='h-4 w-4 rounded-full bg-red-400' />
                <div className='h-4 w-4 rounded-full bg-yellow-400' />
                <div className='h-4 w-4 rounded-full bg-green-400' />
              </div>
              <div className='flex h-full w-full items-center justify-center rounded-2xl border border-gray-200'>
                <p className='text-xl tracking-wide'>{name}</p>
              </div>
              <img src={Gopher.src} alt={"gopher"} className='h-12 w-12 rounded-full border border-gray-200 p-1' />
            </div>
            <div className='relative flex flex-1 flex-col'>
              {thumbnail && <img src={thumbnail} alt={name} className='h-[350px] w-full' />}
              <div className='h-full p-4'>
                <p className='mb-4 text-3xl font-semibold tracking-wider'>{service}</p>
                <div className='mb-4 whitespace-pre-line text-xl tracking-wide'>{detail}</div>
                <img src={logo} alt={logo} className='mb-4 mt-4 w-52' />
                <a onClick={openHomepage} className='z-50 cursor-pointer text-xl font-semibold text-blue-500'>
                  {`홈페이지 바로가기 >`}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      {isDetail && (
        <div className='fixed left-0 top-0 z-30 h-screen w-screen bg-overlay50' onClick={zoomOutAnimation} />
      )}
    </>
  );
};

export default React.memo(SponsorCard);