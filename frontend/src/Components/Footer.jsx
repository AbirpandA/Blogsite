import { History } from "lucide-react"

const exploreLinks = ["Top Blunders", "Recent Additions", "Random Blunder", "Submit Content"]
const timePeriodLinks = ["Ancient", "Medieval", "Renaissance", "Colonial", "Industrial", "Modern"]
const aboutLinks = ["Our Mission", "Community Guidelines", "Privacy Policy", "Contact Us"]

const Footer = () => {
    return (
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <History className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">HistoryOops!</span>
              </div>
              <p className="text-muted-foreground mb-4">Where history's most embarrassing moments live forever.</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <span className="sr-only">Social Media</span>
                  </a>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">Time Periods</h3>
              <ul className="space-y-3">
                {timePeriodLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HistoryOops! All rights reserved. Accuracy not guaranteed, laughter is.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  

export default Footer