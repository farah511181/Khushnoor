import { useState } from 'react'
import PageHero from '../../components/common/PageHero'
import SectionHeading from '../../components/common/SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Wedding',
    date: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Tell Your Story"
        description="Whether it's a wedding, a family session, or an editorial project — we'd love to hear from you."
      />

      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
          
          {/* Contact Information */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in Touch"
              title="Start a Conversation"
              description="Fill out the form and we'll get back to you within 24 hours with availability and pricing tailored to your vision."
            />

            <div className="mt-10 space-y-6">
              
              {/* Email */}
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Email
                </h4>

                <p className="text-lg text-espresso">
                  hello@hemantsharmaphotography.com
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Phone
                </h4>

                <p className="text-lg text-espresso">
                  +91 98765 43210
                </p>
              </div>

              {/* Studio */}
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Studio
                </h4>

                <p className="text-lg text-espresso">
                  Studio Portrait by Hemant, New Delhi, India
                </p>
              </div>

              {/* Hours */}
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha mb-2">
                  Hours
                </h4>

                <p className="text-lg text-espresso">
                  Mon – Sat, 9am – 7pm
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-nude p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                
                <div className="w-16 h-16 rounded-full bg-mocha text-ivory flex items-center justify-center text-2xl mb-6">
                  ✓
                </div>

                <h3 className="font-display text-3xl text-espresso mb-3">
                  Thank You!
                </h3>

                <p className="text-taupe max-w-sm">
                  Your message has been received. We'll be in touch within 24
                  hours to discuss your project.
                </p>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2">
                    Service
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                  >
                    <option>Wedding</option>
                    <option>Pre-Wedding</option>
                    <option>Post-Wedding</option>
                    <option>Family</option>
                    <option>Fashion</option>
                    <option>Film</option>
                    <option>Poetry</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-ivory border border-espresso/10 px-4 py-3 text-espresso focus:border-mocha focus:outline-none resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-mocha text-ivory px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors"
                >
                  Send Message
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}