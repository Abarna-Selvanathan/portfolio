"use client"

import React, { useState, useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "./ui/use-toast"
import { ToastProvider } from "./ui/toast"
import { Toaster } from "./ui/toaster"

// Placeholder for motion div
const MotionDiv = ({ children, ...props }: any) => <div {...props}>{children}</div>

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [Motion, setMotion] = useState(() => MotionDiv);

  useEffect(() => {
    import("framer-motion").then((mod) => {
      setMotion(() => mod.motion.div);
    });
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: FormValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const serviceId = "service_pikwtlj";
      const templateId = "template_wroqvoh";
      const publicKey = "FMTMqOPhJi3M4fAEl";
      await emailjs.send(serviceId, templateId, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      }, publicKey);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "abarnaselvanathan7@gmail.com",
      link: "mailto:abarnaselvanathan7@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "94 77 698 9655",
      link: "tel:+94776989655",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      details: "Thirunawarkulam, Vavuniya",
      link: "https://maps.google.com/?q=Thirunawarkulam,Vavuniya",
    },
  ];

  return (
    <ToastProvider>
      <section id="contact" className="section-padding">
        <div className="container">
          <Motion
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title gradient-text">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind or want to collaborate? Feel free to reach out!</p>
          </Motion>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <Motion
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me through any of the following channels. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/Abarna-Selvanathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abarna-selvanathan-21952b348/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </Motion>

            {/* Contact Form */}
            <Motion
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Hello, I'd like to talk about..." rows={5} required />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Motion>
          </div>
        </div>
        <Toaster />
      </section>
    </ToastProvider>
  );
}