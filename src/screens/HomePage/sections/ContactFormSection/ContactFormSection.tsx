import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { toast } from "react-hot-toast";

// Icons
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbw1QwDMYTyB2Zhbq8LnM4Z3QTAPG1jbrE5KVv7GfcC_AutbK3BJqKePnPn2uLd8ryGO/exec';

export const ContactFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === 'success') {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const contactInfo = [
    {
      icon: <MessageSquare className="w-4 h-4 text-[#667085]" />,
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      contact: "sales@vtechnocloud.com",
      type: "email"
    },
    {
      icon: <Mail className="w-4 h-4 text-[#667085]" />,
      title: "Chat to support",
      description: "We're here to help.",
      contact: "support@vtechnocloud.com",
      type: "email"
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#667085]" />,
      title: "Visit us",
      description: "Visit our office HQ.",
      contact: "100 Smith Street\nCollingwood VIC 3066 AU",
      type: "address"
    },
    {
      icon: <Phone className="w-4 h-4 text-[#667085]" />,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+1 (555) 000-0000",
      type: "phone"
    }
  ];

  return (
    <section className="flex flex-col items-center w-full py-28 px-8 bg-white">
      <div className="flex flex-col items-center gap-16 max-w-[1204px] w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 max-w-[800px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <Badge className="flex items-center gap-2 px-3 py-2 rounded-[20px] border border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-transparent">
              <div className="relative w-5 h-5">
                <MessageSquare className="absolute w-[18px] h-[17px] top-0.5 left-px text-[#343844]" />
              </div>
              <span className="font-body-base-medium text-[#343844]">
                Get in Touch
              </span>
            </Badge>

            <h2 className="font-heading-desktop-h2-bold text-[#343844] text-center">
              Ready to Transform Your Business?
            </h2>

            <p className="opacity-80 font-body-base-regular text-[#343844] text-center max-w-[600px]">
              Let's discuss how vTechnoCloud can accelerate your digital transformation journey. Our experts are ready to help you unlock new possibilities.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-start">
          {/* Left Side - Contact Form */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading-desktop-h3-bold text-[#343844]">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-body-base-medium text-[#343844]">
                      First name
                    </label>
                    <Input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#387ff5] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body-base-medium text-[#343844]">
                      Last name
                    </label>
                    <Input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#387ff5] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-base-medium text-[#343844]">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#387ff5] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-base-medium text-[#343844]">
                    Phone number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="h-12 px-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#387ff5] focus:ring-1 focus:ring-[#387ff5] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body-base-medium text-[#343844]">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="p-4 border border-[#d0d5dd] rounded-lg bg-white font-body-base-regular text-[#101828] placeholder:text-[#667085] focus:border-[#387ff5] focus:ring-1 focus:ring-[#387ff5] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-1 border border-[#d0d5dd] rounded bg-white checked:bg-[#387ff5] checked:border-[#387ff5] focus:ring-1 focus:ring-[#387ff5]"
                  />
                  <label htmlFor="privacy" className="font-body-base-regular text-[#667085]">
                    You agree to our friendly{" "}
                    <a href="#" className="underline text-[#387ff5]">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#387ff5] text-white rounded-lg font-button-base-bold hover:bg-[#387ff5]/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 bg-[#f9fafb] rounded-lg flex items-center justify-center border border-[#eaecf0]">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-body-base-semibold text-[#101828]">
                      {info.title}
                    </h4>
                    <p className="font-body-base-regular text-[#667085]">
                      {info.description}
                    </p>
                    {info.type === 'email' && (
                      <a href={`mailto:${info.contact}`} className="font-body-base-semibold text-[#387ff5]">
                        {info.contact}
                      </a>
                    )}
                    {info.type === 'phone' && (
                      <a href={`tel:${info.contact}`} className="font-body-base-semibold text-[#387ff5]">
                        {info.contact}
                      </a>
                    )}
                    {info.type === 'address' && (
                      <address className="font-body-base-semibold text-[#387ff5] not-italic whitespace-pre-line">
                        {info.contact}
                      </address>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};