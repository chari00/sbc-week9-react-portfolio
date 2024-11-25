import "./About.css";
// import { CardSpotlight } from "../../components/ui/CardSpotlight";
import { Vortex } from "../../components/ui/Vortex";
import { WobbleCard } from "../../components/ui/WobbleCard";

const About = () => {
  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        {/* <section className="about-section">
          
          <div className="flex justify-evenly items-center flex-wrap">
            <CardSpotlight className="h-96 w-96 spotlight-card">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                My Journey began
              </p>
              <div className="text-neutral-200 mt-4 relative z-20">
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam aspernatur reiciendis tenetur illum ex nisi,
                  temporibus at et perferendis, eius doloremque ipsum atque
                  molestiae quas, omnis necessitatibus est dolore amet.
                </p>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam aspernatur reiciendis tenetur illum ex nisi, temporibus
                at et perferendis, eius doloremque ipsum atque molestiae quas,
                omnis necessitatibus est dolore amet.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-96 w-96 spotlight-card">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Currently
              </p>

              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                I am attending StepUp8 16-week Full Stack Software Development
                Bootcamp.
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                I am attending Step8Up Bootcamp, a comprehensive 16-week Full
                Stack Software Development Skills Bootcamp that covers HTML5,
                CSS3, JavaScript, React, Vite, Jest, Node.js, Python, Django,
                Git, and Agile methodologies, while also providing job readiness
                training and guaranteed job interview opportunities upon
                completion.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-96 w-96 spotlight-card">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Future Prospects
              </p>

              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                I&apos;m excited about the diverse career paths opening up for
                me in the tech industry. With my full-stack development skills,
                I could start as a junior software developer, working on both
                front-end and back-end projects. I&apos;m particularly
                interested in front-end development, where I can use my HTML,
                CSS, JavaScript and React knowledge to create engaging user
                interfaces.
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                I&apos;m committed to continuous learning in this fast-paced
                industry, and I&apos;m excited to see where my new skills will
                take me.
              </p>
            </CardSpotlight>
          </div>
        </section> */}
        <h1 id="about" className="mb-8 mt-4">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              My Journey began
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              aspernatur reiciendis tenetur illum ex nisi, temporibus at et
              perferendis, eius doloremque ipsum atque molestiae quas, omnis
              necessitatibus est dolore amet.
            </p>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              aspernatur reiciendis tenetur illum ex nisi, temporibus at et
              perferendis, eius doloremque ipsum atque molestiae quas, omnis
              necessitatibus est dolore amet.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-s">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Currently
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                I am attending StepUp8 16-week Full Stack Software Development
                Bootcamp.
              </p>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                I am attending Step8Up Bootcamp, a comprehensive 16-week Full
                Stack Software Development Skills Bootcamp that covers HTML5,
                CSS3, JavaScript, React, Vite, Jest, Node.js, Python, Django,
                Git, and Agile methodologies, while also providing job readiness
                training and guaranteed job interview opportunities upon
                completion.
              </p>
            </div>
            {/* <img
              src="/noise.webp"
              width={500}
              height={500}
              alt="linear demo img"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            /> */}
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-m">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Future Prospects
              </h2>
              <p className="mt-4 max-w-[60rem] text-left  text-base/6 text-neutral-300">
                I&apos;m excited about the diverse career paths opening up for me in
                the tech industry. With my full-stack development skills, I
                could start as a junior software developer, working on both
                front-end and back-end projects. I&apos;m particularly interested in
                front-end development, where I can use my HTML, CSS, JavaScript
                and React knowledge to create engaging user interfaces.
              </p>
              <p className="mt-4 max-w-[60rem] text-left  text-base/6 text-neutral-300">
                I&apos;m excited about the diverse career paths opening up for me in
                the tech industry. With my full-stack development skills, I
                could start as a junior software developer, working on both
                front-end and back-end projects. I&apos;m particularly interested in
                front-end development, where I can use my HTML, CSS, JavaScript
                and React knowledge to create engaging user interfaces.
              </p>
            </div>
            {/* <img
              src="/noise.webp"
              width={500}
              height={500}
              alt="linear demo img"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            /> */}
          </WobbleCard>
        </div>
      </Vortex>
    </>
  );
};

export default About;
