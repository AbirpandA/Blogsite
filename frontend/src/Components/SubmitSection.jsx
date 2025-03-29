import { motion } from "framer-motion"
import { ArrowRight, ThumbsUp } from "lucide-react"
import { Button } from "./ui/button"

const steps = [
  "Research a little-known historical mistake",
  "Write it up with sources and a dash of humor",
  "Submit it to our community of history enthusiasts",
  "Watch as others enjoy and upvote your discovery",
]



const SubmitSection = () => {
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl border-8 border-background rotate-3">
                <img src="https://static.demilked.com/wp-content/uploads/2024/03/rare-historical-photos-38.jpeg" alt="Submit your historical blunder" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-1/4 bg-background p-4 rounded-lg shadow-lg border rotate-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ThumbsUp size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">500+ Contributors</p>
                    <p className="text-xs text-muted-foreground">Join our community!</p>
                  </div>
                </div>
              </div>
            </motion.div>
  
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-6 order-1 md:order-2"
            >
              <motion.span
                variants={fadeIn}
                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                Contribute
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold tracking-tight">
                Found a Historical Blunder?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
                Discovered a hilarious historical mishap in your research? Share it with our community and watch the
                upvotes roll in!
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4 mt-2">
                {steps.map((step, index) => (
                  <motion.li key={index} variants={fadeIn} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium text-sm">{index + 1}</span>
                    </div>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeIn} className="mt-4">
                <Button size="lg" className="gap-2">
                  Submit a Blunder <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
  
  

export default SubmitSection