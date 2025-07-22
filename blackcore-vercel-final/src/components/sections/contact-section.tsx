import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data to a backend
    // For now, we'll just simulate by opening an email client
    const contactEmail = "info@blackcore.ai";
    const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`);
    
    window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`);
    
    // Reset the form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-gray-400">
              Ready to power your next AI project with BlackCore?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 rounded-xl p-6 md:p-8 border border-zinc-800 h-fit">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                Whether you're looking to train your next LLM or need reliable inference capacity for your AI application, we're here to help.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-primary">info@blackcore.ai</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Headquarters</h4>
                  <p className="text-gray-400">Buenos Aires, Argentina</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Data Centers</h4>
                  <p className="text-gray-400">Argentina, Brazil, Chile (Coming 2026)</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    required
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your AI infrastructure needs..."
                    rows={4}
                    required
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}