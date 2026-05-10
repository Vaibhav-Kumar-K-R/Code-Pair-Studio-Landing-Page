import { Button } from "@/components/ui/button"
import { Code2, Users, Zap, Target, Heart, Rocket } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <Link href="/#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    CodePair Studio
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empowering developers worldwide to collaborate seamlessly and build amazing software together
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Breaking Down Barriers in Remote Development
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  CodePair Studio was born from a simple belief: distance should never hinder collaboration. We created
                  a platform that makes pair programming and team coding feel as natural as sitting side-by-side,
                  regardless of where your team members are located.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Powered by cutting-edge Socket.IO technology and the robust CodeMirror editor, we deliver real-time
                  synchronization with sub-millisecond latency, ensuring every keystroke, cursor movement, and code
                  change is instantly visible to your entire team.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Built for Developers</h3>
                    <p className="text-muted-foreground text-sm">
                      Every feature is designed with developer experience in mind, from syntax highlighting to
                      intelligent autocomplete
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Community-Driven</h3>
                    <p className="text-muted-foreground text-sm">
                      We listen to our users and continuously improve based on feedback from developers like you
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Performance First</h3>
                    <p className="text-muted-foreground text-sm">
                      Optimized for speed and reliability with 99.9% uptime and lightning-fast synchronization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  The principles that guide everything we build
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Developer Happiness</h3>
                <p className="text-muted-foreground">
                  We create tools that developers love to use, making collaboration enjoyable and productive
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries with new features like our integrated drawing canvas and desktop apps
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  Making powerful collaboration tools available to developers everywhere, regardless of their setup
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl/relaxed">
                  Start collaborating with developers around the world today
                </p>
              </div>
              <div className="pt-4">
                <Button  size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                 <a href="https://codepairstudio.netlify.app/" > Get Started</a>
                </Button>
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
          <p className="text-xs text-muted-foreground">© 2025 CodePair Studio. All rights reserved.</p>
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
