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
import MagneticCursor from "../MagneticCursor";

export function Contact() {
  return (
    <section id="contact" className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
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
          <Card className=" shadow-xl">
            <CardHeader className="text-center">
              <CardTitle>Let's Work Together</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <MagneticCursor>
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-900 text-white hover:bg-gradient-to-br from-green-500 via-emerald-600 to-teal-900 shadow-lg hover:shadow-xl"
                  >
                    <a href="mailto:chelamahendra@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                </MagneticCursor>
              </div>

              <div className="border-t pt-6">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Or connect with me on social media
                </p>
                <div className="flex justify-center gap-4">
                  <MagneticCursor>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-green-400/10 border-green-400/30"
                      asChild
                    >
                      <a
                        href="https://github.com/mahendrajatichela"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 text-green-800" />
                      </a>
                    </Button>
                  </MagneticCursor>
                  <MagneticCursor>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-green-400/10 border-green-400/30"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/chela-mahendrajati"
                        target=""
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 text-green-800" />
                      </a>
                    </Button>
                  </MagneticCursor>
                  <MagneticCursor>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-green-400/10 border-green-400/30"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/chelaaaa_"
                        target=""
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-5 w-5 text-green-800" />
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
