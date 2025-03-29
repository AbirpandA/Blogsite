import { motion } from "framer-motion"
import { ArrowRight, ThumbsUp } from "lucide-react"
import { Button } from "./ui/button"

const HeroSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }
    
      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }
    
      return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col gap-6"
              >
                <motion.span
                  variants={fadeIn}
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  History's Funniest Moments
                </motion.span>
                <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  When History <span className="text-primary">Went Hilariously Wrong</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-muted-foreground text-lg md:text-xl">
                  Discover, share, and laugh at humanity's most entertaining historical mishaps, blunders, and facepalm
                  moments.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button size="lg" className="gap-2">
                    Explore Blunders <ArrowRight size={16} />
                  </Button>
                  <Button size="lg" variant="outline">
                    Submit Your Find
                  </Button>
                </motion.div>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-8 border-background rotate-3">
                  <img src="https://images.pexels.com/photos/161863/edinburgh-carlton-hill-landscape-scotland-161863.jpeg?cs=srgb&dl=pexels-pixabay-161863.jpg&fm=jpg" alt="Historical Blunder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border rotate-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <ThumbsUp size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">10,000+ Blunders</p>
                      <p className="text-xs text-muted-foreground">And counting!</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-background p-3 rounded-lg shadow-lg border -rotate-6">
                  <p className="text-sm font-medium italic">
                    "History doesn't repeat itself, but it often rhymes... hilariously!"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )
}

export default HeroSection