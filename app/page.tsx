'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code2, Music, Gamepad2, PenTool, BookOpenCheck, Briefcase } from 'lucide-react';
import profilePic from '../public/ProfilePic.png';

// STYLES - In a real Next.js app, this would go in globals.css
const GlobalStyles = () => (
    <style jsx global>{`
        :root {
            --bg-primary: #121212;
            --bg-secondary: #1E1E1E;
            --bg-card: #282828;
            --text-primary: #E0E0E0;
            --text-secondary: #A0A0A0;
            --accent: #BEF264; /* lime-400 */
            --border-color: #383838;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
        }
        /* Page transitions */
        .page {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .text-accent {
            color: var(--accent);
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--bg-secondary);
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--bg-card);
            border-radius: 20px;
            border: 2px solid var(--bg-secondary);
        }
        /* Timeline styles */
        .timeline-item {
            position: relative;
            padding-left: 3rem; /* Space for line and dot */
            padding-bottom: 2rem;
        }
        .timeline-item:last-child {
            padding-bottom: 0;
        }
        .timeline-item::before { /* The vertical line */
            content: '';
            position: absolute;
            left: 0.45rem;
            top: 0.5rem;
            width: 2px;
            height: 100%;
            background-color: var(--border-color);
        }
          .timeline-item:last-child::before {
            height: 0; /* No line for the last item */
        }
        .timeline-dot {
            position: absolute;
            left: 0;
            top: 0.3rem;
            height: 1rem;
            width: 1rem;
            background-color: var(--accent);
            border-radius: 50%;
            border: 3px solid var(--bg-secondary);
        }
    `}</style>
);


// -- COMPONENTS --

const Preloader = () => (
    <div id="preloader" className="fixed top-0 left-0 right-0 bottom-0 bg-[var(--bg-primary)] z-[100] flex justify-center items-center">
        <style jsx>{`
            #preloader {
                transition: opacity 0.75s ease-out, visibility 0.75s ease-out;
            }
            #preloader.hidden {
                opacity: 0;
                visibility: hidden;
            }
            #preloader-text {
                font-size: 4rem;
                font-weight: 900;
                color: var(--text-primary);
                animation: pulse 1.5s infinite ease-in-out;
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `}</style>
        <h1 id="preloader-text">Nvikelo</h1>
    </div>
);

const Sidebar = () => (
    <aside className="lg:col-span-4 lg:sticky lg:top-8 bg-[var(--bg-secondary)] p-8 rounded-3xl h-fit mb-8 lg:mb-0">
        <div className="flex flex-col items-center text-center">
            <img src="https://i.postimg.cc/tCgkqnBm/Profle-Pic.jpg" alt="Nvikelo Nyathi" className="rounded-full w-64 h-64 mb-6 ring-4 ring-[var(--border-color)]"/>
            <h1 className="text-3xl font-bold text-white mb-1">Nvikelo Nyathi</h1>
            <p className="bg-[var(--bg-card)] text-accent font-medium py-1 px-4 rounded-lg mb-8">Creative Technologist</p>
            <div className="w-full border-t border-[var(--border-color)] my-4"></div>
            <ul className="space-y-6 text-left w-full">
                <li className="flex items-center">
                    <div className="icon-container bg-[var(--bg-card)] p-3 rounded-lg mr-4 text-accent"><Mail size={20} /></div>
                    <div>
                        <span className="text-sm text-[var(--text-secondary)]">EMAIL</span>
                        <p className="font-medium text-white">nvikelo2000@gmail.com</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <div className="icon-container bg-[var(--bg-card)] p-3 rounded-lg mr-4 text-accent"><Phone size={20} /></div>
                    <div>
                        <span className="text-sm text-[var(--text-secondary)]">PHONE</span>
                        <p className="font-medium text-white">+778-694-5055</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <div className="icon-container bg-[var(--bg-card)] p-3 rounded-lg mr-4 text-accent"><MapPin size={20} /></div>
                    <div>
                        <span className="text-sm text-[var(--text-secondary)]">LOCATION</span>
                        <p className="font-medium text-white">Kelowna, BC</p>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
);

const Header = ({ activePage, setPage }: { activePage: string, setPage: (page: string) => void }) => {
    const navItems = ['About', 'Resume', 'Portfolio', 'Contact'];
    return (
        <header className="flex justify-end mb-8">
            <nav className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full p-1 flex-wrap">
                {navItems.map(item => {
                    const pageId = `${item.toLowerCase()}-page`;
                    const isActive = activePage === pageId;
                    return (
                        <button 
                            key={item}
                            className={`nav-item text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-accent text-gray-900' : 'text-white hover:bg-[var(--border-color)]'}`} 
                            onClick={() => setPage(pageId)}
                        >
                            {item}
                        </button>
                    )
                })}
            </nav>
        </header>
    );
};

const AboutPage = () => (
    <div className="page">
        <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>
        <div className="space-y-4 text-[var(--text-secondary)] text-lg mb-12">
            <p>I'm a multidisciplinary creative with a background in game development, design, and music production. I combine technical skill with artistic vision to build immersive digital experiences and compelling media content.</p>
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)]"><div className="text-accent mb-4"><Code2 size={32}/></div><h4 className="font-bold text-lg text-white mb-2">Web Development</h4><p className="text-[var(--text-secondary)]">High-quality development of sites at the professional level.</p></div>
            <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)]"><div className="text-accent mb-4"><Music size={32}/></div><h4 className="font-bold text-lg text-white mb-2">Sound & Music Production</h4><p className="text-[var(--text-secondary)]">Creating original audio for games, film, and digital media.</p></div>
            <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)]"><div className="text-accent mb-4"><Gamepad2 size={32}/></div><h4 className="font-bold text-lg text-white mb-2">Game Development</h4><p className="text-[var(--text-secondary)]">Building interactive games from concept to deployment.</p></div>
            <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)]"><div className="text-accent mb-4"><PenTool size={32}/></div><h4 className="font-bold text-lg text-white mb-2">UI/UX Design</h4><p className="text-[var(--text-secondary)]">The most modern and high-quality design made at a professional level.</p></div>
        </div>
    </div>
);

const ResumePage = () => (
    <div className="page">
        <h2 className="text-4xl font-bold text-white mb-2">Resume</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <div className="flex items-center gap-4 mb-8"><div className="text-accent"><Briefcase size={32}/></div><h3 className="text-2xl font-bold text-white">Experience</h3></div>
                <div className="relative"><div className="timeline-item"><div className="timeline-dot"></div><p className="text-accent text-sm font-medium">2022 - Present</p><h4 className="text-lg font-semibold text-white mt-1 mb-2">Front-End Web Developer</h4><p className="text-sm text-[var(--text-secondary)] mb-2">Freelance</p><ul className="list-disc list-inside text-sm text-[var(--text-secondary)] space-y-1"><li>Designed and built responsive websites for clients.</li><li>Focused on clean, user-focused UI/UX design.</li></ul></div><div className="timeline-item"><div className="timeline-dot"></div><p className="text-accent text-sm font-medium">2020 - 2022</p><h4 className="text-lg font-semibold text-white mt-1 mb-2">In-Store Service Agent</h4><p className="text-sm text-[var(--text-secondary)] mb-2">Best Buy</p><ul className="list-disc list-inside text-sm text-[var(--text-secondary)] space-y-1"><li>Solved client technical issues across hardware and software.</li><li>Maintained and troubleshot hardware and software systems.</li></ul></div><div className="timeline-item"><div className="timeline-dot"></div><p className="text-accent text-sm font-medium">2018 - 2020</p><h4 className="text-lg font-semibold text-white mt-1 mb-2">Work Study Student (IT)</h4><p className="text-sm text-[var(--text-secondary)] mb-2">Thompson Rivers University</p><ul className="list-disc list-inside text-sm text-[var(--text-secondary)] space-y-1"><li>Maintained and repaired school printers and provided IT support.</li></ul></div></div>
            </div>
            <div>
                <div className="flex items-center gap-4 mb-8"><div className="text-accent"><BookOpenCheck size={32}/></div><h3 className="text-2xl font-bold text-white">Education</h3></div>
                <div className="relative"><div className="timeline-item"><div className="timeline-dot"></div><p className="text-accent text-sm font-medium">2018 - 2020</p><h4 className="text-lg font-semibold text-white mt-1 mb-2">Computer Science</h4><p className="text-sm text-[var(--text-secondary)]">Thompson Rivers University</p></div><div className="timeline-item"><div className="timeline-dot"></div><p className="text-accent text-sm font-medium">2016 - 2018</p><h4 className="text-lg font-semibold text-white mt-1 mb-2">Highschool Diploma</h4><p className="text-sm text-[var(--text-secondary)]">Sir Alexander Mackenzie Secondary School</p></div></div>
            </div>
        </div>
        <div className="mt-12">
            <h3 className="text-3xl font-bold text-white mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-4">
                <span className="bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-md font-medium px-5 py-2 rounded-lg">Front-End Web Development</span><span className="bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-md font-medium px-5 py-2 rounded-lg">Sound & Music Production</span><span className="bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-md font-medium px-5 py-2 rounded-lg">Digital Media Design</span><span className="bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-md font-medium px-5 py-2 rounded-lg">Game Development</span><span className="bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-md font-medium px-5 py-2 rounded-lg">3D Modeling & Animation</span><span className="bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-md font-medium px-5 py-2 rounded-lg">UI/UX Design</span>
            </div>
        </div>
    </div>
);

const PortfolioPage = () => (
    <div className="page">
        <h2 className="text-4xl font-bold text-white mb-2">Portfolio</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-accent transition-all duration-300 transform hover:-translate-y-1"><img src="https://placehold.co/600x400/3498db/ffffff?text=Project+One" alt="Project One" className="w-full h-56 object-cover" /><div className="p-5"><h3 className="font-bold text-xl text-slate-100">E-commerce Platform</h3><p className="text-slate-400">Web Application</p></div></div>
            <div className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-accent transition-all duration-300 transform hover:-translate-y-1"><img src="https://placehold.co/600x400/e74c3c/ffffff?text=Project+Two" alt="Project Two" className="w-full h-56 object-cover" /><div className="p-5"><h3 className="font-bold text-xl text-slate-100">Interactive Dashboard</h3><p className="text-slate-400">Data Visualization</p></div></div>
        </div>
    </div>
);

const ContactPage = () => (
    <div className="page">
        <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-8">Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you.</p>
        <form action="#" className="space-y-6">
            <div><label htmlFor="name" className="text-sm font-semibold text-[var(--text-secondary)]">Full Name</label><input type="text" id="name" placeholder="Your Name" className="mt-2 w-full p-4 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition" /></div>
            <div><label htmlFor="email" className="text-sm font-semibold text-[var(--text-secondary)]">Email Address</label><input type="email" id="email" placeholder="you@example.com" className="mt-2 w-full p-4 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition"/></div>
            <div><label htmlFor="message" className="text-sm font-semibold text-[var(--text-secondary)]">Message</label><textarea id="message" rows={5} placeholder="Tell me about your project..." className="mt-2 w-full p-4 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition"></textarea></div>
            <button type="submit" className="w-full bg-accent text-gray-900 font-bold py-4 px-4 rounded-xl hover:bg-lime-500 transition-colors duration-300">Send Message</button>
        </form>
    </div>
);


// -- MAIN APP COMPONENT --
export default function App() {
    const [page, setPage] = useState('about-page');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const renderPage = () => {
        switch (page) {
            case 'resume-page': return <ResumePage />;
            case 'portfolio-page': return <PortfolioPage />;
            case 'contact-page': return <ContactPage />;
            case 'about-page':
            default:
                return <AboutPage />;
        }
    };

    return (
        <>
            <GlobalStyles />
            {loading && <Preloader />}
            
            <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'} max-w-7xl mx-auto p-4 md:p-8`}>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <Sidebar />
                    <main className="lg:col-span-8">
                        <div className="bg-[var(--bg-secondary)] p-6 md:p-8 rounded-3xl">
                            <Header activePage={page} setPage={setPage} />
                            <div id="content-area">
                                {renderPage()}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
