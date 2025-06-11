import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp, Shield, Rocket, Columns as ChartColumn, Layers, Menu, X, AlertCircle as CircleAlert, ArrowUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Atlas</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">
            🚀 New: AI-Powered Detection
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Snipe the Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}100x Memecoin
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Atlas uses advanced AI and real-time blockchain analysis to identify promising memecoins 
            before they explode. Get in early, get out rich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              <Rocket className="mr-2 h-5 w-5" />
              Start Sniping
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Atlas?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our cutting-edge technology gives you the edge in the fast-moving memecoin market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">AI-Powered Analysis</CardTitle>
                <CardDescription className="text-slate-300">
                  Advanced machine learning algorithms analyze social sentiment, trading patterns, and market data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-slate-300">
                  Get alerts within seconds of new token launches and significant market movements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Risk Protection</CardTitle>
                <CardDescription className="text-slate-300">
                  Built-in rug pull detection and smart contract analysis to protect your investments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <ChartColumn className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Real-Time Analytics</CardTitle>
                <CardDescription className="text-slate-300">
                  Live charts, volume analysis, and holder distribution tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Layers className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Multi-Chain Support</CardTitle>
                <CardDescription className="text-slate-300">
                  Monitor opportunities across Ethereum, BSC, Solana, and other major networks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CircleAlert className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Smart Alerts</CardTitle>
                <CardDescription className="text-slate-300">
                  Customizable notifications via Discord, Telegram, and mobile push notifications
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10,000+</div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-slate-300">Profits Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300">Market Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Sniping?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who use Atlas to find the next big memecoin opportunity
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
            <ArrowUp className="mr-2 h-5 w-5" />
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Atlas</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 Atlas Sniper. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}