import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Code, Database, Network, Mail, Phone, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const CybersecurityPortfolio = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const skills = {
    programming: ['Python', 'C++'],
    security: ['OWASP ZAP', 'Nmap', 'Nessus', 'Wireshark', 'IBM QRadar', 'TheHive'],
    crypto: ['AES', 'DES', 'RSA', 'GPG'],
    systems: ['Linux', 'Windows', 'VirtualBox', 'VMware'],
    web: ['JWT', 'OAuth2', 'SQL Injection', 'XSS'],
    databases: ['MySQL', 'SQL', 'PL/SQL']
  };

  const projects = [
    {
      title: "LLM Security & Penetration Testing",
      period: "Feb 2025 - Aug 2025",
      description: "Developed automated penetration testing tool based on OWASP Top 10 for LLMs. Built RAG assistant for CVEs with local models (LLaMA 3, DeepSeek).",
      tech: ["Python", "LLaMA 3", "DeepSeek", "OWASP", "JSON/PDF"],
      type: "research"
    },
    {
      title: "Secure Database Backup System",
      period: "Jul 2024 - Aug 2024",
      description: "Automated MySQL database backups with AES and GPG encryption. Developed PyQt-based GUI for backup management.",
      tech: ["Python", "PyQt", "MySQL", "AES", "GPG"],
      type: "development"
    },
    {
      title: "Web Application Security Testing",
      period: "2024",
      description: "Conducted security tests using OWASP ZAP on OWASP Juice Shop. Developed Python scripts to simulate SQL Injection and XSS attacks.",
      tech: ["OWASP ZAP", "Python", "SQL Injection", "XSS"],
      type: "security"
    },
    {
      title: "Network Supervision with Nagios",
      period: "2024",
      description: "Implemented network infrastructure monitoring using Nagios. Configured performance and availability monitoring for network devices.",
      tech: ["Nagios", "Network Monitoring", "Infrastructure"],
      type: "networking"
    }
  ];

  const experience = [
    {
      title: "SOC Analyst & Penetration Tester",
      company: "EURAFRIC INFORMATION",
      period: "Feb 2025 - Aug 2025",
      type: "Final Year Internship",
      responsibilities: [
        "Incident investigation using IBM QRadar (SIEM) and TheHive",
        "Penetration testing within NDR Gatewatcher POC",
        "Developed automated penetration testing tool for LLMs",
        "Built RAG assistant for CVE analysis and report generation"
      ]
    }
  ];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-green-400" />
    </div>
  );

  const TerminalPrompt = ({ children }) => (
    <div className="font-mono text-green-400 mb-2">
      <span className="text-green-300">root@portfolio:~$</span> {children}
      <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${isTyping ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
    </div>
  );

  const GlowCard = ({ children, className = "" }) => (
    <div className={`bg-gray-900/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 ${className}`}>
      {children}
    </div>
  );

  const SkillBadge = ({ skill, category }) => (
    <span className="px-3 py-1 text-sm bg-gray-800/70 text-green-300 rounded-full border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-sm hover:shadow-green-400/30">
      {skill}
    </span>
  );

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <TerminalPrompt>whoami</TerminalPrompt>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              ILYASSE FAMFA
            </h1>
            <div className="text-xl md:text-2xl text-green-300 font-mono mb-6">
              &gt; JUNIOR CYBERSECURITY SPECIALIST_
            </div>
          </div>
          
          <div className="bg-gray-900/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              Engineer in Cryptology and Computer Security, passionate about data protection and securing information systems. 
              Specialized in penetration testing, SIEM analysis, and LLM security research.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-300">
              <MapPin className="w-4 h-4" />
              <span>Indianapolis</span>
            </div>
            <div className="flex items-center gap-2 text-green-300">
              <Phone className="w-4 h-4" />
              <span>+1 (463) 314-9433</span>
            </div>
            <div className="flex items-center gap-2 text-green-300">
              <Mail className="w-4 h-4" />
              <span>Ilyassefamfa14@gmail.com</span>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <TerminalPrompt>cat ./experience.log</TerminalPrompt>
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">SECURITY OPERATIONS</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <GlowCard key={index}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-400/20 rounded-lg">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-green-300 font-mono text-sm">{exp.period}</span>
                    </div>
                    <div className="text-cyan-400 font-semibold mb-3">
                      {exp.company} • {exp.type}
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-green-400 mt-2">▶</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <TerminalPrompt>ls -la ./projects/</TerminalPrompt>
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">SECURITY PROJECTS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <GlowCard key={index}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-400/20 rounded-lg">
                    {project.type === 'research' && <Terminal className="w-6 h-6 text-cyan-400" />}
                    {project.type === 'development' && <Code className="w-6 h-6 text-cyan-400" />}
                    {project.type === 'security' && <Shield className="w-6 h-6 text-cyan-400" />}
                    {project.type === 'networking' && <Network className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-green-300 font-mono text-sm">{project.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <SkillBadge key={i} skill={tech} />
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <TerminalPrompt>cat /proc/skills</TerminalPrompt>
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">TECHNICAL ARSENAL</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <GlowCard key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-400/20 rounded">
                    {category === 'programming' && <Code className="w-5 h-5 text-green-400" />}
                    {category === 'security' && <Shield className="w-5 h-5 text-green-400" />}
                    {category === 'crypto' && <Terminal className="w-5 h-5 text-green-400" />}
                    {category === 'systems' && <Network className="w-5 h-5 text-green-400" />}
                    {category === 'web' && <ExternalLink className="w-5 h-5 text-green-400" />}
                    {category === 'databases' && <Database className="w-5 h-5 text-green-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} />
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <TerminalPrompt>cat /etc/education.conf</TerminalPrompt>
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">ACADEMIC BACKGROUND</h2>
          
          <div className="space-y-6">
            <GlowCard>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Master's Degree in Cryptology and Cybersecurity</h3>
                <span className="text-green-300 font-mono">2023 - 2025</span>
              </div>
              <p className="text-cyan-400">Faculty of Science and Technology, AL HOCEIMA</p>
            </GlowCard>
            
            <GlowCard>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Bachelor's Degree in Computer Engineering</h3>
                <span className="text-green-300 font-mono">2020 - 2023</span>
              </div>
              <p className="text-cyan-400">Faculty of Science and Technology, SETTAT</p>
            </GlowCard>
            
            <GlowCard>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Baccalaureate in Electrical Science and Technology</h3>
                <span className="text-green-300 font-mono">2019 - 2020</span>
              </div>
              <p className="text-cyan-400">Mohammed VI High School, MARRAKECH</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TerminalPrompt>./connect.sh</TerminalPrompt>
          <h2 className="text-3xl font-bold mb-12 text-green-400">ESTABLISH CONNECTION</h2>
          
          <GlowCard className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 text-green-300">
                <Mail className="w-6 h-6" />
                <span className="text-lg">Ilyassefamfa14@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-green-300">
                <Phone className="w-6 h-6" />
                <span className="text-lg">+1 (463) 314-9433</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-green-300">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">Indianapolis, Indiana</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-green-400/30">
              <p className="text-gray-300">
                Ready to secure your systems and protect your data. Let's build a safer digital world together.
              </p>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-400/30 text-center">
        <div className="text-green-400 font-mono">
          <TerminalPrompt>exit 0</TerminalPrompt>
          <p className="text-gray-400 mt-2">© 2025 Ilyasse Famfa • Cybersecurity Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default CybersecurityPortfolio;
