import Image from 'next/image'
import propic from '../public/ProfilePic.png'
import Particles from './components/particles'
import {IoDocumentText} from 'react-icons/io5'
import {IoLogoLinkedin} from 'react-icons/io5'
import {IoLogoGithub} from 'react-icons/io5'
import {IoCaretDownCircleOutline} from 'react-icons/io5'
import Panel from './components/panels'

export default function Home() {
  return (
    <main>
      <div className='snap-y snap-mandatory h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <Particles
          className="absolute inset-0 -z-10 animate-title bg-dark-violet"
          quantity={100}
        />
        <div className='flex snap-start h-screen w-screen'> 
          <div className='text-center m-auto'>
            <ul className='flex flex-row justify-center h-auto p-14'>
              <li className='basis-1 px-8'>
              <a href="https://drive.google.com/file/d/1tOWZzemTzA2dCMJNaVnbrOyYPa2QHqZM/view?usp=sharing">
                  <h1 className='text-pastel-pink text-opacity-60 hover:text-opacity-100 cursor-pointer animate-fade-in'>
                    Resume
                  </h1>
                </a>
              </li>
              <li className='basis-1 px-8'>
              <a href="mailto: nvikelo2000@gmail.com">
                  <h1 className='text-pastel-pink text-opacity-60 hover:text-opacity-100 cursor-pointer animate-fade-in'>
                    Contact
                  </h1>
                </a>
              </li>
            </ul>
            <h1 className='text-3xl md:text-6xl font-poppins text-off-white py-6 animate-title'>
              Nvikelo Nyathi
            </h1>
            <div className='flex flex-col md:flex-row items-center justify-center animate-fade-in'>
              <div className=' drop-shadow-xl '>
                <Image src={propic} alt="none" className='h-32 w-32 border-2 '/>
              </div>
              <p className='w-72 md:w-96 text-sm md:text-lg md:max-w-md px-1 text-pastel-pink text-opacity-60 '>
                Hey, I&apos;m Nvikelo. Im a Front-End Web Developer and Game Developer
                based out of British Columbia, Canada.
              </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center '>
              <ul className='flex justify-center md:justify-start animate-fade-in'>
                <li className='py-6 px-3'>
                  <a href="https://github.com/Nyavix"><IoLogoGithub className='text-off-white text-3xl drop-shadow-xl  hover:animate-wiggle'/></a>
                </li>
                <li className='py-6 px-3'>
                  <a href="https://drive.google.com/file/d/1tOWZzemTzA2dCMJNaVnbrOyYPa2QHqZM/view?usp=sharing"><IoDocumentText className='text-off-white text-3xl drop-shadow-xl  hover:animate-wiggle'/></a>
                </li>
                <li className='py-6 px-3'>
                  <a href="https://www.linkedin.com/in/nvikelonyathi/"><IoLogoLinkedin height={32} className='text-off-white text-3xl drop-shadow-xl  hover:animate-wiggle'/></a>
                </li>
              </ul>
              <div className='w-26 md:w-80 p-6 flex text-pastel-pink text-opacity-50 animate-pulse justify-center '>
                <h1 className='animate-fade-in'>Scroll For Projects</h1>
                <IoCaretDownCircleOutline className='m-1 text-lg animate-fade-in'/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='snap-start h-screen w-screen bg-dev-pattern'>
          <div className='py-12 px-6 xl:px-48 flex justify-between'>
            <h1 className='text-5xl text-off-white font-poppins'>Projects</h1>
            <a href="https://drive.google.com/file/d/1tOWZzemTzA2dCMJNaVnbrOyYPa2QHqZM/view?usp=sharing">
              <h1 className='text-pastel-pink text-right px-4 text-opacity-60 hover:text-opacity-100 cursor-pointer animate-fade-in'>
                Resume
              </h1>
            </a>
          </div>
          <div className=' h-px mx-12 md:mx-24 bg-gradient-to-r from-off-white'></div>
          <div className='justify-center p-4 shadow-lg flex flex-wrap gap-6 md:mx-12 xl:mx-48 my-8 h-3/4 overflow-y-auto lg:overflow-x-auto'>
          {/* Push */}
          <Panel 
            ProjectName='Push'
            Description='An immersive 3D side-scroller horror shooter Metroidvania game,
            leveraging my skills in game design, programming, and level creation' 
            ToolsUsed='Tools used: C#, Unity 3D, Blender, Photoshop'
            WebLink='https://mentalpizza.itch.io/push'
            TypeNumber={1}/>
            {/* Web Portfolio */}
            <Panel
            ProjectName='NvikeloNyathi.com'
            Description='The website you are looking at.' 
            ToolsUsed='Tools used: NextJS, Tailwind, Visual Studio Code'
            WebLink=''
            TypeNumber={2}/>

            <Panel 
            ProjectName='Soulless'
            Description='Collaborated with a multidisciplinary team to bring "Soulless" 
            to life, taking an active role in creating atmospheric environments,
            sound engineering and programming.
            Made for Global Game Jam 2022.'
            ToolsUsed='Tools used: Unity 3D, C#, Ableton Live'
            WebLink='https://mentalpizza.itch.io/soulless'
            TypeNumber={1}/>

            <Panel 
            ProjectName='Lost & Found'
            Description='Demonstrated creativity and attention to detail in designing 
            visually striking assets, including eerie character models, atmospheric 
            lighting, and haunting sound effects, enhancing the overall player experience. 
            Made for Global Game Jam 2021.'
            ToolsUsed='Tools used: Unity 3D, Blender 3D, Photoshop'
            WebLink='https://rabidblueberry.itch.io/william-billiams-big-adventure'
            TypeNumber={1}/>

            <Panel 
            ProjectName='NotoAPP'
            Description='Android note taking application with a simple yet beautiful ui design' 
            ToolsUsed='Tools used: Android Studio, Java'
            WebLink='https://github.com/Nyavix/NotoAPP/tree/master/app'
            TypeNumber={3}/>

            <Panel 
            ProjectName='Overhaul'
            Description='A game made for Global Game Jam 2020' 
            ToolsUsed='Tools used: Unity 3D, C#, Photoshop, Ableton Live'
            WebLink='https://globalgamejam.org/2020/games/overhaul-6-0'
            TypeNumber={1}/>
            
          </div>
        </div>
      </div>
    </main>
  )
}
