import {Tilt} from 'react-tilt';
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants/'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from "framer-motion";
import { styles } from "../styles";

const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
       <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" options={{
        max:45,
        scale: 1,
        speed: 450
       }}>
        <div className='relative w=full h-[230px] items-center'>
          <img className='w-full h-full object-cover rounded-2xl' 
          src={image} 
          alt={name} />

          <div className='absolute inset-0 flex justify-end m3-3 card-img_hover'>
            <div className='black-gradient w-8 h-8 rounded-full m-1 flex justify-center items-center cursor-pointer' 
            onClick={() => window.open(source_code_link, "_blank")}>
              <img className='w-1/2 h-1/2 object-contain' src={github} alt="github" />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondarytext-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={tag.name}>
              #{tag.name}
            </p>
          ))}
        </div>
       </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
   <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Works
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn("", "", 0.1, 1)}>
          The following projects showcases the skills that I have developed throughout my learning experience. Each project has it's short description and also a link for the full source code.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (<ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />))}
      </div>
   </>
  )
}

export default SectionWrapper(Works, "")