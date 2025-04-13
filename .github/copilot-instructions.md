# Comprehensive Guide to Writing Slidev Slides

## Introduction

Slidev is a powerful presentation tool designed for developers that combines the simplicity of Markdown with the flexibility of web technologies. This guide focuses on creating effective slides with Slidev, emphasizing concise content on slides paired with comprehensive speaker notes, and leveraging animations with click markers.

## Basic Principles

### Write Slides, Then Speaker Notes

Every slide should follow this pattern:
1. Write concise slide content
2. Add detailed speaker notes that explain everything you'll say
3. Use animations to progressively reveal content
4. Add [click] markers in speaker notes to sync with animations

```md
# Slide Title
Brief, concise content

<!--
Comprehensive speaker notes with everything you'll say.
-->
```

### Slide Content Should Be Minimal

- Keep text on slides brief and focused
- Use visual elements (images, diagrams, code) where appropriate
- Rely on speaker notes for detailed explanations
- Use animations to guide attention and prevent cognitive overload

## Slidev Markdown Syntax Basics

### Slide Separation

Slides are separated by `---` with newlines before and after:

```md
# First Slide
Content for first slide

---
# Second Slide
Content for second slide
```

### Frontmatter Configuration

The presentation and individual slides can be configured with YAML frontmatter:

```md
---
# This is the headmatter (first frontmatter block)
# that configures the entire presentation
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
---

# Presentation Title
Subtitle or author information

---
# Regular Slide
No frontmatter needed for basic slides

---
# Slide with Custom Layout
---
layout: two-cols
---
Left column content

::right::
Right column content
```

## Speaker Notes with Click Markers

### Basic Speaker Notes

Add speaker notes at the end of each slide using HTML comments:

```md
# Important Topic
Key bullet points

<!--
These detailed speaker notes will only be visible to you in presenter mode.
You can write all the details, examples, and explanations here.
-->
```

### Click Markers in Speaker Notes

Click markers allow you to sync your speaker notes with animations on your slides:

```md
# Progressive Disclosure

<v-clicks>
- First point
- Second point
- Third point
</v-clicks>

<!--
I'll begin by explaining the concept.
[click] First, we need to understand this initial point which involves...
[click] Building on that, the second point demonstrates how...
[click] Finally, the third point shows that...
-->
```

When presenting, the section of notes after each [click] marker will be highlighted as you advance through animations, helping you stay in sync with your slides.

### Advanced Click Markers

You can skip multiple clicks using the index syntax:

```md
<!--
Initial explanation
[click] First click point
[click:3] This will be highlighted at the third click
[click] Back to normal sequence for the fourth click
-->
```

## Animations

### Basic Click Animations

The v-click directive/component is the primary way to create animations:

```md
# Animation Examples

<!-- As a component -->
<v-click>This appears after one click</v-click>

<!-- As a directive -->
<div v-click>This also appears after one click</div>

<!-- Multiple elements using v-clicks -->
<v-clicks>
- This appears on first click
- This appears on second click
- This appears on third click
</v-clicks>
```

### Customizing Animation Timing

You can control when elements appear and disappear:

```md
<!-- Show at click 2, hide at click 4 -->
<div v-click="[2, 4]">Visible only during clicks 2 and 3</div>

<!-- Relative positioning -->
<div v-click>First</div>
<div v-click="'+2'">Appears after 2 more clicks</div>

<!-- Using v-after to show immediately after previous v-click -->
<div v-click>This appears first</div>
<div v-after>This appears together with the previous element</div>
```

### Hide After Clicking

You can make elements disappear after clicking:

```md
<div v-click.hide>This will disappear after clicking</div>
```

## Code Blocks with Animations

Slidev excels at presenting code with progressive animations:

```md
# Code Example

```js {1|2-3|all}
function example() {
  const a = 1
  const b = 2
  return a + b
}
```

<!--
Let's examine this function.
[click] First, we define the function signature.
[click] Then we set up our variables.
[click] And finally we see the whole function together.
-->
```

## Practical Examples

### Example Slide with Progressive Disclosure

```md
---
layout: default
---

# Data Visualization Best Practices

<v-clicks>
- Choose the right chart type
- Minimize visual noise
- Use color purposefully
- Label directly when possible
- Provide context
</v-clicks>

<!--
Let's discuss some key best practices for effective data visualization.

[click] First, always choose the right chart type for your data. Bar charts for comparisons, line charts for trends over time, scatter plots for correlations, etc.

[click] Second, minimize visual noise by removing unnecessary gridlines, borders, and decorative elements that don't contribute to understanding.

[click] Third, use color purposefully. Color should convey meaning, not just decoration. Use it to highlight key points or distinguish categories.

[click] Fourth, label directly when possible instead of relying on legends. This reduces the cognitive load of going back and forth between the visualization and the legend.

[click] Finally, always provide context. Visualizations without proper titles, axes labels, and annotations can be misleading or confusing.
-->
```

### Example with Code Animation

```md
# Building a Vue Component

```vue {1-3|4-9|10-12|all}{at:1}
<template>
  <div class="counter">
    <p>Count: {{ count }}</p>
    <button @click="increment">
      Increment
    </button>
    <button @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>
```

<!--
Let's build a simple counter component in Vue.

[click] We start with the template section where we define the structure.
  - We have a div with a paragraph showing the current count.

[click] Next, we add buttons for incrementing and decrementing.
  - Each button has a click event handler.
  - The @click directive is Vue's way of binding to events.

[click] Finally, in the script section, we define our component's logic.
  - We import ref from Vue for reactive state.
  - We create a reactive count variable.
  - We define methods to increment and decrement the count.

[click] And that's our complete counter component!
-->
```

## Layouts and Components

### Two-Column Layout Example

```md
---
layout: two-cols
---

# Left Column
Content for the left side

::right::

# Right Column
Content for the right side

<!--
In this slide, I'm using a two-column layout to compare two different aspects.
On the left, we see... [continue with detailed explanation]
While on the right, we have... [continue with detailed explanation]
-->
```

### Using Components

```md
# Embedding Components

<Tweet id="1390115482657726468" />

<div class="flex justify-center">
  <img src="/images/diagram.png" class="h-60" />
</div>

<!--
Here I'm showing a tweet that illustrates the point about...
Below it is a diagram that demonstrates the workflow we've been discussing.
-->
```

## Best Practices

1. **One concept per slide**: Keep slides focused on a single idea or message

2. **Visual over verbal**: Use visuals when possible instead of text

3. **Progressive disclosure**: Reveal complex information step by step

4. **Sync with speaker notes**: Always use [click] markers to stay aligned with your animations

5. **Practice with presenter view**: Test your slides in presenter mode to ensure the flow works

6. **Consistent styling**: Maintain visual consistency throughout your presentation

7. **Accessible design**: Use sufficient contrast and readable font sizes

## Conclusion

Following these guidelines will help you create engaging, effective presentations with Slidev. The combination of concise slides, comprehensive speaker notes, and well-synchronized animations with click markers will ensure your presentations are both visually appealing and content-rich.

Remember the core principle: **slides are visual aids, not the presentation itself**. Your speaker notes contain the real content, while the slides support and enhance your delivery.
