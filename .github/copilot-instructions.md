# Slidev Guide

## Core Features
- Markdown-based presentations with Vue components
- Developer-focused with code highlighting and live coding
- Built-in themes, layouts, and components
- Recording, presenter mode, drawings/annotations
- Export to PDF, PPTX, PNG, or SPA

## Basic Syntax
```markdown
# Slide 1
Content for first slide

---
# Slide 2
Content for second slide

---
layout: two-cols
---

# Left Column
Text

::right::

# Right Column
Text
```

## Key Features

### Code Blocks
````markdown
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

### Drawings
Enable drawing tools with toolbar button <carbon-pen /> or use stylus on tablets.

### Presenter Mode
Press <carbon-user-speaker /> or visit `/presenter` for:
- Speaker notes
- Timer
- Next slide preview
- Drawing tools

### Exports
```bash
slidev export     # PDF
slidev export --format png  # PNGs
slidev build     # SPA
```

## Customization

### Theme
```yaml
---
theme: default  # or any installed theme
---
```

### Layouts
```yaml
---
layout: cover  # built-in layouts: default, cover, center, etc.
---
```

### Styling
- Use HTML/CSS directly in markdown
- Custom components in `components/` directory
- Global styles in `style.css`
