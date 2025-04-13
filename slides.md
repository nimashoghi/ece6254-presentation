---
layout: cover
background: https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1800
class: text-center
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

# The Challenge: Discovering New Materials

<div class="grid grid-cols-2 gap-4">
<div>
<v-clicks>

- Materials discovery has **transformative potential**
  - Next-gen batteries
  - Advanced catalysts
  - New pharmaceuticals

- Traditional discovery is **extremely expensive**
  - Trial and error approach
  - Limited by human intuition
  - Years of laboratory work

- AI can **accelerate discovery** by orders of magnitude

</v-clicks>
</div>

<div class="flex items-center justify-center">
  <img v-click src="https://storage.googleapis.com/qdrant-us/images/cb92fb6f4beb362f9a1fde4ae0051289.png" class="h-60 rounded shadow" />
</div>
</div>

<!--
Let's start by understanding why this problem matters.

The discovery of new materials has transformative potential across multiple domains:
[click] From next-generation batteries that could power electric vehicles for thousands of miles, to advanced catalysts that could make industrial processes more efficient, to new pharmaceuticals that could treat diseases more effectively.

[click] Traditionally, materials discovery has been extremely expensive and time-consuming. It relies heavily on trial and error approaches, is limited by human intuition about what might work, and can take years of laboratory work to identify a single viable new material.

[click] This is where AI comes in. By generating and evaluating potential materials computationally, AI can accelerate discovery by orders of magnitude, potentially screening millions of candidates before any lab work begins.

[click] The image on the right shows a computational representation of a crystal structure. Creating realistic, physically valid structures like this is the key challenge our project addresses.
-->
