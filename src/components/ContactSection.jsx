import { Copy, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
