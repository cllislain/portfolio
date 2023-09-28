import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] w-50% mx-auto flex flex-row items-center gap-4`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white pt-10 pb-0`}>
            Hi, <span className='text-[#915EFF]'>Lislain</span> here👋.
          </h1>
          <p className={`${styles.heroSubText}`}>I'm a <span className='text-[#915EFF]'>
            <TypeAnimation
              sequence={[
                'Developer', 
                1000, 
                'Coder', 
                2000, 
                'Designer', 
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', display: 'inline-block' }}
        />
        .</span>
        </p>
        <p className={`${styles.heroDescriptionText} w-90`}>I design and develop visually appealing web applications.</p>
        </div>
      </div>

        <div className='absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition= {{
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />

              </div>
            </a>
        </div>
    </section>
  )
}

export default Hero