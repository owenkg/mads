import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Clock, Heart, Share2, Play, ArrowLeft } from 'lucide-react';
import { Button } from '../components/design-system/Button';
import { Input } from '../components/design-system/Input';
import { Textarea } from '../components/design-system/Textarea';
import { Badge } from '../components/design-system/Badge';
import { Card } from '../components/design-system/Card';
import { Tabs } from '../components/design-system/Tabs';
import { Heading, Text, Label, StampText } from '../components/design-system/Typography';
import { Divider } from '../components/design-system/Divider';
import { Stamp, Tag } from '../components/design-system/Stamp';
import { Alert, Notice } from '../components/design-system/Alert';
import { Select, Checkbox, RadioGroup } from '../components/design-system/FormElements';
import { IconButton } from '../components/design-system/IconButton';
import { Link } from '../components/design-system/Link';
import { Loader, Skeleton } from '../components/design-system/Loader';
import { Sunburst, VinylLabel, RisographOverlay } from '../components/design-system/VisualElements';

export function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState('components');
  
  return (
    <div className="min-h-screen bg-[#F2E0C0] font-sans selection:bg-[#E09A50] selection:text-[#1A0C04] relative pb-24">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-20 z-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>

      {/* Header */}
      <header className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <a href="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#C4412A] transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to Guidelines
          </a>
          <p className="font-mono text-xs md:text-sm text-[#C4412A] tracking-[0.2em] uppercase mb-4">Meridian at Dusk</p>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1A0C04] italic leading-tight mb-8">
            Event Design System
          </h1>
          <p className="font-sans text-lg text-[#3D1F0A] max-w-2xl leading-relaxed">
            The functional components and patterns needed to build the Meridian at Dusk invitation and event experience.
          </p>
          
          <div className="mt-8">
            <a 
              href="/invitation-example" 
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#C4712A] hover:text-[#E09A50] transition-colors border-b border-[#C4712A] pb-1"
            >
              View Full Invitation Example →
            </a>
          </div>
        </div>
      </header>

      {/* Sticky Tab Navigation */}
      <nav className="sticky top-0 z-40 bg-[#F2E0C0]/90 backdrop-blur-md border-y border-[#3D1F0A]/10 mb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <Tabs 
            tabs={[
              { id: 'components', label: 'Core Components' },
              { id: 'forms', label: 'Form Patterns' },
              { id: 'cards', label: 'Card Patterns' }
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </nav>

      <main className="container mx-auto px-6 max-w-6xl">
        {/* Core Components */}
        <section className={`space-y-16 ${activeTab === 'components' ? 'block' : 'hidden'}`}>
          
          <div className="space-y-8">
            <h2 className="font-serif italic text-2xl text-[#1A0C04] border-b border-[#3D1F0A]/10 pb-4">Buttons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Primary</span>
                <Button variant="primary">Request Invite</Button>
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Secondary</span>
                <Button variant="secondary">Learn More</Button>
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Accent</span>
                <Button variant="accent">Submit RSVP</Button>
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Ghost</span>
                <Button variant="ghost">View Lineup</Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <IconButton icon={Heart} label="Like" variant="default" />
              <IconButton icon={Share2} label="Share" variant="accent" />
              <IconButton icon={Play} label="Play" variant="ghost" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif italic text-2xl text-[#1A0C04] border-b border-[#3D1F0A]/10 pb-4">Badges & Labels</h2>
            <div className="flex flex-wrap gap-8 items-end">
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Outline (Location)</span>
                <Badge variant="outline">Kampala · Uganda</Badge>
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Solid (Status)</span>
                <Badge variant="solid">Session 001</Badge>
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Accent (Action)</span>
                <Badge variant="accent">Invite Only</Badge>
              </div>
            </div>
            
            <Divider variant="dotted" spacing="md" />
            
            <div className="flex flex-wrap gap-4">
              <Tag variant="default">Deep House</Tag>
              <Tag variant="accent" dot>Live Now</Tag>
              <Tag variant="dark">Exclusive</Tag>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif italic text-2xl text-[#1A0C04] border-b border-[#3D1F0A]/10 pb-4">Typography</h2>
            
            <div className="space-y-8 bg-white/20 p-8 rounded-sm border border-[#3D1F0A]/10">
              <div className="space-y-3">
                <Label>Heading 1 (Serif, Italic)</Label>
                <Heading level={1}>Where the sun meets the sound</Heading>
              </div>
              
              <Divider spacing="sm" />
              
              <div className="space-y-3">
                <Label>Heading 2 (Serif, Italic)</Label>
                <Heading level={2}>Session 001</Heading>
              </div>
              
              <Divider spacing="sm" />
              
              <div className="space-y-3">
                <Label>Body Text (DM Sans)</Label>
                <Text size="lg">
                  This is not a party announcement. It is an invitation — and your answer shapes what we build.
                </Text>
              </div>
              
              <Divider spacing="sm" />
              
              <div className="space-y-3">
                <Label>Stamp Text (Courier)</Label>
                <StampText>SESSION 001</StampText>
              </div>
              
              <Divider spacing="sm" />
              
              <div className="space-y-3">
                <Label>Links</Label>
                <div className="flex gap-6 flex-wrap">
                  <Link variant="default" href="#">Learn More</Link>
                  <Link variant="underline" href="#">View Gallery</Link>
                  <Link variant="muted" href="#">@meridianatdusk</Link>
                  <Link variant="default" href="#" external>Instagram</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif italic text-2xl text-[#1A0C04] border-b border-[#3D1F0A]/10 pb-4">Stamps & Visual Elements</h2>
            
            <div className="flex flex-wrap gap-12 items-center bg-[#F2E0C0] p-12 rounded-sm">
              <Stamp size="sm" rotate={3}>Session 001</Stamp>
              <Stamp size="md" rotate={-5}>Invite Only</Stamp>
              <Stamp size="lg" rotate={2}>Kampala</Stamp>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 bg-white/20 p-8 rounded-sm">
              <div className="space-y-3">
                <Label>Sunburst</Label>
                <div className="flex justify-center py-4 bg-[#F2E0C0] rounded-sm">
                  <Sunburst size="md" rays={16} />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Vinyl Label</Label>
                <div className="flex justify-center py-4 bg-[#F2E0C0] rounded-sm">
                  <VinylLabel size="md" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Risograph Effect</Label>
                <div className="flex justify-center py-4 bg-[#F2E0C0] rounded-sm">
                  <RisographOverlay />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif italic text-2xl text-[#1A0C04] border-b border-[#3D1F0A]/10 pb-4">Alerts & Notices</h2>
            
            <div className="space-y-4">
              <Alert variant="info" title="Information">
                This is an informational message about the event details.
              </Alert>
              
              <Alert variant="success" title="Success">
                Your invitation request has been submitted successfully.
              </Alert>
              
              <Alert variant="warning" title="Limited Capacity">
                Only a few spots remain for Session 001.
              </Alert>
              
              <Notice>
                <strong>Note:</strong> Location details will be revealed to confirmed guests 24 hours before the event.
              </Notice>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif italic text-2xl text-[#1A0C04] border-b border-[#3D1F0A]/10 pb-4">Loading States</h2>
            
            <div className="flex flex-wrap gap-12 items-center bg-white/20 p-12 rounded-sm">
              <div className="space-y-3 flex flex-col items-center">
                <Label>Spinner</Label>
                <Loader variant="spinner" size="md" />
              </div>
              
              <div className="space-y-3 flex flex-col items-center">
                <Label>Dots</Label>
                <Loader variant="dots" size="md" />
              </div>
              
              <div className="space-y-3 flex flex-col items-center">
                <Label>Pulse</Label>
                <Loader variant="pulse" size="md" />
              </div>
            </div>
            
            <div className="space-y-4 bg-white/20 p-8 rounded-sm">
              <Label>Skeleton Loading</Label>
              <Skeleton variant="text" height="2rem" />
              <Skeleton variant="text" height="1rem" width="80%" />
              <Skeleton variant="rectangular" height="200px" />
            </div>
          </div>
          
        </section>

        {/* Form Patterns */}
        <section className={`space-y-16 ${activeTab === 'forms' ? 'block' : 'hidden'}`}>
          <div className="max-w-xl mx-auto space-y-12">
            <div className="text-center space-y-4">
               <h2 className="font-serif italic text-3xl text-[#1A0C04]">Request an Invitation</h2>
               <p className="font-sans text-sm text-[#3D1F0A] leading-relaxed">
                 Tell us who you are and what music moves you. This is not a party announcement. It is an invitation.
               </p>
            </div>
            
            <form className="space-y-8 bg-white/30 p-8 md:p-12 rounded-sm border border-[#3D1F0A]/5 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email Address" type="email" placeholder="john@example.com" />
              <Input label="Instagram Handle (Optional)" placeholder="@username" />
              
              <Textarea 
                label="What music are you listening to at 4PM?" 
                placeholder="Share a track, artist, or feeling..." 
              />
              
              <Select 
                label="How did you hear about us?"
                options={[
                  { value: '', label: 'Select an option...' },
                  { value: 'friend', label: 'Friend or word of mouth' },
                  { value: 'instagram', label: 'Instagram' },
                  { value: 'twitter', label: 'Twitter' },
                  { value: 'other', label: 'Other' },
                ]}
              />
              
              <RadioGroup 
                label="Preferred Session Time"
                name="session-time"
                options={[
                  { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
                  { value: 'dusk', label: 'Dusk Session (4PM - Sunset)' },
                  { value: 'evening', label: 'Evening (After Sunset)' },
                ]}
              />
              
              <Checkbox label="I agree to receive updates about future sessions" />
              
              <div className="pt-8 flex justify-center">
                <Button variant="primary" className="w-full md:w-auto px-12">Send Request <ArrowRight size={16} /></Button>
              </div>
              <p className="text-center font-mono text-[10px] text-[#8A6040] uppercase tracking-widest pt-4">
                We review all requests. Space is strictly limited.
              </p>
            </form>
          </div>
        </section>

        {/* Card Patterns */}
        <section className={`space-y-16 ${activeTab === 'cards' ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Event Info Card */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Event Info Card (Light)</span>
              <Card variant="light">
                <h3 className="font-serif italic text-2xl text-[#1A0C04] mb-6">Session 001</h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <Calendar size={18} className="text-[#C4412A] mt-1" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-[#8A6040] mb-1">Date</p>
                      <p className="font-sans text-[#1A0C04]">Saturday, October 24th</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-[#C4412A] mt-1" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-[#8A6040] mb-1">Time</p>
                      <p className="font-sans text-[#1A0C04]">12:00 PM - Sunset</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#C4412A] mt-1" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-[#8A6040] mb-1">Location</p>
                      <p className="font-sans text-[#1A0C04]">Kampala, Uganda<br/><span className="text-sm opacity-60">Revealed to guests</span></p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[#3D1F0A]/10">
                  <Button variant="secondary" fullWidth>Request Invite</Button>
                </div>
              </Card>
            </div>

            {/* Dark Lineup Card */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A6040]">Lineup / Feature Card (Dark)</span>
              <Card variant="dark">
                <div className="flex justify-between items-start mb-12">
                  <Badge variant="accent">Sounds</Badge>
                  <span className="font-mono text-xs text-[#E09A50] tracking-widest uppercase">Secret</span>
                </div>
                
                <h3 className="font-serif italic text-3xl text-[#F2E0C0] mb-4">Deep House &amp; Soulful Amapiano</h3>
                <p className="font-sans text-[#D4B88A] leading-relaxed mb-8 flex-1">
                  No lights. No stage. Just the music and the people who feel it. The lineup is intentionally hidden until the day of the event.
                </p>
                
                <div className="border-t border-[#D4B88A]/20 pt-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#D4B88A]/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#C4712A] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#1A0C04]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#E09A50]">Curated by</p>
                    <p className="font-sans font-bold text-sm text-[#F2E0C0]">Meridian Residents</p>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}