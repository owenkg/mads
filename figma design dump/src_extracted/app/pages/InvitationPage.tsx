import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Music, Users } from 'lucide-react';
import { Button } from '../components/design-system/Button';
import { Card } from '../components/design-system/Card';
import { Badge } from '../components/design-system/Badge';
import { Input } from '../components/design-system/Input';
import { Textarea } from '../components/design-system/Textarea';
import { Select } from '../components/design-system/FormElements';
import { Heading, Text, Label } from '../components/design-system/Typography';
import { Stamp } from '../components/design-system/Stamp';
import { Sunburst } from '../components/design-system/VisualElements';
import { Divider } from '../components/design-system/Divider';
import { Alert } from '../components/design-system/Alert';

export function InvitationPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    dietaryReqs: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F2E0C0] font-sans selection:bg-[#E09A50] selection:text-[#1A0C04] relative pb-24">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-20 z-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]\"></div>

      {/* Header */}
      <header className="relative pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-4xl relative z-10">
          <a href="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#C4412A] transition-colors mb-12">
            <ArrowLeft size={14} />
            Back to Guidelines
          </a>
          
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <Sunburst size="lg" rays={20} />
            </div>
            
            <div className="flex justify-center gap-4 mb-8">
              <Stamp size="md" rotate={-3}>Session 001</Stamp>
            </div>
            
            <Heading level={1}>You're Invited</Heading>
            
            <Text size="lg" className="max-w-xl mx-auto">
              An intimate afternoon of deep house and soulful amapiano, as the sun meets the sound in Kampala.
            </Text>
            
            <div className="flex justify-center gap-3">
              <Badge variant="accent">Invite Only</Badge>
              <Badge variant="outline">Limited Capacity</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Success Message */}
        {formSubmitted && (
          <div className="mb-12">
            <Alert variant="success" title="RSVP Confirmed!">
              Thank you for confirming your attendance. We'll send event details to your email 48 hours before Session 001.
            </Alert>
          </div>
        )}

        {/* Event Details */}
        <section className="mb-16">
          <Card variant="light">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar size={20} className="text-[#C4412A] mt-1" />
                  <div>
                    <Label>Date</Label>
                    <Text className="mt-2">Saturday, April 12th, 2026</Text>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-[#C4412A] mt-1" />
                  <div>
                    <Label>Time</Label>
                    <Text className="mt-2">4:00 PM - Sunset</Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#C4412A] mt-1" />
                  <div>
                    <Label>Location</Label>
                    <Text className="mt-2">
                      Kampala, Uganda<br/>
                      <span className="text-sm opacity-60">Exact location revealed to confirmed guests</span>
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Music size={20} className="text-[#C4412A] mt-1" />
                  <div>
                    <Label>Sounds</Label>
                    <Text className="mt-2">Deep House, Afro House, Soulful Amapiano</Text>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users size={20} className="text-[#C4412A] mt-1" />
                  <div>
                    <Label>Capacity</Label>
                    <Text className="mt-2">80 guests maximum</Text>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <Divider spacing="lg" />

        {/* RSVP Form */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">Confirm Your Attendance</Heading>
            <Text variant="muted" className="max-w-xl mx-auto">
              This invitation is personal and non-transferable. Please RSVP by April 5th.
            </Text>
          </div>

          <Card variant="light">
            <form onSubmit={handleSubmit} className="space-y-8">
              <Input 
                label="Full Name" 
                placeholder="As it appears on ID"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              
              <Input 
                label="Email Address" 
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              
              <Select 
                label="Number of Guests"
                options={[
                  { value: '1', label: '1 (Just me)' },
                  { value: '2', label: '2 (Plus one)' },
                ]}
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />
              
              <Textarea 
                label="Dietary Requirements or Notes (Optional)"
                placeholder="Let us know if you have any dietary restrictions..."
                value={formData.dietaryReqs}
                onChange={(e) => setFormData({ ...formData, dietaryReqs: e.target.value })}
              />

              <Divider spacing="md" />

              <div className="bg-[#D4B88A]/10 -mx-6 md:-mx-8 px-6 md:px-8 py-6 rounded-sm">
                <Label className="block mb-3">What to Bring</Label>
                <Text size="sm" variant="muted">
                  • Valid photo ID<br/>
                  • Your invitation (digital or printed)<br/>
                  • Comfortable shoes for dancing<br/>
                  • Good energy
                </Text>
              </div>

              <div className="pt-4 flex justify-center">
                <Button variant="primary" type="submit" className="px-16">
                  Confirm RSVP
                </Button>
              </div>

              <Text size="sm" variant="muted" className="text-center pt-2">
                Questions? Reach out to us at hello@meridianatdusk.com
              </Text>
            </form>
          </Card>
        </section>

        {/* Additional Info */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card variant="dark">
            <Label className="text-[#E09A50]">Dress Code</Label>
            <Heading level={4} className="text-[#F2E0C0] mt-4 mb-4">
              Relaxed but intentional
            </Heading>
            <Text size="sm" className="text-[#D4B88A]">
              No strict dress code. Wear what makes you feel comfortable and ready to move. We'll be outdoors, so consider the weather.
            </Text>
          </Card>

          <Card variant="dark">
            <Label className="text-[#E09A50]">Photography</Label>
            <Heading level={4} className="text-[#F2E0C0] mt-4 mb-4">
              No phones on the floor
            </Heading>
            <Text size="sm" className="text-[#D4B88A]">
              Be present. We'll have a photographer capturing the moments. Photos will be shared with all attendees after the event.
            </Text>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 py-12 text-center">
        <div className="container mx-auto px-6">
          <Text size="sm" variant="muted">
            Meridian at Dusk Sessions © 2026
          </Text>
        </div>
      </footer>
    </div>
  );
}
