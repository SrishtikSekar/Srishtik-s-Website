import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink,
  User,
  Code,
  Database,
  Search,
  FileText,
  Bot,
  BarChart3,
  Wrench,
  GraduationCap,
  Users,
  Menu,
  X
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'G_Srishtik_Sekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-navy-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy-900/95 backdrop-blur-sm border-b border-navy-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-primary">G Srishtik Sekar</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-navy-300 hover:text-primary transition-colors duration-300">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-navy-300 hover:text-primary transition-colors duration-300">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-navy-300 hover:text-primary transition-colors duration-300">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-navy-300 hover:text-primary transition-colors duration-300">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-navy-300 hover:text-primary transition-colors duration-300">Contact</button>
                <Button onClick={downloadResume} className="bg-primary hover:bg-primary/90 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-navy-300 hover:text-primary"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800 border-t border-navy-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-navy-300 hover:text-primary w-full text-left">About</button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-navy-300 hover:text-primary w-full text-left">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-navy-300 hover:text-primary w-full text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-navy-300 hover:text-primary w-full text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-navy-300 hover:text-primary w-full text-left">Contact</button>
              <Button onClick={downloadResume} className="block px-3 py-2 bg-primary text-white rounded-lg mt-2 w-full">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="about" 
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.div variants={fadeInUp} className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">G Srishtik</span>
              <span className="text-primary"> Sekar</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-navy-300 mb-4">AI/ML Engineer & Computer Science Student</motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-navy-400 mb-8 max-w-3xl mx-auto">
              BTech Computer Science student at IIIT Kottayam with expertise in Machine Learning, Generative AI, and NLP. 
              Passionate about building intelligent systems and solving complex problems through innovative AI solutions.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={downloadResume} size="lg" className="bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center space-x-6 mt-8">
              <a href="https://www.linkedin.com/in/g-srishtik-sekar/" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-primary transition-colors duration-300">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/SrishtikSekar" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-primary transition-colors duration-300">
                <Github className="w-8 h-8" />
              </a>
              <a href="mailto:gsrishtiksekar@gmail.com" className="text-navy-400 hover:text-primary transition-colors duration-300">
                <Mail className="w-8 h-8" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="text-primary">Work</span> Experience
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Generative AI Intern</h3>
                      <p className="text-lg text-navy-200">Granville-Tech</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 lg:mt-0">June 2025 – Present</Badge>
                  </div>
                  <div className="text-navy-300 space-y-2">
                    <p className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      Developed a Bayesian Knowledge Tracing (BKT) model to personalize course recommendations based on students' mastery levels, learning progress, and skill gaps.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Bayesian ML</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Personalization</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Education Tech</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Machine Learning Intern</h3>
                      <p className="text-lg text-navy-200">NIT Trichy</p>
                      <p className="text-sm text-navy-400">Trichy, Tamil Nadu</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 lg:mt-0">June 2025 – July 2025</Badge>
                  </div>
                  <div className="text-navy-300 space-y-2">
                    <p className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      Developed an Aspect-Based Sentiment Analysis (ABSA) model using SetFit (HuggingFace) and a hybrid RoBERTa-GRU architecture to improve sentiment classification accuracy.
                    </p>
                    <p className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      Fine-tuned the model for domain-specific tasks, achieving robust performance in extracting and analyzing sentiment at aspect-level granularity.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">NLP</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">RoBERTa</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">HuggingFace</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Sentiment Analysis</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="text-primary">Featured</span> Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Search className="text-primary text-xl mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Hate Speech Detection for Dravidian Languages</h3>
                    <Badge className="bg-green-600/20 text-green-400 ml-auto">Research</Badge>
                  </div>
                  <p className="text-navy-300 mb-4">
                    Under the guidance of Dr. Balasubramanian P., developing a machine learning-based hate speech detection system for Dravidian languages using NLP techniques and deep learning models.
                  </p>
                  <ul className="text-navy-400 text-sm space-y-1 mb-4">
                    <li>• Utilized NLP techniques and deep learning models for classification</li>
                    <li>• Enhanced model performance with domain-specific embeddings</li>
                    <li>• Working on fine-tuned architectures for linguistic analysis</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Deep Learning</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">NLP</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Research</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="text-primary text-xl mr-3" />
                    <h3 className="text-xl font-semibold text-primary">ChatDB</h3>
                    <ExternalLink className="ml-auto text-navy-400 hover:text-primary w-5 h-5" />
                  </div>
                  <p className="text-navy-300 mb-4">
                    AI-powered conversational interface for database querying that accepts plain language queries and generates SQL automatically.
                  </p>
                  <ul className="text-navy-400 text-sm space-y-1 mb-4">
                    <li>• Natural language to SQL query generation</li>
                    <li>• User-friendly conversational interface</li>
                    <li>• Support for SQLite and MySQL databases</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Streamlit</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">LangChain</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Groq API</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">SQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="text-primary text-xl mr-3" />
                    <h3 className="text-xl font-semibold text-primary">PDF Summarizer</h3>
                    <ExternalLink className="ml-auto text-navy-400 hover:text-primary w-5 h-5" />
                  </div>
                  <p className="text-navy-300 mb-4">
                    Intelligent document processing tool that automatically generates concise summaries of PDF documents using AI.
                  </p>
                  <ul className="text-navy-400 text-sm space-y-1 mb-4">
                    <li>• PDF upload and text extraction</li>
                    <li>• AI-powered summary generation</li>
                    <li>• Support for multiple PDF formats</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Streamlit</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">LangChain</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">PyMuPDF</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Groq API</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-2">
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="text-primary text-xl mr-3" />
                    <h3 className="text-xl font-semibold text-primary">House Price Prediction</h3>
                    <ExternalLink className="ml-auto text-navy-400 hover:text-primary w-5 h-5" />
                  </div>
                  <p className="text-navy-300 mb-4">
                    Machine learning application utilizing Linear Regression and Random Forest models to predict property prices with high accuracy.
                  </p>
                  <ul className="text-navy-400 text-sm space-y-1 mb-4">
                    <li>• Implemented and compared Linear Regression and Random Forest algorithms</li>
                    <li>• Model evaluation using R² score and Mean Absolute Error (MAE)</li>
                    <li>• Data preprocessing and feature engineering for optimal performance</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Python</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Scikit-Learn</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Pandas</Badge>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Machine Learning</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="text-primary">Technical</span> Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="text-primary text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Bot className="text-primary text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-primary">AI/ML</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Keras</Badge>
                    <Badge variant="secondary">Scikit-learn</Badge>
                    <Badge variant="secondary">Hugging Face</Badge>
                    <Badge variant="secondary">LangChain</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="text-primary text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Data & Analytics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">Matplotlib</Badge>
                    <Badge variant="secondary">ChromaDB</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Wrench className="text-primary text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Web & Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Streamlit</Badge>
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">Flask</Badge>
                    <Badge variant="secondary">VS Code</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-primary text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-200">BTech in Computer Science</h4>
                      <p className="text-navy-300">Indian Institute of Information Technology, Kottayam</p>
                      <p className="text-navy-400 text-sm">2023-2027 • CGPA: 8.5</p>
                    </div>
                    <div className="text-sm text-navy-400">
                      <p className="font-medium text-navy-300 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Data Structures</Badge>
                        <Badge variant="outline" className="text-xs">Algorithms</Badge>
                        <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                        <Badge variant="outline" className="text-xs">Database Management</Badge>
                        <Badge variant="outline" className="text-xs">Artificial Intelligence</Badge>
                        <Badge variant="outline" className="text-xs">Generative AI</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="text-primary text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Leadership</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-200">SubLead - BetaLabs AI/DS</h4>
                      <ul className="text-navy-300 text-sm space-y-2 mt-2">
                        <li>• Organized and led 'Last Bot Standing' AI event with 150+ participants</li>
                        <li>• Mentored students on "Resume Enhancer" project using NLP techniques</li>
                        <li>• Guided AI-powered tool development for resume optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="text-primary">Get In</span> Touch
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-navy-300 mb-12">
            Let's discuss opportunities in AI/ML and innovative projects!
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="text-primary text-2xl mb-4 mx-auto" />
                  <h3 className="font-semibold text-navy-200 mb-2">Email</h3>
                  <a href="mailto:gsrishtiksekar@gmail.com" className="text-navy-400 hover:text-primary transition-colors duration-300">
                    gsrishtiksekar@gmail.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="text-primary text-2xl mb-4 mx-auto" />
                  <h3 className="font-semibold text-navy-200 mb-2">Phone</h3>
                  <a href="tel:+919322226824" className="text-navy-400 hover:text-primary transition-colors duration-300">
                    +91 9322226824
                  </a>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="bg-navy-800 border-navy-700 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Linkedin className="text-primary text-2xl mb-4 mx-auto" />
                  <h3 className="font-semibold text-navy-200 mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/g-srishtik-sekar/" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-primary transition-colors duration-300">
                    Connect with me
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resume Download Section */}
      <motion.section 
        id="resume" 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="text-primary">Download</span> Resume
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-navy-300 mb-8">
            Get a detailed overview of my experience, skills, and achievements.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Card className="bg-navy-800 border-navy-700 max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <FileText className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-navy-200">G Srishtik Sekar Resume</h3>
                <p className="text-navy-400 text-sm mb-6">PDF Format • Updated 2025</p>
                
                <Button 
                  onClick={downloadResume} 
                  className="w-full bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-navy-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-navy-400">
            © 2025 G Srishtik Sekar. All rights reserved. Built with passion for AI/ML innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}
