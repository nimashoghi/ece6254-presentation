---
layout: cover
background: https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1800
class: text-center
theme: neversink
---

# Generative Models for 3D Atomistic Structure Discovery
## A Comparative Study

<div class="flex justify-center">
  <img src="https://storage.googleapis.com/qdrant-us/images/fbd3c73cd62a3c35633a74fad39ec80b.png" class="h-60 rounded shadow" />
</div>

<div class="absolute bottom-10">
  <span class="font-700">
    Nima Shoghi, Timothy Soetojo, Jamshid Hassanpour
  </span>
</div>

<!--
Good afternoon everyone. Today we're presenting our project on generative models for 3D atomistic structure discovery.

This project explores how we can use AI to discover new materials by generating stable 3D atomic structures. Our work compares several cutting-edge deep learning approaches for this challenging task.

[The image shows a visualization of a crystal structure with atoms arranged in a 3D lattice - these complex arrangements determine the properties of materials we use every day, from electronics to medicine.]

We'll walk you through why this problem matters, our approach to solving it, and what we discovered from our experiments.
-->

---

# Why Materials Discovery Matters

<div class="grid grid-cols-2 gap-4">
<div>
<v-clicks>

- **Every technology starts with a material**
  - But discovery takes 20+ years lab-to-market

- **Finding the needle in a $10^{20}$ haystack**
  - Only ~1 in 100,000 structures are stable
  - Vast combinatorial space to explore

- **Generative ML: The "Virtual Lab"**
  - AI trained on known stable structures
  - Generates novel, physically realistic candidates
  - Impact: Batteries, Carbon Capture, Drug Delivery

</v-clicks>
</div>

<div class="flex items-center justify-center">
  <img v-click src="https://storage.googleapis.com/qdrant-us/images/cb92fb6f4beb362f9a1fde4ae0051289.png" class="h-60 rounded shadow" />
</div>
</div>

<!--
Let's understand why materials discovery is so important and challenging.

[click] Every technology we rely on - from smartphones to solar panels - starts with a material discovery. But traditionally, bringing a new material from lab discovery to market application takes over 20 years. This slow cycle limits technological progress.

[click] The challenge is finding viable materials in an astronomically large search space. There are approximately 10²⁰ possible inorganic materials, but only about 1 in 100,000 structures are chemically stable enough to synthesize. Finding these rare stable structures manually is like finding a needle in a cosmic-sized haystack.

[click] This is where generative machine learning becomes our "virtual lab." By training AI on databases of known stable materials, we can generate novel candidates that have a much higher probability of stability. This approach could revolutionize how we discover materials for critical applications like next-generation batteries, carbon capture technologies, and targeted drug delivery systems.

[click] The image on the right shows a visualization of a crystal structure. Our project specifically compares different state-of-the-art generative methods to determine which approaches best capture the physical constraints that make materials stable in the real world.
-->

---
layout: default
---

# What Defines a Material Structure?

<div class="grid grid-cols-2 gap-4">
<div>
<v-clicks>

- **Fundamentally: Atoms in 3D Space**
  - Positions of atoms in xyz coordinates
  - Chemical elements at each position (C, Si, O, etc.)

- **Materials are Infinite Periodic Structures**
  - Not just a handful of atoms, but infinitely repeating
  - Most materials form ordered, crystalline arrangements

- **Three Essential Components**
  - Unit Cell/Lattice: The repeating 3D "box"
  - Atom Types: Elements present in the material
  - Fractional Coordinates: Positions within the cell (0-1)

</v-clicks>
</div>

<div class="flex flex-col items-center justify-center space-y-4">
  <div v-click class="flex items-center justify-center">
    <img src="https://storage.googleapis.com/qdrant-us/images/88c8c2c5a7e0e9048f32eb0f6f94a1a1.png" class="h-40 rounded shadow" />
    <div class="text-xs ml-2">Atoms within one unit cell</div>
  </div>
  <div v-click class="flex items-center justify-center">
    <img src="https://storage.googleapis.com/qdrant-us/images/2b35832d8c95ff55f2ae8c3a5c3b2aef.png" class="h-40 rounded shadow" />
    <div class="text-xs ml-2">Infinitely repeating structure</div>
  </div>
</div>
</div>

<!--
Let's get concrete about what we're actually trying to generate.

[click] At the most basic level, materials are collections of atoms positioned in 3D space. Each atom has a specific location and a chemical identity (like carbon, silicon, or oxygen). This is an intuitive way to think about materials - just atoms arranged in space.

[click] But what makes materials science challenging is that real materials aren't just a handful of atoms - they're infinitely repeating structures. Most solid materials form ordered, crystalline arrangements where the same pattern of atoms repeats in all directions throughout space. This periodic nature is fundamental to understanding and generating materials.

[click] To efficiently represent these infinite structures, we need three components:
- The unit cell or lattice: a 3D "box" defined by vectors that repeats throughout space
- The atom types: which chemical elements are present in our material
- The fractional coordinates: where each atom sits within the unit cell, using a 0-1 scale relative to the cell dimensions

[click] Here you see a visualization of atoms within a single unit cell - this is our fundamental building block.

[click] And this shows how that unit cell repeats infinitely to form the complete material structure. Our generative models need to learn how to create all three components while ensuring the resulting structure is physically stable.
-->
