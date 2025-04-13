# QR Code Component Example

## Easily add QR codes to your slides

<div class="grid grid-cols-2 gap-4">
<div>

### Basic Usage
```html
<QRCode data="https://example.com" />
```

### With Custom Positioning
```html
<QRCode
  data="https://example.com"
  className="absolute top-0 right-0 m-2"
/>
```

### With Custom Size and Format
```html
<QRCode
  data="https://example.com"
  size="200"
  format="png"
/>
```

</div>
<div class="flex flex-col items-center justify-center gap-4">

<!-- Basic example -->
<QRCode data="https://sli.dev" />

<!-- Example with custom styling -->
<QRCode
  data="https://sli.dev/guide/component"
  size="150"
  className="border-4 border-blue-500 rounded-lg"
/>

</div>
</div>

<!--
This slide demonstrates the QRCode component.

The component accepts several props:
- data: The URL or text to encode (required)
- size: Size in pixels (default: 125)
- format: Image format (default: svg)
- alt: Alt text for accessibility
- className: Custom CSS classes
- style: Inline style object
-->
