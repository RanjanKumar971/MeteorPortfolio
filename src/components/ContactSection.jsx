import {
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mvgjoqgo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message sent! 🚀",
          description: "Thanks for reaching out. I'll reply soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Oops!",
          description: "Something went wrong. Please try again!",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Check your internet and try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ranjankumar1210rk@gmail.com");
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+918340604143");
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          <br />
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LEFT */}
          <div className="space-y-8 pt-8">
            <h3 className="text-3xl mb-6 text-center text-primary">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex items-center space-x-4 w-full max-w-md mx-auto">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col items-center flex-1">
                <h4 className="font-medium">Email</h4>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:ranjankumar1210rk@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ranjankumar1210rk@gmail.com
                  </a>
                  <button onClick={copyEmail} className="text-xs">
                    <Copy
                      className="hover:text-primary transition-colors"
                      size={14}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 w-full max-w-md mx-auto">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col items-center flex-1">
                <h4 className="font-medium">Phone</h4>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+918340604143"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8340604143
                  </a>
                  <button onClick={copyPhone} className="text-xs">
                    <Copy
                      className="hover:text-primary transition-colors"
                      size={14}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 w-full max-w-md mx-auto">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col items-center flex-1">
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">
                  Bhubaneswar, Odisha, India
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8 text-center">
              <h4 className="text-2xl text-primary mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ranjan-kumar-1b14b6250/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://github.com/RanjanKumar971"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="hover:text-primary transition-colors" />
                </a>
              </div>
              {/* add other links */}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs border border-primary/40">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send a Message
            </h3>
            <h6 className="text-sm text-gray-500 mb-6">
              Note: I will be contacting you via email.
            </h6>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full h-40 px-4 py-3 rounded-lg border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
