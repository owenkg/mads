# Meridian at Dusk Sessions - Design System

A comprehensive design system for building the Meridian at Dusk event experience. This design system embodies the warm, understated aesthetic of the brand with print-inspired visual elements.

## Installation & Usage

All components are located in `/src/app/components/design-system/` and can be imported like this:

```tsx
import { Button, Card, Badge } from './components/design-system';
```

## Core Design Principles

### Color Palette
- **Primary Colors**: Midnight Espresso (#1A0C04), Dark Mahogany (#3D1F0A), Burnt Sienna (#7A3B10)
- **Warm Tones**: Amber Dusk (#C4712A), Golden Hour (#E09A50), Warm Sand (#D4B88A)
- **Base**: Parchment (#F2E0C0) - the default background
- **Accent Colors**: Terracotta (#C4412A), Dusty Rose (#D4845C), Umber (#8A6040)

### Typography
- **Serif (Headings)**: Playfair Display - italic, elegant
- **Sans (Body)**: DM Sans - clean, readable
- **Mono (Labels/Stamps)**: Courier Prime - utilitarian, stamp-like

### Visual Identity
- **Grain & Texture**: All components have subtle paper grain overlay
- **Print Aesthetic**: Components feel tactile, never too digital
- **Sunburst Motif**: Recurring visual element across touchpoints
- **Risograph Effects**: Overlapping colors with slight misregistration
- **Stamp Elements**: Woodblock-style labels with imperfect edges

## Components

### Buttons

**Variants:**
- `primary` - Dark background, light text (main CTAs)
- `secondary` - Outlined, transparent (secondary actions)
- `accent` - Amber/golden background (important actions)
- `ghost` - Minimal, underline on hover (navigation)

**Props:**
- `variant?: 'primary' | 'secondary' | 'accent' | 'ghost'`
- `fullWidth?: boolean`
- Standard button HTML attributes

**Example:**
```tsx
<Button variant="primary">Request Invite</Button>
<Button variant="secondary" fullWidth>Learn More</Button>
```

### Cards

Cards with built-in grain texture overlay.

**Variants:**
- `light` - Parchment background (default)
- `dark` - Midnight espresso background with light text

**Props:**
- `variant?: 'light' | 'dark'`
- `className?: string`
- `children: React.ReactNode`

**Example:**
```tsx
<Card variant="light">
  <h3>Session 001</h3>
  <p>Event details here...</p>
</Card>
```

### Badges & Tags

#### Badge
Mono-spaced uppercase labels for categories and statuses.

**Variants:**
- `outline` - Border only (locations, general labels)
- `solid` - Filled dark background (status)
- `accent` - Filled accent color (actions, highlights)

**Example:**
```tsx
<Badge variant="outline">Kampala · Uganda</Badge>
<Badge variant="solid">Session 001</Badge>
<Badge variant="accent">Invite Only</Badge>
```

#### Tag
Rounded pill-style tags for metadata.

**Variants:**
- `default` - Subtle warm background
- `accent` - Terracotta tint
- `dark` - Dark background

**Props:**
- `dot?: boolean` - Shows a dot indicator

**Example:**
```tsx
<Tag variant="default">Deep House</Tag>
<Tag variant="accent" dot>Live Now</Tag>
```

### Typography Components

#### Heading
Serif headings with automatic sizing.

**Props:**
- `level?: 1 | 2 | 3 | 4 | 5 | 6`
- `italic?: boolean` (default: true)

**Example:**
```tsx
<Heading level={1}>Where the sun meets the sound</Heading>
<Heading level={2}>Session 001</Heading>
```

#### Text
Body text with variants.

**Props:**
- `size?: 'sm' | 'base' | 'lg' | 'xl'`
- `variant?: 'body' | 'muted' | 'accent'`
- `as?: 'p' | 'span' | 'div'`

**Example:**
```tsx
<Text size="lg" variant="body">
  This is not a party announcement...
</Text>
```

#### Label
Small mono-spaced labels.

**Props:**
- `uppercase?: boolean` (default: true)

**Example:**
```tsx
<Label>Session Time</Label>
```

### Stamp & Visual Elements

#### Stamp
Print-inspired stamp effect with rough edges.

**Props:**
- `size?: 'sm' | 'md' | 'lg'`
- `rotate?: number` (rotation in degrees)

**Example:**
```tsx
<Stamp size="md" rotate={-5}>Invite Only</Stamp>
```

#### Sunburst
Half-sun with rays motif.

**Props:**
- `size?: 'sm' | 'md' | 'lg' | 'xl'`
- `rays?: number` (default: 12)
- `color?: string`

**Example:**
```tsx
<Sunburst size="md" rays={16} />
```

#### VinylLabel
Circular vinyl record-inspired element.

**Props:**
- `size?: 'sm' | 'md' | 'lg'`

**Example:**
```tsx
<VinylLabel size="md" />
```

#### RisographOverlay
Overlapping color circles with print effect.

**Props:**
- `color1?: string`
- `color2?: string`
- `offset?: number`

### Form Elements

#### Input
Text input with label.

**Props:**
- `label: string`
- `error?: string`
- Standard input HTML attributes

**Example:**
```tsx
<Input 
  label="Full Name" 
  placeholder="John Doe"
  error="This field is required"
/>
```

#### Textarea
Multi-line text input.

**Props:**
- `label: string`
- `error?: string`
- Standard textarea HTML attributes

**Example:**
```tsx
<Textarea 
  label="What music are you listening to at 4PM?" 
  placeholder="Share a track, artist, or feeling..." 
/>
```

#### Select
Dropdown selection.

**Props:**
- `label: string`
- `options: { value: string; label: string }[]`
- `error?: string`

**Example:**
```tsx
<Select 
  label="How did you hear about us?"
  options={[
    { value: 'friend', label: 'Friend or word of mouth' },
    { value: 'instagram', label: 'Instagram' },
  ]}
/>
```

#### Checkbox
Custom styled checkbox.

**Props:**
- `label: string`
- Standard checkbox attributes

**Example:**
```tsx
<Checkbox label="I agree to receive updates" />
```

#### RadioGroup
Group of radio buttons.

**Props:**
- `label: string`
- `name: string`
- `options: { value: string; label: string }[]`
- `value?: string`
- `onChange?: (value: string) => void`

### Links

**Variants:**
- `default` - Amber color, simple hover
- `underline` - Underlined accent
- `muted` - Subtle gray tone

**Props:**
- `external?: boolean` - Adds external link indicator

**Example:**
```tsx
<Link variant="default" href="#">Learn More</Link>
<Link variant="underline" href="#" external>Instagram</Link>
```

### Alerts & Notices

#### Alert
Contextual messages with variants.

**Variants:**
- `info` - Informational
- `success` - Positive confirmation
- `warning` - Caution
- `error` - Error state

**Props:**
- `title?: string`
- `onClose?: () => void` - Makes alert dismissible

**Example:**
```tsx
<Alert variant="success" title="Success">
  Your invitation request has been submitted.
</Alert>
```

#### Notice
Simple highlighted notice box.

**Example:**
```tsx
<Notice>
  <strong>Note:</strong> Location details will be revealed 24 hours before.
</Notice>
```

### Loading States

#### Loader
Animated loading indicators.

**Variants:**
- `spinner` - Circular spinner
- `dots` - Bouncing dots
- `pulse` - Pulsing circle

**Props:**
- `size?: 'sm' | 'md' | 'lg'`

**Example:**
```tsx
<Loader variant="spinner" size="md" />
```

#### Skeleton
Placeholder loading states.

**Props:**
- `variant?: 'text' | 'circular' | 'rectangular'`
- `width?: string`
- `height?: string`

**Example:**
```tsx
<Skeleton variant="rectangular" height="200px" />
```

### Layout

#### Divider
Horizontal or vertical divider.

**Props:**
- `variant?: 'solid' | 'dotted' | 'thick'`
- `spacing?: 'sm' | 'md' | 'lg'`
- `orientation?: 'horizontal' | 'vertical'`

**Example:**
```tsx
<Divider variant="dotted" spacing="md" />
```

### Navigation

#### Tabs
Tabbed navigation component.

**Props:**
- `tabs: { id: string; label: string }[]`
- `activeTab: string`
- `onChange: (id: string) => void`

**Example:**
```tsx
<Tabs 
  tabs={[
    { id: 'one', label: 'First Tab' },
    { id: 'two', label: 'Second Tab' }
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
/>
```

## Usage Guidelines

### When to use Primary vs Secondary buttons
- **Primary**: Main call-to-action (Request Invite, Submit RSVP)
- **Secondary**: Secondary actions (Learn More, Cancel)
- **Accent**: Special emphasis (Limited offer, Featured action)
- **Ghost**: Tertiary navigation or subtle actions

### Card Usage
- Use **light cards** for content containers and information display
- Use **dark cards** for featured content, highlights, or dramatic emphasis
- Both variants automatically include grain texture overlay

### Typography Hierarchy
1. **H1-H2**: Page titles and major sections (Playfair Display, italic)
2. **H3-H4**: Subsections and card titles
3. **Body text**: Use `<Text>` component with appropriate sizes
4. **Labels**: Use `<Label>` for form labels and metadata
5. **Stamps**: Use `<StampText>` or `<Stamp>` for date/session markers

### Color Usage
- **Backgrounds**: Always use Parchment (#F2E0C0), never pure white
- **Primary text**: Midnight Espresso (#1A0C04)
- **Secondary text**: Umber (#8A6040)
- **Accents**: Terracotta (#C4412A) for highlights
- **Hover states**: Generally shift to Golden Hour (#E09A50)

## Accessibility

- All form inputs have associated labels
- Buttons include proper ARIA labels where needed
- Color contrast ratios meet WCAG AA standards
- Focus states are clearly visible

## Browser Support

The design system is built with modern CSS and works in all evergreen browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

For more examples, visit the Design System showcase page at `/design-system`.
