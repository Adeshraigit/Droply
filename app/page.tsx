import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  Image as ImageIcon,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Lock,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-default-50 to-default-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section with improved visual elements */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    Simple. Secure. Fast.
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-default-900 leading-tight">
                    Store your <span className="text-primary relative">
                      images
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -z-10 rounded"></span>
                    </span> with ease
                  </h1>
                  <p className="text-lg text-default-600 max-w-md mx-auto lg:mx-0">
                    The modern way to store, organize, and share your visual content. 
                    Fast uploads, smart organization, complete privacy.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button size="lg" variant="solid" color="primary" className="font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                        Get Started Free
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button size="lg" variant="flat" color="primary" className="font-medium">
                        Sign In
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        variant="solid"
                        color="primary"
                        endContent={<ArrowRight className="h-4 w-4" />}
                        className="font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-default-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Unlimited uploads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center relative">
                {/* Hero image with floating elements */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -top-16 -right-12 bg-white p-4 rounded-lg shadow-xl rotate-6 z-10">
                        <ImageIcon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -bottom-12 -left-8 bg-white p-4 rounded-lg shadow-xl -rotate-6 z-10">
                        <Folder className="h-8 w-8 text-primary" />
                      </div>
                      <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-20">
                        <ImageIcon className="h-32 w-32 md:h-40 md:w-40 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section with improved design */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-default-900">
                Everything you need, nothing you don't
              </h2>
              <p className="text-default-600 max-w-2xl mx-auto">
                Droply gives you powerful tools to manage your images without the complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-default-200 bg-white shadow-lg hover:shadow-xl transition-all group">
                <CardBody className="p-8">
                  <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-6 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-default-900">
                    Lightning-Fast Uploads
                  </h3>
                  <p className="text-default-600">
                    Forget waiting around. Droply's optimized upload system gets your images stored in seconds, not minutes.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-default-200 bg-white shadow-lg hover:shadow-xl transition-all group">
                <CardBody className="p-8">
                  <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-6 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-default-900">
                    Intelligent Organization
                  </h3>
                  <p className="text-default-600">
                    Custom folders, smart tags, and powerful search make finding exactly what you need a breeze.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-default-200 bg-white shadow-lg hover:shadow-xl transition-all group md:col-span-2 lg:col-span-1">
                <CardBody className="p-8">
                  <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-6 group-hover:bg-primary/20 transition-colors">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-default-900">
                    Bank-Level Security
                  </h3>
                  <p className="text-default-600">
                    End-to-end encryption and customizable sharing controls keep your images private and secure.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works section (new) */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-default-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-default-900">
                How Droply Works
              </h2>
              <p className="text-default-600 max-w-2xl mx-auto">
                Three simple steps to better image management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-default-600">Create your free account in seconds with email or social login</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Upload</h3>
                <p className="text-default-600">Drag & drop or select files from your device</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Manage</h3>
                <p className="text-default-600">Organize, share, and access your images from anywhere</p>
              </div>
            </div>
          </div>
        </section>

        {/* Improved CTA section */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-default-900">
                  Ready to get started?
                </h2>
                <p className="text-default-600 max-w-xl mx-auto">
                  Join thousands of users who trust Droply for their image storage needs. 
                  Free to get started, no credit card required.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <SignedOut>
                  <Link href="/sign-up" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="solid"
                      color="primary"
                      endContent={<ArrowRight className="h-4 w-4" />}
                      className="w-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    >
                      Create Free Account
                    </Button>
                  </Link>
                  <Link href="/sign-in" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="flat"
                      color="primary"
                      className="w-full font-medium"
                    >
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="solid"
                      color="primary"
                      endContent={<ArrowRight className="h-4 w-4" />}
                      className="w-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                </SignedIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Improved footer */}
      <footer className="bg-default-50 border-t border-default-200 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <CloudUpload className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Droply</h2>
              </div>
              <p className="text-default-500 max-w-sm">
                The modern way to store, organize, and share your visual content.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-default-700 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-default-500 hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-default-500 hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="text-default-500 hover:text-primary transition-colors">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-default-700 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-default-500 hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-default-500 hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-default-500 hover:text-primary transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-default-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-default-500 text-sm">
              &copy; {new Date().getFullYear()} Droply. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-default-400 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-default-400 hover:text-primary">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}