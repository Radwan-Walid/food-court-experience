import { useEffect, useRef, useState } from "react";
import OnTheSpectrum from "../svgs/OnTheSpectrum";
import TheEnd from "../svgs/TheEnd";
import OffTheSpectrum from "../svgs/OffTheSpectrum";
import Level1 from "../svgs/Level1";
import Level2 from "../svgs/Level2";
import Level3 from "../svgs/Level3";

const Home = () => {

  const onTheSpectrumRef = useRef<HTMLDivElement>(null);
  const offTheSpectrumRef = useRef<HTMLDivElement>(null);
  const offTheSpectrumChildRef = useRef<HTMLDivElement>(null);
  const level1Ref = useRef<HTMLDivElement>(null);
  const level1ChildRef = useRef<HTMLDivElement>(null);
  const level2Ref = useRef<HTMLDivElement>(null);
  const level2ChildRef = useRef<HTMLDivElement>(null);
  const level3Ref = useRef<HTMLDivElement>(null);
  const leve3ChildRef = useRef<HTMLDivElement>(null);
  const theEndRef = useRef<HTMLDivElement>(null);
  const theEndChildRef = useRef<HTMLDivElement>(null);

  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    console.log(offTheSpectrumRef.current?.getBoundingClientRect().height, window.scrollY);
  }, [])

  return (
    <div className="bg-black relative overflow-hidden">
      <section ref={onTheSpectrumRef} className="relative on-the-spectrum" title="ON THE SPECTRUM">
        <OnTheSpectrum offsetY={offsetY} />
        <div style={{ transform: `translateY(${(offsetY - (onTheSpectrumRef.current?.offsetTop ? onTheSpectrumRef.current.offsetTop: 0)) * 0.8}px)` }} className="absolute top-0 left-0 right-0 bottom-0 text-center space-y-4 pt-16">
          <h1 className="text-8xl">ON THE SPECTRUM</h1>
          <p className="text-[#6E2405] text-5xl">The Food Court Experience</p>
          <p className="text-xl pt-8 mx-60">This is an audio experience to portray hypersensitivity  in the three levels of Autism Spectrum Disorder (ASD). The three levels can be used as a springbroad to better understand that autistic people have a variety of presentations.</p>
        </div>
      </section>

      <section ref={offTheSpectrumRef} className="relative overflow-hidden off-the-spectrum" title="OFF THE SPECTRUM">
        <OffTheSpectrum sectionRef={offTheSpectrumRef} offsetY={offsetY} />
        <div ref={offTheSpectrumChildRef} style={{ transform: `translateY(${(offsetY * 0.5 - (offTheSpectrumRef.current?.offsetTop ? offTheSpectrumRef.current.offsetTop: 0)) + (offTheSpectrumRef.current ? offTheSpectrumRef.current.getBoundingClientRect().height * 0.5: 0)}px)` }} className="absolute text-white top-0 left-0 right-0 bottom-0 text-center space-y-4">
          <h1 className="text-8xl">OFF THE SPECTRUM</h1>
          <p className="text-xl pt-8 mx-60">There's only one rule to this experience. Setup the volume of your device now to where you are comfortable and do not change it until the end of the expereince.</p>
          <audio controls className="mx-auto">
            <source src="/audio/" type="audio/m4" />
          </audio>
        </div>
      </section>

      <section ref={level1Ref} className="relative overflow-hidden" title="LEVEL 1">
        <Level1 sectionRef={level1Ref} offsetY={offsetY} />
        <div style={{ transform: `translateY(${(offsetY - (level1Ref.current?.offsetTop ? level1Ref.current.offsetTop: 0)) * 0.4 + (level1Ref.current ? level1Ref.current.getBoundingClientRect().height * 0.25: 0)}px)` }} className="absolute text-white top-0 left-0 right-0 bottom-0 text-center space-y-4 pt-16">
          <h1 className="text-8xl">LEVEL 1</h1>
          <p className="text-xl pt-8 mx-60">There's only one rule to this experience. Setup the volume of your device now to where you are comfortable and do not change it until the end of the expereince.</p>
          <audio controls className="mx-auto">
            <source src="/audio/" type="audio/m4" />
          </audio>
        </div>
      </section>

      <section ref={level2Ref} className="relative overflow-hidden" title="LEVEL 2">
        <Level2 sectionRef={level2Ref} offsetY={offsetY} />
        <div style={{ transform: `translateY(${(offsetY - (level2Ref.current?.offsetTop ? level2Ref.current.offsetTop: 0)) * 0.4 + 200}px)` }} className="absolute text-black top-0 left-0 right-0 bottom-0 text-center space-y-4">
          <h1 className="text-8xl">LEVEL 2</h1>
          <p className="text-xl pt-8 w-[36rem] mx-auto">There's only one rule to this experience. Setup the volume of your device now to where you are comfortable and do not change it until the end of the expereince.</p>
          <audio controls className="mx-auto mt-2">
            <source src="/audio/" type="audio/m4" />
          </audio>
        </div>
      </section>

      <section ref={level3Ref} className="relative overflow-hidden bg-white pt-60" title="LEVEL 3">
        <Level3 sectionRef={level3Ref} offsetY={offsetY} />
        <div style={{ transform: `translateY(${offsetY * 0.375 - (level3Ref.current ? level3Ref.current?.getBoundingClientRect().height: 0)}px)` }} className="absolute text-black -top-32 left-0 right-0 bottom-0 text-center space-y-4">
          <h1 className="text-8xl">Level 3</h1>
          <p className="text-xl pt-8 mx-60">There's only one rule to this experience. Setup the volume of your device now to where you are comfortable and do not change it until the end of the expereince.</p>
          <audio controls className="mx-auto">
            <source src="/audio/" type="audio/m4" />
          </audio>
        </div>
      </section>

      <section ref={theEndRef} className="relative overflow-hidden" title="THE END">
        <TheEnd sectionRef={theEndRef} offsetY={offsetY} />
        <div style={{ transform: `translateY(${offsetY * 0.375 - (theEndRef.current ? (theEndRef.current?.getBoundingClientRect().height * 3.475): 0)}px)` }} className="absolute text-black -top-20 right-32 text-right space-y-4">
          <h1 className="text-8xl mr-12">The End</h1>
          <p className="text-xl pt-8 text-center max-w-[42rem]">There's only one rule to this experience. Setup the volume of your device now to where you are comfortable and do not change it until the end of the expereince.</p>
          <audio controls className="mx-auto">
            <source src="/audio/" type="audio/m4" />
          </audio>
        </div>
      </section>
    </div>
  );
};

export default Home;