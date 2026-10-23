"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import MagneticCursor from "../../MagneticCursor";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-[#2a0810] to-[#161619] text-slate-100"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-primary via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-[#2f0a10] via-red-950 to-[#180407] backdrop-blur-md border border-amber-400/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Let's Work Together
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <MagneticCursor>
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-primary via-red-950 to-primary text-amber-300 border border-amber-400/40 hover:border-amber-400 hover:text-white shadow-lg transition-all"
                  >
                    <a href="mailto:chelamahendra@gmail.com">
                      <Mail className="mr-2 h-5 w-5 text-amber-400" />
                      Send me an email
                    </a>
                  </Button>
                </MagneticCursor>
              </div>

              <div className="border-t border-slate-700/60 pt-6">
                <p className="text-center text-sm text-slate-400 mb-4">
                  Or connect with me on social media
                </p>
                <div className="flex justify-center gap-4">
                  <MagneticCursor>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-slate-900/80 border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-amber-400/60 hover:bg-red-950/40 transition-colors"
                      asChild
                    >
                      <a
                        href="https://github.com/mahendrajatichela"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </MagneticCursor>
                  <MagneticCursor>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-slate-900/80 border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-amber-400/60 hover:bg-red-950/40 transition-colors"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/chela-mahendrajati"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </MagneticCursor>
                  <MagneticCursor>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-slate-900/80 border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-amber-400/60 hover:bg-red-950/40 transition-colors"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/chelaaaa_"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                  </MagneticCursor>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
