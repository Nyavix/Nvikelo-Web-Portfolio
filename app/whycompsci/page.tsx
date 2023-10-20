"use client";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Particles from '../components/particles'

export default function App() {

  return (
    <main className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
        <Particles
          className="absolute inset-0 -z-10 animate-title bg-dark-violet"
          quantity={100}
        />
        <div className="px-8 py-12 ">
          <a href="/">
            <h1 className='text-pastel-pink px-4 text-opacity-60 hover:text-opacity-100 cursor-pointer animate-fade-in'>
                Portfolio
            </h1>
          </a>
          <h1 className='text-3xl md:text-6xl font-poppins text-center text-off-white py-6 animate-title'>
              Why Computer Science
            </h1>
        </div>
        
        <div className="xl:py-4 px-6 md:px-24 xl:px-96  animate-fade-in">
            <Accordion defaultExpandedKeys={["1"]}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem className="shadow-md px-6 py-2 text-off-white text-lg" key="1" aria-label="Accordion 1" 
      title="Overcoming Barriers, Demonstrating Resilience and Drive for Learning">
        <div className="mx-12 text-pastel-pink text-opacity-60 text-base">
          <p>Throughout my academic journey, I may not have consistently held the title of a <q>star student,</q> but my experiences and achievements beyond the classroom underscore my unwavering determination, resilience, and passion for learning.</p>
          <br />
          <p>From a young age, I embarked on a journey of self-discovery and self-improvement by delving into the world of programming at the tender age of 13. My insatiable curiosity led me down the path of game development, a field where I had no formal education or guidance. Over the past decade, I've proven that my thirst for knowledge knows no bounds.</p>
          <br />
          <p>My programming journey has taken me through the intricacies of multiple languages, including C#, Java, Python, HTML, JavaScript, and CSS. As a solo programmer, I wasn't content with merely mastering coding; I knew I needed to become a versatile all-rounder in the realm of game development. This meant acquiring skills beyond the lines of code, such as 3D modeling, sound engineering, game design, 3D animation, and video production.</p>
          <br />
          <p>In facing this immense challenge without formal training or mentorship, I had to demonstrate resilience and drive on a daily basis. I encountered countless obstacles and setbacks, but I never allowed them to deter me from my pursuit of knowledge and mastery of these skills. This journey has not only been about overcoming barriers but also about transforming myself into a well-rounded and versatile creator.</p>
          <br />
          <p>My passion for learning and my ability to adapt and persevere have been my greatest assets. These qualities, alongside my ability to acquire a diverse set of skills, have allowed me to prove that the drive to learn and overcome obstacles can lead to remarkable achievements, even in the absence of formal education. My experiences in the field of game development stand as a testament to my determination and love for continuous learning.</p>
          <br />
        </div>
      </AccordionItem>
      <AccordionItem className="shadow-lg px-6 py-2 text-off-white text-lg" key="2" aria-label="Accordion 2" 
      title="Learning Opportunities and Skill Development">
        <div className="mx-12 text-pastel-pink text-opacity-60 text-base">
          <p>Enrolling in a computer science bachelor program is a significant learning opportunity that promises to greatly enhance my existing skills while enabling the development of new ones. The multidisciplinary nature of the program will expose me to a wide array of subjects and methodologies, laying a strong foundation for a diverse skill set. Through specialized courses in programming languages, data structures, and algorithms, I can refine my coding proficiency and analytical problem-solving abilities. This will not only help me to master my current programming skills but also expand my repertoire, preparing me for a more versatile role in the tech industry.</p>
          <br />
          <p>Additionally, the program's curriculum is designed to encourage collaborative learning and teamwork, often involving group projects and assignments. This experience will nurture my interpersonal and communication skills, which are vital in the professional world. Working with classmates from diverse backgrounds and perspectives will enhance my adaptability and open-mindedness, preparing me to excel in team-based software development projects and interdisciplinary collaborations.</p>
          <br />
          <p>Furthermore, the computer science program will provide hands-on experience in the use of cutting-edge technologies and tools. By engaging with practical labs and projects, I will not only deepen my familiarity with the latest software and hardware but also acquire the ability to apply these tools in real-world scenarios. This practical aspect of the program is crucial in bridging the gap between theoretical knowledge and its application, which is essential for becoming a well-rounded computer scientist.</p>
          <br />
          <p>Finally, the rigorous academic structure and regular assessments within the program will foster a sense of discipline, time management, and critical thinking. These are indispensable skills that will not only support my academic success but will also serve me well in my future career. In conclusion, this computer science bachelor program will not only sharpen my existing skills but also provide an environment for continuous learning and skill development, setting me on a path to a successful and fulfilling career in the field of computer science.</p>
          <br />
        </div>
      </AccordionItem>
      <AccordionItem className="shadow-lg px-6 py-2 text-off-white text-lg" key="3" aria-label="Accordion 3" 
      title="Learning Opportunities and Impact">
        <div className="mx-12 text-pastel-pink text-opacity-60 text-base">
          <p>I'm excited about the learning opportunity presented by pursuing a bachelor's degree in computer science, as it promises to be a transformative journey for several compelling reasons. Firstly, I'm eager to deepen my comprehension of the intricate world of computers and software development. These technologies have become integral to our daily lives, and understanding them better will not only empower me but also allow me to contribute more effectively to the rapidly evolving digital landscape.</p>
          <br />
          <p>Furthermore, the prospect of attaining a computer science degree fills me with enthusiasm because it will significantly boost my credibility and proficiency as a programmer. This formal education will provide me with a comprehensive knowledge base and a structured learning environment, enabling me to acquire not only coding skills but also a deeper understanding of software development principles, algorithms, and problem-solving techniques. With this elevated expertise, I can not only excel in my career but also make meaningful contributions to my community by creating innovative solutions that address real-world problems.</p>
          <br />
          <p>The impact of this learning opportunity on my life will extend beyond the realm of technical skills. It will instill in me a sense of purpose and direction, as I work toward my educational goals and the broader goal of contributing to society. I'm excited about the personal growth and development that will accompany this journey, including enhanced critical thinking, time management, and problem-solving abilities.</p>
          <br />
          <p>In summary, I am excited about this learning opportunity because it will broaden my horizons in computer science, enhance my professional standing, and equip me to make a positive impact on my community. It represents a path to personal and intellectual growth, and I am eager to embark on this journey that holds the potential to shape my future and make a difference in the world.</p>
          <br />
        </div>
      </AccordionItem>
            </Accordion>
        </div>
    </main>
  );
}
