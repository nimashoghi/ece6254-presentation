# Comprehensive Presentation Style Guide for Slidev

## Core Principles

1. **Clarity First**: Every slide should communicate one clear message
2. **Visual Hierarchy**: Guide attention through size, color, and placement
3. **Progressive Disclosure**: Reveal information sequentially to maintain focus
4. **Text-Visual Balance**: Use text sparingly, let visuals carry the message
5. **Speaker Notes as Content**: Slides are visual aids, notes contain the full message

## Important HTML and Markdown Formatting Rules

> **CRITICAL:** Do not indent HTML in Slidev markdown files. Unlike regular markdown, indenting HTML in Slidev will completely break the formatting and rendering. Always start HTML tags at the beginning of the line without any spaces or tabs before them.

✅ Correct:
```markdown
<div class="flex">
<div>First column</div>
<div>Second column</div>
</div>
```

❌ Incorrect:
```markdown
<div class="flex">
  <div>First column</div>
  <div>Second column</div>
</div>
```

This applies to all HTML tags within Slidev markdown, including animation wrappers like `<v-click>`, layout containers, and styling elements.

## Slidev Technical Foundation

### Basic Structure

```markdown
---
# This is frontmatter for the presentation
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
---

# Presentation Title
Subtitle information

---

# Second Slide Title
Content for second slide

<!--
Speaker notes go here.
[click] Click markers sync with animations.
-->
```

### Slide Separation and Organization
- Separate slides with `---` on its own line
- Start each slide with a clear `# Title`
- Group related slides with consistent styling

### Layouts

```markdown
---
layout: two-cols
---

# Left Column
Content

::right::

# Right Column
Content
```

Common layouts:
- `default`: Standard slide
- `cover`: Title slide
- `two-cols`: Two column layout
- `section`: Section divider
- `image-right`: Text left, image right
- `quote`: Centered quote

### Speaker Notes

```markdown
# Slide Title
Content

<!--
Detailed speaker notes here.
[click] Notes after this marker appear when animation triggers.
[click:3] This appears at the third click.
-->
```

## Animation System

### Basic Animations

```markdown
<v-click>
Content revealed on click
</v-click>

<!-- Or as a directive -->
<div v-click>Content revealed on click</div>

<!-- Sequential list items -->
<v-clicks>
- First point
- Second point
- Third point
</v-clicks>
```

### Advanced Animations

```markdown
<!-- Show and hide by click index -->
<div v-click="[2, 4]">Appears on click 2, disappears on click 4</div>

<!-- Relative positioning -->
<div v-click>First</div>
<div v-click="+2">Appears after two more clicks</div>

<!-- Immediate follow-up -->
<div v-click>This appears first</div>
<div v-after>This appears together with the previous element</div>
```

### Code Block Animations

```markdown
```js {1|2-3|all}
function example() {
  const a = 1
  const b = 2
  return a + b
}
```
```

## Visual Design Principles

### Color Usage

1. **Limited Palette**: 3-5 colors maximum
   - Primary: Main brand/theme color
   - Secondary: Complementary color for emphasis
   - Neutral: Grays for background/supporting elements
   - Accent: Highlights for important points

2. **Consistent Application**:
   - Titles: Primary color
   - Important points: Secondary or accent
   - Background: Subtle neutral shade
   - Data visualization: Consistent color mapping

3. **Contrast for Readability**:
   - Text must have 4.5:1 contrast ratio with background
   - Use Tailwind classes like `text-gray-900 bg-gray-100`

### Typography

1. **Hierarchy Through Type**:
   - Slide titles: 32-40px
   - Main points: 24-28px
   - Supporting text: 18-22px
   - Labels/captions: 14-16px

2. **Font Pairing**:
   - Headers: Sans-serif for clarity (Montserrat, Roboto, Inter)
   - Body: Sans-serif for screen readability
   - Max two font families per presentation

3. **Text Formatting**:
   - Use bold for emphasis instead of italics or underline
   - Maintain consistent alignment (left-aligned typically best)
   - Limit line length to 40-60 characters

### Spatial Organization

1. **White Space**:
   - Margins: Consistent spacing from slide edges (5-10% of slide)
   - Padding: Space between elements (min 20px)
   - Breathing room: Don't crowd elements

2. **Grid System**:
   ```markdown
<div class="grid grid-cols-2 gap-4">
<div>Left content</div>
<div>Right content</div>
</div>
   ```

3. **Visual Balance**:
   - Distribute visual weight evenly
   - Use the rule of thirds for key element placement
   - Align elements to create order (left/center/right)

## Content Development

### Slide Types and Usage

1. **Title Slide**:
   - Project name, team, date
   - Visual that represents the core concept
   - Keep minimal, make memorable

2. **Problem/Challenge Slide**:
   - Clear statement of problem
   - Key statistics or evidence
   - Visual representation of challenge

3. **Approach/Method Slide**:
   - Visual framework/diagram
   - Step-by-step process revealed progressively
   - Limited technical detail (keep in notes)

4. **Results/Data Slide**:
   - One key finding per slide
   - Clean data visualization
   - Insight first, then supporting data

5. **Conclusion Slide**:
   - Restate key message
   - Clear takeaway or next step
   - Visual that reinforces main point

### Progressive Disclosure Strategies

1. **Conceptual Progression**:
   - Start with familiar concepts
   - Build to more complex ideas
   - Use animations to add detail incrementally

2. **Information Layering**:
   - Core message visible immediately
   - Supporting details revealed on click
   - Contextual elements last

3. **Synchronized Narration**:
   ```markdown
<v-clicks>
- Initial concept
- Building detail
- Final insight
</v-clicks>

<!--
I'll start by explaining the basic concept.
[click] Then, I'll add how this works in practice.
[click] Finally, I'll reveal why this matters for our project.
-->
   ```

### Visual Elements

1. **Diagrams & Icons**:
   - Use simple, meaningful icons
   - Create diagrams with clear visual hierarchy
   - Animate complex diagrams to build understanding

2. **Images**:
   - High-quality, relevant images
   - Crop to focus on key elements
   - Consider consistency in style across slides

3. **Data Visualization**:
   - Choose appropriate chart type for data
   - Minimize non-data ink
   - Highlight key insights visually

## Advanced Slidev Features

### Embedding Components

```markdown
<Tweet id="1390115482657726468" />

<div class="flex justify-center">
<img src="/images/diagram.png" class="h-60" />
</div>
```

### Using Tailwind Classes

Common useful classes:
- Layout: `flex`, `grid`, `items-center`, `justify-between`
- Spacing: `p-4`, `m-2`, `gap-6`, `space-y-3`
- Typography: `text-xl`, `font-bold`, `text-blue-700`
- Decoration: `rounded-lg`, `shadow`, `border`
- Effects: `hover:scale-105`, `transition-all`

Example:
```markdown
<div class="flex justify-between items-center p-4 bg-blue-50 rounded-lg shadow">
<div class="text-xl font-bold text-blue-800">Key Point</div>
<img src="/icon.png" class="h-10 w-10" />
</div>
```

### Responsive Design

- Use relative sizing: `h-1/2`, `w-full`, `text-lg`
- Conditional classes: `sm:hidden lg:flex`
- Aspect ratio: `aspect-video`, `aspect-square`

```markdown
<div class="h-40 md:h-60 lg:h-80 w-full bg-gray-100 rounded">
Responsive container
</div>
```

## Case Studies & Examples

### Problem Statement Slide

```markdown
# Why Materials Discovery Matters

<div class="grid grid-cols-2 gap-4">
<div>
<v-clicks>

- **Every technology starts with a material**
  - But discovery takes 20+ years lab-to-market

- **Finding the needle in a 10²⁰ haystack**
  - Only ~1 in 100,000 structures are stable
  - Vast combinatorial space to explore

- **Generative ML: The "Virtual Lab"**
  - AI trained on known stable structures
  - Generates novel, physically realistic candidates

</v-clicks>
</div>

<div class="flex items-center justify-center">
<img v-click src="/crystal-structure.png" class="h-60 rounded shadow" />
</div>
</div>

<!--
Let's understand why materials discovery is so important and challenging.

[click] Every technology we rely on starts with a material discovery. But traditionally, bringing a new material from lab to market takes over 20 years.

[click] The challenge is finding viable materials in an astronomically large search space. With about 10²⁰ possible materials, only about 1 in 100,000 are stable enough to synthesize.

[click] Generative machine learning becomes our "virtual lab" by training AI on known stable materials to generate novel candidates with higher stability probability.

[click] This visualization shows a crystal structure - the type of 3D arrangement our models are trying to generate.
-->
```

### Data Visualization Slide

```markdown
# Performance Comparison

<div class="flex justify-center">
<div class="w-4/5">
<img v-click src="/comparison-chart.png" class="w-full" />
</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4">
<div v-click class="bg-green-50 p-2 rounded text-center">
<div class="text-xl font-bold text-green-700">95%</div>
<div class="text-sm">Validity</div>
</div>
<div v-click class="bg-blue-50 p-2 rounded text-center">
<div class="text-xl font-bold text-blue-700">87%</div>
<div class="text-sm">Coverage</div>
</div>
<div v-click class="bg-purple-50 p-2 rounded text-center">
<div class="text-xl font-bold text-purple-700">2.3x</div>
<div class="text-sm">Speed Improvement</div>
</div>
</div>

<!--
Let's look at how our different models performed.

[click] This chart shows the performance across our key metrics. Notice how CDVAE (in blue) consistently outperforms other approaches.

[click] Our top model achieved 95% validity, meaning nearly all generated structures were physically plausible.

[click] We also reached 87% coverage of the test set, indicating our model generates diverse and realistic candidates.

[click] Finally, we observed a 2.3x speed improvement over previous state-of-the-art approaches.
-->
```

## Common Pitfalls and Solutions

1. **Overcrowded Slides**
   - Solution: Break into multiple slides
   - Rule: Max 3-5 bullet points per slide

2. **Text-Heavy Content**
   - Solution: Convert to visuals, put details in notes
   - Rule: 6x6 (max 6 words per line, 6 lines per slide)

3. **Inconsistent Styling**
   - Solution: Create template slides first
   - Rule: Define color, font, spacing system before content

4. **Poor Contrast**
   - Solution: Use Tailwind's color system (avoid light-on-light)
   - Rule: Test slides in actual presentation environment

5. **Complex Animations**
   - Solution: Use animations purposefully, not decoratively
   - Rule: Each animation should reveal meaningful information

6. **HTML Indentation**
   - Solution: Never indent HTML in Slidev markdown files
   - Rule: Place all HTML tags flush left (no spaces/tabs before tags)

## Conclusion

Creating effective presentations is both art and science. The best slides:

1. Support rather than replace the speaker
2. Progressively disclose information
3. Use visuals strategically
4. Maintain consistent visual language
5. Respect audience cognitive load
6. Follow proper HTML formatting (no indentation)

Slidev provides powerful tools to implement these principles through markdown-based slides, tailwind styling, and animation capabilities. By combining technical features with solid design principles, you can create presentations that are both visually compelling and intellectually engaging.
