import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Brain, Smile, ArrowRight, BookOpen, Target, Copy, Users } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64;
      const targetPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              AI Project Maker for{' '}
              <span className="gradient-text">Students</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Generate titles, abstracts, objectives & more from just a topic. Save hours of work with our AI-powered academic assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/project-helper">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Project Wizard
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection('how-it-works')}
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
                alt="Students collaborating on academic projects" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placeholder 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Card className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600">
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">📢 We keep this free with help from sponsors</p>
          </CardContent>
        </Card>
      </section>

      {/* Benefits Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 scroll-animate">
            Why Students Love ProjectWizard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto scroll-animate">
            Transform your academic workflow with AI-powered project generation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass hover:scale-105 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-6">
                <Zap className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Saves Time</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Generate complete project outlines in minutes instead of hours. Focus on learning, not formatting.
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover:scale-105 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-6">
                <Brain className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Smart Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI-generated content tailored to your field of study with relevant references and methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover:scale-105 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-6">
                <Smile className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stress-Free</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Never face writer's block again. Get inspired with professional project structures and ideas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 scroll-animate">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 scroll-animate">
              Three simple steps to generate your project content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center scroll-animate">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enter Your Topic</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply describe your project idea and select your field of study from our comprehensive categories.
              </p>
            </div>

            <div className="text-center scroll-animate">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Generates Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI analyzes your input and creates tailored project titles, abstracts, objectives, and references.
              </p>
            </div>

            <div className="text-center scroll-animate">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Copy & Customize</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Copy individual sections or the entire project outline. Use as a starting point for your academic work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="glass">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Academic Workflow?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using ProjectWizard to accelerate their academic success.
            </p>
            <Link href="/project-helper">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
