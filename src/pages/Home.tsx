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
  const level2Ref = useRef<HTMLDivElement>(null);
  const level3Ref = useRef<HTMLDivElement>(null);
  const theEndRef = useRef<HTMLDivElement>(null);

  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

return (
<div className="bg-black relative overflow-hidden">
  <section ref={onTheSpectrumRef} className="relative on-the-spectrum" title="ON THE SPECTRUM">
    <OnTheSpectrum offsetY={offsetY} />
    <div style={{ transform: `translateY(${(offsetY - (onTheSpectrumRef.current?.offsetTop ? onTheSpectrumRef.current.offsetTop: 0)) * 0.8}px)` }} className="absolute top-0 left-0 right-0 bottom-0 text-center space-y-4 pt-16">
      <h1 className="text-7xl">ON THE SPECTRUM:</h1>
      <h1 className="text-5xl">The Food Court Experience</h1>
      <p className="italic text-[#6E2405] text-2xl">By: Zeina Tahoun</p>
      <p className="text-xl pt-6 mx-40">This is an audio experience to portray hearing hypersensitivity in the 3 levels of Autism Spectrum Disorder (ASD). According to DSM-5 Autism Diagnostic Criterea Hypersensitivity is an exaggeration or hypereactivity to sensory input or unusual interests in sensory aspects of the environment (e.g. adverse response to specific sounds). This experience is not an accurate representation of all cases of hypersensitivity, rather an idea to raise empathy and awareness.</p>
    </div>
  </section>

  <section ref={offTheSpectrumRef} className="relative overflow-hidden off-the-spectrum" title="OFF THE SPECTRUM">
    <OffTheSpectrum sectionRef={offTheSpectrumRef} offsetY={offsetY} />
    <div ref={offTheSpectrumChildRef} style={{ transform: `translateY(${(offsetY * 0.5 - (offTheSpectrumRef.current?.offsetTop ? offTheSpectrumRef.current.offsetTop: 0)) + (offTheSpectrumRef.current ? offTheSpectrumRef.current.getBoundingClientRect().height * 0.5: 0)}px)` }} className="absolute text-white top-0 left-0 right-0 bottom-0 text-center space-y-4">
      <h1 className="text-8xl">OFF THE SPECTRUM</h1>
      <p className="text-xl pt-8 mx-60">This section sets the tone to the rest of the experience. Press play to hear the unedited audio, fix the volume of your device now and make sure you do not mess with it during the rest of your time On The Spectrum. </p>
      <audio controls className="mx-auto">
      <source src="/audio/offthespectrum.wav" type="audio/wav" />
      </audio>
    </div>
  </section>

  <section ref={level1Ref} className="relative overflow-hidden" title="LEVEL 1">
    <Level1 sectionRef={level1Ref} offsetY={offsetY} />
    <div style={{ transform: `translateY(${(offsetY - (level1Ref.current?.offsetTop ? level1Ref.current.offsetTop: 0)) * 0.4 + (level1Ref.current ? level1Ref.current.getBoundingClientRect().height * 0.25: 0)}px)` }} className="absolute text-white top-0 left-0 right-0 bottom-0 text-center space-y-4 pt-16">
      <h1 className="text-8xl">LEVEL 1</h1>
      <p className="text-xl pt-8 mx-60"> Level 1 Autism, also known as high-functioning autism, exhibits the mildest symptoms that do not get in the way of daily functioning. On this level of the spectrum hypersensitivity is the least severe. For every level, do not pause previous audio. You do not have to wait for entire audio to finish to press play on the next one and keep scrolling!</p>
      <audio controls className="mx-auto">
      <source src="/audio/spectrum_Level1.wav" type="audio/wav" />
      </audio>
    </div>
  </section>

  <section ref={level2Ref} className="relative overflow-hidden" title="LEVEL 2">
    <Level2 sectionRef={level2Ref} offsetY={offsetY} />
    <div style={{ transform: `translateY(${(offsetY - (level2Ref.current?.offsetTop ? level2Ref.current.offsetTop: 0)) * 0.4 + 200}px)` }} className="absolute text-black top-0 left-0 right-0 bottom-0 text-center space-y-4">
      <h1 className="text-8xl">LEVEL 2</h1>
      <p className="text-xl pt-8 w-[36rem] mx-auto">Level 2 Autism requires more substantial support when compared to level 1. Level 2 ASD is characterized as somewhat severe. On this level of the spectrum hypersensitivity is mild. Press play and listen to the difference!</p>
      <audio controls className="mx-auto mt-2">
      <source src="/audio/spectrum_Level2.wav" type="audio/wav" />
      </audio>
    </div>
  </section>

  <section ref={level3Ref} className="relative overflow-hidden bg-white pt-60" title="LEVEL 3">
    <Level3 sectionRef={level3Ref} offsetY={offsetY} />
    <div style={{ transform: `translateY(${offsetY * 0.375 - (level3Ref.current ? level3Ref.current?.getBoundingClientRect().height: 0)}px)` }} className="absolute text-black -top-32 left-0 right-0 bottom-0 text-center space-y-4">
      <h1 className="text-8xl">Level 3</h1>
      <p className="text-xl pt-8 mx-60"> Level 3 Autism, also known as severe autism, requires an amount of additional support needed to succeed in daily life functioning. On this level of the spectrum hypersensitivity is the most severe. Press play to feel the intensity!</p>
      <audio controls className="mx-auto">
      <source src="/audio/spectrum_Level3.wav" type="audio/wav" />
      </audio>
    </div>
  </section>

  <section ref={theEndRef} className="relative overflow-hidden" title="THE END">
    <TheEnd sectionRef={theEndRef} offsetY={offsetY} />
    <div style={{ transform: `translateY(${offsetY * 0.375 - (theEndRef.current ? (theEndRef.current?.getBoundingClientRect().height * 3.475): 0)}px)` }} className="absolute text-black -top-20 right-32 text-center space-y-4">
      <h1 className="text-[white] text-8xl mr-12">The End</h1>
      <p className="text-[white] text-xl pt-8 text-center max-w-[42rem]">Hope you learned something new about what it is like being On The Spectrum and enjoyed The Food Court Experience! To know more about ASD click on the link below.</p>
      <a className="text-[blue] underline text-xl pt-8 text-center mx-auto" target="_blank" href="https://www.autismspeaks.org/autism-diagnostic-criteria-dsm-5">https://www.autismspeaks.org/autism-diagnostic-criteria-dsm-5</a>
    </div>
  </section>
</div>
);
};

export default Home;