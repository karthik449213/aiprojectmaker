import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About ProjectWizard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering students worldwide with AI-powered academic project generation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who It's For</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                ProjectWizard is designed for college and high school students across all academic disciplines 
                who need help structuring their project proposals and research outlines.
              </p>
              <p>
                Whether you're working on a final year project, thesis, assignment, or research proposal, 
                our AI assistant helps you overcome the initial hurdle of getting started.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <Badge variant="secondary">Engineering & Technology</Badge>
                <Badge variant="secondary">Business & Management</Badge>
                <Badge variant="secondary">Natural Sciences</Badge>
                <Badge variant="secondary">Social Sciences</Badge>
                <Badge variant="secondary">Arts & Humanities</Badge>
                <Badge variant="secondary">Medicine & Health</Badge>
                <Badge variant="secondary">Education</Badge>
                <Badge variant="secondary">Law & Legal Studies</Badge>
              </div>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Students working together in modern classroom" 
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Digital library with books and technology" 
            className="rounded-2xl shadow-xl order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our AI-powered system analyzes your project topic and field of study to generate 
                comprehensive academic content that serves as a solid foundation for your work.
              </p>
              <p>
                The generated content includes professionally structured titles, detailed abstracts, 
                clear objectives, relevant tool suggestions, and properly formatted references.
              </p>
              <p>
                All content is generated instantly and can be copied, modified, and customized to 
                fit your specific requirements and academic standards.
              </p>
            </div>
          </div>
        </div>

        <Card className="glass">
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why It's Free</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              We believe that every student deserves access to quality educational tools. ProjectWizard is kept free through 
              sponsorships and partnerships with educational organizations who share our mission of making academic success accessible to all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-base">
                No Hidden Costs
              </Badge>
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 px-4 py-2 text-base">
                No Registration Required
              </Badge>
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 px-4 py-2 text-base">
                Unlimited Usage
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            To democratize access to high-quality academic resources and empower students worldwide 
            to achieve their educational goals through innovative AI-powered tools.
          </p>
        </div>
      </div>
    </div>
  );
}
