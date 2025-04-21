# Slidev Presentation Style Guide

This style guide is designed to help academics create effective and visually appealing presentations using Slidev with the Neversink theme. It covers best practices for structuring slides, utilizing Markdown, and leveraging Neversink’s features to enhance your academic presentations.

## 0. Outline

### 1. Introduction

- Purpose of the style guide: To assist academics in crafting effective Slidev presentations using the Neversink theme.
- Benefits of using Markdown with Slidev and Neversink:
    - Simplicity and speed of writing, allowing focus on content.
    - Beautiful, academic-friendly layouts that integrate seamlessly with Markdown.
    - Consistency through predefined layouts and components.
    - Ease of version control and collaboration.

### 2. Core Principles for Effective Slides

- **Clarity**: Communicate one clear message per slide, supported by Markdown’s simplicity.
- **Visual Hierarchy**: Use Markdown headings and lists to guide attention.
- **Progressive Disclosure**: Reveal content sequentially with Slidev directives in Markdown.
- **Text-Visual Balance**: Pair concise Markdown text with Neversink’s visual layouts.
- **Speaker Notes**: Use Markdown-compatible comments (`<!-- -->`) for detailed notes.
- How Neversink enhances these principles through its features.

### 3. Setting Up Your Slidev Presentation with Neversink

- Basic structure of a Slidev Markdown file:
    - Frontmatter setup with Neversink theme and layouts.
    - Slide separation with `---`.
- Using Neversink’s layouts via frontmatter (e.g., `layout: cover`, `color: teal-light`).
- Key rule: Avoid indenting HTML in Markdown files to ensure proper rendering (minimize HTML usage).

### 4. Creating Slides with Markdown and Neversink

- Writing content using Markdown syntax:
    - Headings (`#`, `##`), bold (`**`), italic (`*`), inline code (```), links (`[text](url)`).
    - Lists (bullet `-`, numbered `1.`), images (`![alt](url)`), code blocks (` `).
    - Equations (`$x^2$` inline, `$$x^2$$` display), tables, quotes (`>`).
    - Highlighting text with `==text==` (Neversink’s `markdown-it-mark` feature).
- Structuring content with Neversink layouts and slots (e.g., `::left::`, `::right::`).
- Applying visual design:
    - Selecting layouts (e.g., `two-cols-title`, `quote`) via frontmatter.
    - Using Neversink’s color schemes (e.g., `color: emerald-light`) in frontmatter.

### 5. Animations and Interactivity

- Using Slidev’s Markdown-compatible directives:
    - `<v-click>` for single reveals (e.g., `<v-click>` around Markdown content).
    - `<v-clicks>` for list items (e.g., `- Item` within `<v-clicks>`).
- Animating code blocks with line highlights (e.g., `js {1|2-3|all} `).
- Keeping animations purposeful to enhance academic content delivery.

### 6. Advanced Features: Neversink Components

- Overview of Neversink components (e.g., `Admonition`, `StickyNote`, `QRCode`).
- Including components in Markdown:
    - Syntax and props (e.g., `<Admonition title="Note" color="teal-light">`).
    - Combining with Markdown content for annotations or emphasis.
- Minimizing HTML by relying on component simplicity and readability.

### 7. Examples and Best Practices

- Sample slides for academic content:
    - Title slide with author and affiliation (`layout: cover`).
    - Figure slide with caption (`layout: full` or `two-cols-title`).
    - Table slide (`layout: default` with Markdown table).
    - Equation slide (`layout: default` with LaTeX).
    - Quote slide (`layout: quote`).
    - Progressive disclosure slide (`<v-clicks>` with bullet points).
- Tips for effective use:
    - Leveraging Neversink layouts for consistency.
    - Formatting citations with Markdown or minimal HTML.

### 8. Common Pitfalls and Solutions

- **Overusing HTML**: Prefer Markdown; use HTML only for complex layouts with Tailwind classes.
- **Indentation Errors**: Keep HTML flush left if used, but prioritize Markdown.
- **Inconsistent Design**: Stick to Neversink layouts for uniformity.
- **Neglecting Notes**: Include detailed speaker notes in `<!-- -->`.
- Solutions: Preview slides, use layouts effectively, and maintain Markdown focus.

## 1. Introduction

This style guide is crafted to assist academics in developing impactful and polished presentations using Slidev with the Neversink theme. Slidev is an innovative, open-source tool that empowers users to author slide decks using Markdown, blending the ease of text-based editing with the versatility of web-based technologies. The Neversink theme builds on this foundation by offering layouts, components, and styling options specifically designed for academic purposes—such as research seminars, classroom lectures, and conference talks.

The primary goal of this guide is to equip you with the knowledge and techniques to:

- Harness Markdown’s simplicity to streamline content creation and editing.
- Utilize Neversink’s thoughtfully designed layouts and features to produce visually consistent and engaging slides.
- Implement best practices for academic presentations, ensuring your slides are clear, well-structured, and audience-friendly.

### Why Use Slidev with Neversink?

Adopting Slidev with the Neversink theme offers several advantages tailored to the needs of academics:

- **Simplicity and Efficiency**: Markdown’s lightweight syntax allows you to focus on your content rather than wrestling with intricate formatting or code. This is particularly beneficial for academics who often need to revise and refine their material quickly.
- **Professional, Academic-Oriented Design**: Neversink provides a suite of layouts—like title slides, two-column text-and-figure combinations, and quotation highlights—that cater to scholarly content, ensuring your presentations look polished and cohesive.
- **Uniformity Across Slides**: With Neversink’s predefined typography, color schemes, and components, your presentation maintains a consistent aesthetic, enhancing its professional appeal.
- **Collaboration Made Easy**: Markdown files are plain text, making them ideal for version control systems (e.g., Git) and collaborative workflows with colleagues or co-authors.
- **Content-Centric Workflow**: By reducing reliance on manual HTML or CSS tweaks, Slidev and Neversink let you prioritize your message over presentation mechanics.

This guide will walk you through the core principles of effective slide design and demonstrate how to apply them using Markdown and Neversink’s features. Whether you’re new to Slidev or seeking to elevate your presentation game, these sections will provide a solid foundation for creating compelling academic slide decks.

---

## 2. Core Principles for Effective Slides

Designing effective slides requires balancing clarity, structure, and engagement to support your spoken narrative. Below are five key principles to guide your slide creation, each enhanced by Markdown’s simplicity and Neversink’s design capabilities.

### 1. **Clarity**

- **What It Means**: Each slide should convey a single, unambiguous idea or takeaway.
- **Markdown’s Contribution**: The minimal syntax of Markdown (e.g., headings with `#`, bullet points with `-`) encourages concise, focused content, stripping away unnecessary clutter.
- **Neversink’s Support**: Layouts like `default` and `quote` are optimized for presenting one central idea—whether it’s a key finding or a memorable statement—making it easy for your audience to follow.

### 2. **Visual Hierarchy**

- **What It Means**: Arrange content to direct the viewer’s eye logically, using size, color, and layout.
- **Markdown’s Contribution**: Headings (`#` for titles, `##` for subtitles) and lists (e.g., `- Item`) naturally establish structure. Emphasis with `**bold**` or `*italic*` highlights critical points.
- **Neversink’s Support**: The theme’s typography and monochromatic color options (e.g., `teal-light`, `navy`) reinforce hierarchy. Layouts like `two-cols-title` position titles prominently while organizing supporting content intuitively.

### 3. **Progressive Disclosure**

- **What It Means**: Present information incrementally to keep your audience engaged and avoid overwhelming them.
- **Markdown’s Contribution**: Slidev extends Markdown with directives like `<v-click>` (to reveal content on click) and `<v-clicks>` (for list items), seamlessly integrating animations into your text.
- **Neversink’s Support**: These directives work harmoniously within Neversink’s layouts, ensuring animations enhance your narrative without compromising the slide’s clean design.

### 4. **Text-Visual Balance**

- **What It Means**: Pair concise text with visuals (e.g., charts, images) to reinforce your message without overloading the slide.
- **Markdown’s Contribution**: Easily embed images with `![alt text](image-url)` or code with ` ``` ` blocks, keeping text brief and impactful.
- **Neversink’s Support**: Layouts like `two-cols-title` (text beside visuals) and `full` (full-screen images) simplify the integration of visuals, maintaining a balanced and uncluttered appearance.

### 5. **Speaker Notes**

- **What It Means**: Slides should serve as visual cues, with detailed explanations reserved for your spoken delivery or notes.
- **Markdown’s Contribution**: Use `<!-- Your notes here -->` comments to embed speaker notes directly in the Markdown file, keeping slides lean.
- **Neversink’s Support**: The theme encourages minimalistic slides, aligning with the principle that your audience sees the essentials while you retain the depth in your notes.

By embracing these principles, and leveraging Markdown’s readability and Neversink’s design tools, you can craft presentations that are clear, visually appealing, and effective in communicating your ideas.

---

## 3. Setting Up Your Slidev Presentation with Neversink

To start building your presentation, you’ll need to master the basic structure of a Slidev Markdown file and configure it with the Neversink theme. This section provides a detailed walkthrough of the setup process, including file structure, layout selection, and best practices for maintaining clean, readable slides.

### Basic Structure of a Slidev Markdown File

A Slidev presentation is typically housed in a single Markdown file (e.g., `slides.md`). Slides are separated by horizontal rules (`---`), and the file begins with a frontmatter block to define global settings.

Here’s a simple example:

```markdown
---
theme: neversink
colorSchema: light
---

# Introduction to My Research

A brief overview.

---

# Key Findings

- Finding 1
- Finding 2
```

- **Frontmatter**: The YAML block (`---` to `---`) at the file’s start specifies the theme (`neversink`), color scheme (`light` or `dark`), and other global options.
- **Slide Separation**: A standalone `---` marks the end of one slide and the start of the next.
- **Content**: Use standard Markdown syntax—headings (`#`), lists (`-`), bold (`**`), etc.—to write your slides.

### Configuring Neversink Layouts with Frontmatter

Neversink offers a variety of layouts to suit different slide purposes, from title pages to multi-column content. You can apply a layout to a specific slide by adding a frontmatter block at the beginning of that slide.

Example of a title slide:

```markdown
---
layout: cover
color: emerald-light
---

# My Research Talk

Presented by Dr. Jane Doe
```

Key elements:

- `layout: cover`: Selects the cover layout, perfect for a presentation’s opening slide.
- `color: emerald-light`: Applies a light emerald color scheme (Neversink supports options like `teal-light`, `black`, etc.).

Some common Neversink layouts include:

- `cover`: Bold, centered design for title slides.
- `default`: Standard layout for text-heavy content.
- `two-cols-title`: Two columns with a title, great for combining text and figures.
- `quote`: Highlights a quotation or key statement.
- `full`: Full-screen layout for visuals or immersive content.

You can override the global frontmatter for individual slides by adding a new frontmatter block before the slide’s content, as shown above.

### Best Practice: Avoid Indented HTML

While Slidev supports HTML within Markdown files, indented HTML can disrupt rendering. To ensure compatibility:

- **Correct HTML**: Start HTML at the beginning of a line, with no leading spaces or tabs:
    ```markdown
    <div style="color: blue;">
    This works fine.
    </div>
    ```
- **Incorrect HTML**: Avoid indentation, as it may break the slide:
    ```markdown
      <div style="color: blue;">
      This may not render correctly.
      </div>
    ```

For readability and maintainability, prefer Markdown over HTML whenever possible. Neversink’s layouts and Markdown syntax cover most presentation needs, reducing the need for custom markup.

## 4. Creating Slides with Markdown and Neversink

This section guides you through crafting slide content using Markdown syntax, structuring slides with Neversink’s layouts and slots, and applying visual design via frontmatter. Markdown’s readability makes it ideal for academic content creation, while Neversink’s layouts and styling options provide the flexibility to present that content effectively.

### Writing Content with Markdown Syntax

Markdown is the primary tool for writing Slidev slides, offering a lightweight way to format text, embed media, and structure information. Below are the key Markdown elements you’ll use, complete with examples:

- **Headings**: Use `#` for slide titles, `##` for sections, and `###` for subpoints to create a clear hierarchy.

    ```markdown
    # Slide Title

    ## Section Header

    ### Subpoint
    ```

- **Text Formatting**: Emphasize key ideas with `**bold**`, `*italic*`, or `==highlight==` (Neversink supports highlighting via `markdown-it-mark`).

    ```markdown
    This is **bold**, _italic_, and ==highlighted== text.
    ```

- **Lists**: Use `-` for unordered lists or numbers (`1.`, `2.`) for ordered lists to organize points logically.

    ```markdown
    - Bullet point one
    - Bullet point two

    1. Numbered item one
    2. Numbered item two
    ```

- **Links**: Insert hyperlinks with `[text](url)` to reference external resources.

    ```markdown
    Learn more at [Slidev’s website](https://sli.dev).
    ```

- **Images**: Embed visuals with `![alt text](image-url)`, using relative paths for local files.

    ```markdown
    ![Research Diagram](/images/diagram.png)
    ```

- **Code Blocks**: Showcase code with triple backticks (` ``` `), specifying the language for syntax highlighting.

    ````markdown
    ```python
    def greet(name):
        return f"Hello, {name}!"
    ```
    ````

    ```

    ```

- **Equations**: Use LaTeX for math—inline with `$` or display mode with `$$`.

    ```markdown
    Inline: $x^2 + y^2 = z^2$

    Display:
    $$ \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2} $$
    ```

- **Tables**: Build tables with `|` and `-` for structured data presentation.

    ```markdown
    | Variable | Value |
    | -------- | ----- |
    | X        | 10    |
    | Y        | 20    |
    ```

- **Quotes**: Highlight statements with `>` for blockquotes.
    ```markdown
    > "The only way to do great work is to love what you do." — Steve Jobs
    ```

These Markdown basics cover most academic needs. While HTML is an option for advanced formatting, sticking to Markdown keeps your slides clean and maintainable.

### Structuring Slides with Neversink Layouts and Slots

Neversink provides predefined layouts like `cover`, `two-cols-title`, and `quote`, which you select via frontmatter. Content is then organized into **slots**—named placeholders like `:: title ::` or `:: left ::`—using Markdown.

#### Example: `two-cols-title` Layout

This layout splits a slide into two columns with a title, ideal for pairing text with visuals.

```markdown
---
layout: two-cols-title
color: teal-light
columns: is-6
align: l-lt-lt
---

:: title ::

# Study Results

:: left ::

- **Finding 1**: Significant improvement observed.
- **Finding 2**: Consistent across all groups.

:: right ::
![Results Chart](/images/chart.png)
```

- **Frontmatter Explained**:

    - `layout: two-cols-title`: Chooses the two-column layout with a title.
    - `color: teal-light`: Sets a light teal theme.
    - `columns: is-6`: Gives each column equal width (6 units out of 12).
    - `align: l-lt-lt`: Aligns the title left (`l`) and both columns left-top (`lt`).

- **Slots Explained**:
    - `:: title ::`: The slide’s main heading.
    - `:: left ::`: Text content, such as a list.
    - `:: right ::`: Visual content, like an image.

This structure ensures a balanced, professional slide with minimal effort.

#### Common Layouts

- **`cover`**: A centered layout for title slides or introductions.
- **`default`**: A simple, centered design for text-focused slides.
- **`quote`**: Emphasizes a quotation with a clean backdrop.
- **`full`**: Maximizes space for large images or diagrams.

Check the [Layouts documentation](/layouts) for more options and details.

### Applying Visual Design with Frontmatter

Frontmatter lets you customize slide appearance without CSS, ensuring consistency across your presentation.

- **Color Schemes**: Use `color: [scheme]` (e.g., `navy`, `emerald-light`) to apply Neversink’s monochromatic palettes.
- **Layout Options**: Adjust parameters like `columns` or `titlepos` depending on the layout.

#### Example: Quote Slide

```markdown
---
layout: quote
color: sky-light
quotesize: text-xl
author: "Marie Curie"
---

"Nothing in life is to be feared, it is only to be understood."
```

This creates a light blue slide with a large quote and the author’s name, styled elegantly via frontmatter.

By mastering Markdown and Neversink’s layouts, you can create structured, visually appealing slides tailored to your academic content.

---

## 5. Animations and Interactivity

Animations in Slidev enhance engagement by revealing content step-by-step, keeping your audience focused. These features are embedded in Markdown using directives like `<v-click>` and `<v-clicks>`, making them intuitive to use.

### Using Slidev’s Directives for Animations

Slidev’s animation directives let you control when content appears, all within Markdown.

- **`<v-click>`**: Shows content on the next click.
- **`<v-clicks>`**: Applies click-based reveals to multiple items sequentially.

#### Example: Sequential Bullet Points

Reveal list items one at a time:

```markdown
- <v-click> First finding: 10% increase </v-click>
- <v-click> Second finding: 15% decrease </v-click>
- <v-click> Third finding: No change </v-click>
```

Or use `<v-clicks>` for brevity:

```markdown
<v-clicks>
- First finding: 10% increase
- Second finding: 15% decrease
- Third finding: No change
</v-clicks>
```

Each click displays the next point, pacing your delivery effectively.

#### Example: Staggered Text and Images

Reveal a figure and its description in sequence:

```markdown
<v-click>
![Experiment Setup](/images/setup.png)
</v-click>

<v-click>
The setup includes three sensors monitoring temperature.
</v-click>
```

This keeps the audience’s attention on one element at a time.

### Animating Code Blocks

For technical slides, animate code blocks to highlight lines progressively, guiding your audience through complex logic.

#### Example: Step-by-Step Code Explanation

Use `{1|2-3|all}` to specify highlight stages:

```python {1|2-3|all}
def process_data(data):
    filtered = [x for x in data if x > 0]  # Filter positive values
    total = sum(filtered)                   # Sum the values
    return total / len(filtered)            # Return average
```

- First click: Highlights line 1 (function definition).
- Second click: Highlights lines 2–3 (filtering and summing).
- Third click: Shows all lines (complete function).

This technique is invaluable for teaching or explaining algorithms.

### Purposeful Animations in Academic Contexts

Animations should enhance, not distract:

- **Guide Focus**: Reveal content gradually to emphasize key points.
- **Simplify Complexity**: Use code highlights to break down dense material.
- **Be Restrained**: Limit animations to avoid overwhelming viewers—typically one or two reveals per slide suffice.

Slidev’s Markdown-integrated animations make it easy to create dynamic, audience-friendly slides without sacrificing clarity.

---

## 6. Advanced Features: Neversink Components

Neversink’s custom components add functionality and flair to your slides, from highlighting notes to sharing links via QR codes. These components integrate directly into Markdown, maintaining simplicity while enhancing your presentation.

### Overview of Key Neversink Components

Here are some standout components for academic use:

- **`Admonition`**: A styled box for notes, tips, or warnings.
- **`Figure`**: A consistent way to display images and videos with captions.
- **`StickyNote`**: A note-like element for annotations.
- **`QRCode`**: A scannable code linking to external resources.
- **`SpeechBubble`**: A bubble for quotes or commentary.
- **`Kawaii`**: Playful characters for visual appeal.
- **`Cite`**: In-text citations with interactive hover tooltips.
- **`BiblioList`**: A formatted bibliography or reference list.

Each component is customizable via props, letting you tailor its appearance and behavior.

### Including Components in Markdown

Components are added using a tag-like syntax within Markdown, with props to adjust their settings.

#### Example: `Admonition` Component

Highlight a critical note:

```markdown
<Admonition title="Tip" color="teal-light">
Use consistent naming conventions for better readability.
</Admonition>
```

- **Props**:
    - `title`: The box’s heading (default: "Note").
    - `color`: A Neversink color scheme (e.g., `teal-light`).
- **Content**: Supports Markdown inside, like **bold** or _italics_.

This renders a teal box with a "Tip" title and your message.

#### Example: `Figure` Component

Display an image with a professional caption:

```markdown
<Figure
  src="/images/experiment-results.png"
  caption="Figure 1: Results showing significant improvement in the treatment group (p < 0.01)."
  class="w-4/5"
  color="blue-light"
/>
```

- **Props**:
    - `src`: The image or video source (required).
    - `caption`: Descriptive text below the image.
    - `class`: Tailwind classes for styling (e.g., `w-full`, `w-4/5`, `w-1/2`).
    - `color`: Caption styling using Neversink colors.
    - `type`: Set to `"video"` for video content.

#### Example: `PlotlyFigure` Component

Present interactive data visualizations with Plotly charts:

```markdown
<PlotlyFigure
  src="/data/temperature-chart.json"
  caption="Figure 2: Interactive temperature fluctuations over time during the experiment."
  class="w-4/5"
  height="400px"
  color="emerald-light"
/>
```

- **Props**:
    - `src`: URL to a JSON file containing Plotly figure data (required).
    - `caption`: Descriptive text below the chart.
    - `width`: Width of the component (defaults to 100%).
    - `height`: Height of the plot area (default: `"360px"`).
    - `fontSize`: Font size for plot elements like axis labels (default: `12`).
    - `color`: Caption styling using Neversink colors.
    - `class`: Tailwind classes for styling.

The `src` JSON file should follow the standard Plotly figure format with `data` and `layout` properties:

```json
{
    "data": [
        {
            "x": [1, 2, 3, 4],
            "y": [10, 15, 13, 17],
            "type": "scatter",
            "mode": "lines+markers",
            "name": "Series 1"
        }
    ],
    "layout": {
        "title": "Sample Plot",
        "xaxis": {"title": "X Axis"},
        "yaxis": {"title": "Y Axis"}
    }
}
```

#### Example: `StickyNote` Component

Add a side note:

```markdown
<StickyNote color="amber-light" width="200px">
Check the appendix for detailed proofs.
</StickyNote>
```

- **Props**:
    - `color`: Note color (e.g., `amber-light`).
    - `width`: Size in pixels (default: `180px`).

#### Example: `QRCode` Component

Share a resource link:

```markdown
<QRCode value="https://your-paper.com" :size="150" />
```

- **Props**:
    - `value`: The URL to encode.
    - `:size`: QR code dimensions (e.g., `150` for 150px).

### Combining Components with Markdown Content

Integrate components with your slide content for a cohesive look.

#### Example: Annotated Diagram

```markdown
---
layout: two-cols-title
color: emerald-light
---

:: title ::

# Experiment Overview

:: left ::
![Lab Setup](/images/lab.png)

:: right ::
<StickyNote color="emerald-light" width="250px">
Sensor A failed twice during initial tests.
</StickyNote>
```

This pairs a diagram with a matching sticky note, enhancing the slide’s clarity.

### Tips for Effective Component Use

- **Consistency**: Align component colors with your slide’s `color` setting.
- **Moderation**: Use one or two components per slide to maintain focus.
- **Positioning**: For precise placement, add `v-drag` (e.g., `<StickyNote v-drag>`), ensuring a fixed `width`.

Neversink components enrich your slides with minimal effort, keeping Markdown at the core of your workflow.

### Academic Citations with Cite and BiblioList

Academic presentations often require proper citation of sources. Neversink provides specialized components to handle citations elegantly.

#### Setting Up Bibliographies

1. Create a BibTeX file (e.g., `reference.bib`) in your `public` folder containing your bibliography entries:

```bibtex
@article{smith2023,
  author  = {Smith, John and Johnson, Emily},
  title   = {Recent Advances in Academic Presentations},
  journal = {Journal of Educational Technology},
  year    = {2023},
  volume  = {42},
  pages   = {128-142}
}
```

2. Configure citation settings in your global frontmatter:

```yaml
---
theme: neversink
biblio:
    numericalRefs: false # Use false for author-date format, true for numbered citations
    defaultBibFile: "/reference.bib"
---
```

#### Adding In-Text Citations

Use the `Cite` component to add citations within your text:

```markdown
Recent studies <Cite citeKey="smith2023" /> demonstrate the effectiveness of this approach.
```

This renders a citation that, when hovered over, displays the full reference details.

You can also use custom text within the citation:

```markdown
<Cite citeKey="smith2023">Smith et al. (2023)</Cite> found significant improvements.
```

#### Citation Styles

Neversink supports two primary citation styles:

1. **Author-Date** (default): `<Cite citeKey="smith2023" />` renders as `[Smith & Johnson, 2023]`
2. **Numerical**: When `numericalRefs: true` is set, citations appear as `[1]`, `[2]`, etc.

#### Creating Bibliography Slides

Add a reference list to your presentation with the `BiblioList` component:

```markdown
---
layout: default
---

# References

<BiblioList />
```

## 7. Examples and Best Practices

This section offers concrete examples of how to structure various types of academic slides using Slidev with the Neversink theme. Each example includes Markdown code and a brief explanation, demonstrating how to apply Neversink’s layouts and components effectively. We also share best practices to ensure your presentation is consistent, clear, and engaging.

### Sample Slides for Academic Content

#### **Title Slide with Author and Affiliation**

Use the `cover` layout for a bold, centered title slide that introduces your presentation professionally.

```markdown
---
layout: cover
color: navy-light
---

# Advances in Quantum Computing

**Dr. Emily Carter**
Department of Physics, University of Science

<!-- This slide sets the stage for the talk, providing context for the audience. -->
```

- **Explanation**: The `cover` layout centers the title and author details, while the `navy-light` color scheme adds a professional touch. Speaker notes are embedded in comments for your reference during delivery.

#### **Figure Slide with Caption**

The `two-cols-title` layout is perfect for pairing a figure with its description or caption.

```markdown
---
layout: two-cols-title
color: emerald-light
columns: is-6
align: l-lt-lt
---

:: title ::

# Experiment Results

:: left ::

<Figure
  src="/images/temp-time.png"
  caption="Figure 1: Temperature fluctuations over time during the reaction, showing a sharp increase at the 10-minute mark."
  class="w-4/5"
  color="emerald-light"
/>

:: right ::

- **Figure 1**: Temperature fluctuations over time during the reaction.
- Key observation: A sharp increase at the 10-minute mark.

:: default ::
Source: Carter et al., 2023
```

- **Explanation**: The left column displays the figure, the right column provides its caption, and the default slot adds a citation. This layout ensures a balanced, clear presentation of visual data.

#### **Table Slide**

Use the `default` layout to present structured data, such as experimental results or comparisons.

```markdown
---
layout: default
color: light
---

# Participant Demographics

| Age Group | Number | Percentage |
| --------- | ------ | ---------- |
| 18-25     | 120    | 30%        |
| 26-35     | 150    | 37.5%      |
| 36-45     | 80     | 20%        |
| 46+       | 50     | 12.5%      |

_Data collected from 400 participants in the 2023 study._
```

- **Explanation**: A simple Markdown table, centered via the `default` layout, keeps the focus on the data. The italicized note at the bottom provides context without cluttering the table.

#### **Equation Slide**

Present mathematical content with the `default` layout, using LaTeX for equations.

```markdown
---
layout: default
color: white
---

# Key Equations

**Schrödinger's Equation:**

$$ i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t) $$

**Explanation**: Describes the quantum state evolution over time.

**Heisenberg Uncertainty Principle:**

$$ \Delta x \Delta p \geq \frac{\hbar}{2} $$

**Explanation**: Limits the precision of position and momentum measurements.
```

- **Explanation**: Equations are rendered prominently with LaTeX, paired with concise explanations in Markdown. The `white` color scheme ensures readability against complex notation.

#### **Quote Slide**

Highlight an inspiring or relevant quote with the `quote` layout.

```markdown
---
layout: quote
color: sky-light
quotesize: text-xl
author: "Albert Einstein"
---

"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
```

- **Explanation**: The `quote` layout centers the text and author, creating a visually striking slide. Adjust `quotesize` to fit longer quotes comfortably.

#### **Progressive Disclosure Slide**

Use `<v-clicks>` to reveal points sequentially, maintaining audience engagement.

```markdown
---
layout: default
color: light
---

# Research Challenges

<v-clicks>
- Data scarcity in early experiments
- High computational costs for simulations
- Ethical considerations in data collection
</v-clicks>

<!-- Each challenge will be discussed in detail. [click] Reveal each point as you elaborate. -->
```

- **Explanation**: Each bullet appears with a new click, allowing you to pace your explanation. Speaker notes include a `[click]` marker to sync your delivery with the animation.

#### **Video Presentation Slide**

Showcase video content with playback controls:

```markdown
---
layout: default
color: blue-light
---

# Method Demonstration

<Figure
  type="video"
  src="/videos/experiment.mp4"
  caption="Video 1: Demonstration of the experimental procedure for sample preparation."
  class="w-2/3 mx-auto"
  progress
  color="blue-light"
/>
```

- **Explanation**: The `Figure` component supports videos with optional `progress` tracking, `autostart`, and `repeat` properties. Users can click the video to toggle play/pause, making it ideal for demonstrations or recorded experiments.

### Tips for Effective Use

- **Leverage Neversink Layouts for Consistency**:

    - Use a small set of layouts (e.g., `default`, `two-cols-title`, `quote`) to maintain a cohesive look across slides.
    - Apply the same `color` scheme to similar slides (e.g., all data slides in `emerald-light`) for visual unity.

- **Format Citations with Markdown**:

    - Place citations in the default slot or as plain text below content.
    - Example with minimal HTML for styling:
        ```markdown
        <div class="text-sm text-gray-500 mt-2">
        Carter, E., et al. (2023). *Journal of Quantum Studies*, 12(3), 45-60.
        </div>
        ```
    - Prefer Markdown for simplicity, reserving HTML for precise formatting needs.

- **Use Components Sparingly**:

    - Enhance slides with Neversink components like `StickyNote` or `Admonition`, but limit to one or two per slide to avoid distraction.
    - Match component colors to the slide’s `color` scheme for a seamless look.

- **Preview Regularly**:

    - Use Slidev’s live preview to test animations, layout balance, and readability.
    - Adjust frontmatter settings (e.g., `columns`, `align`) to optimize spacing and alignment.

- **Use the Figure Component for Academic Visuals**:
    - Prefer the `Figure` component over plain images for proper academic captioning.
    - Match the `color` property with your slide's color scheme.
    - For multiple figures on one slide, use consistent Tailwind classes and a grid layout.
    - Example for multiple figures:
        ```markdown
        <div class="grid grid-cols-2 gap-4">
          <Figure src="/images/fig1.png" caption="Figure 1: Control group results" class="w-full" />
          <Figure src="/images/fig2.png" caption="Figure 2: Experimental group results" class="w-full" />
        </div>
        ```

These examples and tips enable you to craft professional, academic slides that align with best practices while maximizing Slidev and Neversink’s capabilities.

---

## 8. Common Pitfalls and Solutions

Even with Slidev’s straightforward design and Neversink’s features, certain challenges can disrupt your presentation’s flow or polish. This section identifies these pitfalls and provides actionable solutions to ensure your slides remain effective and professional.

### Common Pitfalls

#### **1. Overusing HTML**

- **Issue**: Excessive reliance on HTML for formatting can make your Markdown files complex, hard to read, and difficult to maintain, undermining Slidev’s simplicity.
- **Solution**: Use Markdown for text, lists, images, and tables whenever possible. Reserve HTML for specific needs (e.g., custom layouts or components) and keep it minimal and well-structured.

#### **2. Indentation Errors with HTML**

- **Issue**: Indenting HTML within Markdown files can break Slidev’s rendering, causing content to vanish or display incorrectly.
- **Solution**: Keep HTML tags flush left (no leading spaces or tabs). Indent within the HTML block if needed for readability, but not in the Markdown structure.

    **Incorrect**:

    ```markdown
        <div style="color: blue;">
        This may not render.
        </div>
    ```

    **Correct**:

    ```markdown
    <div style="color: blue;">
    This works fine.
    </div>
    ```

#### **3. Inconsistent Design**

- **Issue**: Using too many layouts, colors, or custom styles can result in a disjointed, unprofessional presentation.
- **Solution**: Adhere to Neversink’s predefined layouts and a limited color palette (e.g., 2-3 schemes). Apply consistent frontmatter settings across slides. For custom elements, use Neversink components or minimal, reusable HTML.

#### **4. Neglecting Speaker Notes**

- **Issue**: Omitting speaker notes can leave slides lacking context, especially for complex academic topics, making delivery harder.
- **Solution**: Embed detailed notes using `<!-- Your notes here -->` for each slide. These notes support rehearsal and ensure your spoken content complements the visuals.

### Solutions and Best Practices

- **Prioritize Markdown**:

    - Use Markdown for most content creation—it’s faster, cleaner, and easier to edit or share.
    - Limit HTML to cases where Markdown falls short, such as advanced styling or custom components.

- **Keep HTML Flush Left**:

    - Ensure all HTML starts at the beginning of the line to avoid rendering issues.
    - Test slides in preview mode if HTML is used extensively.

- **Maintain Design Uniformity**:

    - Select a primary layout for content slides (e.g., `default` or `two-cols-title`).
    - Use a consistent `color` scheme for similar slide types (e.g., all intro slides in `navy-light`).
    - Incorporate Neversink components like `Admonition` or `StickyNote` sparingly for visual accents, aligning their colors with the slide theme.

- **Include Comprehensive Speaker Notes**:

    - Add notes in `<!-- -->` comments to outline talking points or emphasize key ideas.
    - Include `[click]` markers in notes to sync with animations like `<v-clicks>`, ensuring smooth delivery.

- **Preview and Adjust**:
    - Regularly view your slides in Slidev’s preview mode to catch rendering or design issues early.
    - Fine-tune frontmatter (e.g., `columns`, `align`) to perfect layout and spacing.

By anticipating these pitfalls and applying these solutions, you can create presentations that are visually appealing, easy to maintain, and impactful for academic audiences.
