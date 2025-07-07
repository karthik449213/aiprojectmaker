import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Copy, RefreshCw, Loader2, Lightbulb, FileText, Clock } from 'lucide-react';
import { mockProjects } from '@/lib/mockData';
import { saveProjectToHistory, getProjectHistory, type ProjectHistoryItem } from '@/lib/projectStorage';
import { useToast } from '@/hooks/use-toast';

const projectFormSchema = z.object({
  topic: z.string().min(10, 'Please provide a more detailed project topic (at least 10 characters)'),
  category: z.string().min(1, 'Please select a field of study'),
});

type ProjectFormData = z.infer<typeof projectFormSchema>;

interface GeneratedContent {
  title: string;
  abstract: string;
  objectives: string[];
  tools: string[];
  references: string[];
}

export default function ProjectHelper() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [projectHistory, setProjectHistory] = useState<ProjectHistoryItem[]>([]);
  const { toast } = useToast();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      topic: '',
      category: '',
    },
  });

  useEffect(() => {
    setProjectHistory(getProjectHistory());
  }, []);

  const onSubmit = async (data: ProjectFormData) => {
    setIsGenerating(true);
    
    // Save to history
    saveProjectToHistory(data.topic, data.category);
    setProjectHistory(getProjectHistory());

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Generate content based on category
    const projectData = mockProjects[data.category as keyof typeof mockProjects] || mockProjects.default;
    
    // Personalize content
    const personalizedTitle = `${data.topic}: ${projectData.title}`;
    const personalizedAbstract = projectData.abstract.replace(/This project/g, `This ${data.topic.toLowerCase()} project`);

    setGeneratedContent({
      title: personalizedTitle,
      abstract: personalizedAbstract,
      objectives: projectData.objectives,
      tools: projectData.tools,
      references: projectData.references,
    });

    setIsGenerating(false);
    
    // Scroll to generated content
    setTimeout(() => {
      const contentElement = document.getElementById('generated-content');
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard.`,
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Copy failed",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  const copyAllContent = async () => {
    if (!generatedContent) return;

    const allContent = `PROJECT TITLE:
${generatedContent.title}

ABSTRACT:
${generatedContent.abstract}

OBJECTIVES:
${generatedContent.objectives.map((obj, index) => `${index + 1}. ${obj}`).join('\n')}

TOOLS & TECHNOLOGY:
${generatedContent.tools.join(', ')}

REFERENCES:
${generatedContent.references.map((ref, index) => `${index + 1}. ${ref}`).join('\n')}`;

    await copyToClipboard(allContent, 'All content');
  };

  const generateAgain = () => {
    if (form.getValues('topic') && form.getValues('category')) {
      form.handleSubmit(onSubmit)();
    } else {
      toast({
        title: "Missing information",
        description: "Please fill in both topic and category first.",
        variant: "destructive",
      });
    }
  };

  const loadProject = (project: ProjectHistoryItem) => {
    form.setValue('topic', project.topic);
    form.setValue('category', project.category);
  };

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Project Content Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transform your project idea into a comprehensive academic outline
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Project Topic
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your project idea... (e.g., Machine Learning for Healthcare, Sustainable Energy Solutions, Digital Marketing Strategies)"
                              className="resize-none h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Field of Study
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your field..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="engineering">Engineering & Technology</SelectItem>
                              <SelectItem value="management">Business & Management</SelectItem>
                              <SelectItem value="science">Natural Sciences</SelectItem>
                              <SelectItem value="social">Social Sciences</SelectItem>
                              <SelectItem value="arts">Arts & Humanities</SelectItem>
                              <SelectItem value="medicine">Medicine & Health</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="law">Law & Legal Studies</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isGenerating}
                      className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <FileText className="mr-2 h-5 w-5" />
                          Generate Project Content
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Generated Content */}
            {generatedContent && (
              <div id="generated-content" className="mt-8 space-y-6">
                {/* Project Title */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Title</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(generatedContent.title, 'Title')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{generatedContent.title}</p>
                  </CardContent>
                </Card>

                {/* Abstract */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Abstract</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(generatedContent.abstract, 'Abstract')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{generatedContent.abstract}</p>
                  </CardContent>
                </Card>

                {/* Objectives */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Objectives</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(
                          generatedContent.objectives.map((obj, index) => `${index + 1}. ${obj}`).join('\n'),
                          'Objectives'
                        )}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <ul className="space-y-2">
                      {generatedContent.objectives.map((objective, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">
                          {index + 1}. {objective}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Tools & Technology */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Technology</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(generatedContent.tools.join(', '), 'Tools & Technology')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {generatedContent.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* References */}
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">References</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(
                          generatedContent.references.map((ref, index) => `${index + 1}. ${ref}`).join('\n'),
                          'References'
                        )}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <ol className="space-y-3">
                      {generatedContent.references.map((reference, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 text-sm">
                          {index + 1}. {reference}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={copyAllContent}
                    className="bg-accent hover:bg-accent/90 text-white font-semibold"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All Content
                  </Button>
                  <Button
                    variant="outline"
                    onClick={generateAgain}
                    className="font-semibold"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Generate Again
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ad Placeholder */}
            <Card className="glass text-center">
              <CardContent className="p-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-500">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Ad Space</p>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Be specific about your project scope</li>
                  <li>• Include relevant keywords in your topic</li>
                  <li>• Select the most appropriate field of study</li>
                  <li>• Use generated content as a starting point</li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                  <Clock className="mr-2 h-5 w-5" />
                  Your Recent Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {projectHistory.length === 0 ? (
                    <p className="text-gray-400 dark:text-gray-500 text-sm">No recent projects yet</p>
                  ) : (
                    projectHistory.map((project, index) => (
                      <div
                        key={index}
                        className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        onClick={() => loadProject(project)}
                      >
                        <div className="font-medium text-xs text-gray-900 dark:text-white">
                          {project.topic.substring(0, 30)}{project.topic.length > 30 ? '...' : ''}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {project.category} - {new Date(project.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
