import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Zap, Shield, Monitor, Sparkles, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            CodePair Studio
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-600 transition-colors">
            About
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Real-time Collaboration
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Code Together in{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Real-Time
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience seamless collaborative coding with CodePair Studio. Built on Socket.IO and CodeMirror,
                    enabling multiple developers to code together instantly with live cursors, real-time edits, and
                    synchronized debugging.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                     <a href="https://codepairstudio.netlify.app/" target="_blank"> Start coding together</a>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>10K+ developers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    <span>Real-time sync</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl border lg:order-last">
                <Image
                  src="/images/codepair-hero.png"
                  width="600"
                  height="400"
                  alt="CodePair Studio - Real-time collaborative code editor"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Modern Development
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Built with cutting-edge technology to provide the smoothest collaborative coding experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Real-time Collaboration</CardTitle>
                  <CardDescription>
                    See live cursors, edits, and selections from all team members instantly with Socket.IO powered
                    synchronization
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Advanced Code Editor</CardTitle>
                  <CardDescription>
                    Powered by CodeMirror with syntax highlighting, auto-completion, and intelligent code analysis for
                    50+ languages
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    Sub-millisecond latency with optimized conflict resolution and efficient operational transforms
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Secure & Private</CardTitle>
                  <CardDescription>
                    End-to-end encryption, secure rooms, and granular permission controls to keep your code safe
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-2">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Desktop Version Available</CardTitle>
                  <CardDescription>
                    Native desktop applications for Windows, macOS, and Linux with enhanced performance and offline
                    capabilities
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-2">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Drawing Canvas Tool</CardTitle>
                  <CardDescription>
                    Integrated canvas for visual brainstorming, diagramming, and design collaboration alongside your
                    code
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Development Workflow?
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers already using CodePair Studio to build better software together.
                </p>
              </div>
              <div  className="pt-4">
                <Button  size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                   <Link href="http://localhost:4000/about" className="text-sm font-medium hover:text-purple-600 transition-colors">
            About
          </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
             <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-muted-foreground">Room Collabrations</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-muted-foreground">Programming Languages</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-orange-600">{"<5ms"}</div>
                <div className="text-sm text-muted-foreground">Average Latency</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-slate-950">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
            <Code2 className="h-4 w-4 text-white" />
          </div>
          <p className="text-xs text-muted-foreground">© 2024 CodePair Studio. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Documentation
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
