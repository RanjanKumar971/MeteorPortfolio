import { Copy, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon",
      });
      setIsSubmitting(false);
    }, 1500);

    
  };

  const copyEmail = () => {
    const email = "ranjankumar1210rk@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch((err) => {
        console.error("Failed to copy email: ", err);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: unable to copy email", err);
      }
      document.body.removeChild(textarea);
    }
  };

  const copyPhone = () => {
    const phone = "+918340604143";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(phone).catch((err) => {
        console.error("Failed to copy phone: ", err);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = phone;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: unable to copy phone", err);
      }
      document.body.removeChild(textarea);
    }
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
          <div className="space-y-8 pt-8">
            <h3 className="text-3xl mb-6 text-center text-primary">
              Contact Information
            </h3>
            <div className="space-y-6 flex flex-col items-center">
              {/* Email */}
              <div className="flex items-center space-x-1 w-full max-w-md">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-1">
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
              <div className="flex items-center space-x-4 w-full max-w-md">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-1">
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
              <div className="flex items-center space-x-4 w-full max-w-md">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8">
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
                {/* add other links */}
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs border border-primary/40"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>

            {/* form */}
            <form className="space-y-6">
              <div>
                {/* Name */}
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full h-40 px-4 py-3 rounded-lg border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>
              {/* submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
