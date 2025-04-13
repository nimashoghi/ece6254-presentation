---
layout: cover
background: https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1800
class: text-center
theme: neversink
transition: slide-left
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

  Slides: [https://nima.sh/ece6254-presentation](nima.sh/ece6254-presentation)
</div>

<div class="absolute bottom-15 right-15">
<QRCode data="https://nima.sh/ece6254-presentation" />
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

<div class="grid grid-cols-12 gap-4">
<div class="col-span-8">
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

<div class="flex flex-col items-center justify-center space-y-4 col-span-4">
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

---
layout: default
---

# Two Key Generative Tasks

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click class="border p-4 rounded-lg bg-blue-50">
  <h3 class="text-xl text-blue-700 mb-2">De Novo Generation (DNG)</h3>
  <div class="flex mb-2 flex-row items-center justify-center">
  <div class="text-5xl font-bold mr-4">?</div>
  <div class="text-2xl mr-1">→</div>
  <!-- ![alt text](public/Si(NiO2)2-Pnma.png) -->
  <img src="/Si(NiO2)2-Pnma.png" class="h-32" />
  </div>
  <div class="text-sm mt-2">
  <b>Goal:</b> Generate completely new materials (composition + structure)
  </div>
  <div class="text-xs mt-2">
  <b>Evaluation metrics:</b> Validity, Coverage, Property Distribution
  </div>
</div>

<div v-click class="border p-4 rounded-lg bg-green-50">
  <h3 class="text-xl text-green-700 mb-2">Crystal Structure Prediction (CSP)</h3>
  <div class="flex mb-2 flex-row items-center justify-center">
  <div class="text-2xl font-bold mr-4">SiO₂</div>
  <div class="text-2xl mr-1">→</div>
  <!-- ![alt text](public/SiO2-P3_121-1.png) -->
  <img src="/SiO2-P3_121-1.png" class="h-32" />
  </div>
  <div class="text-sm mt-2">
  <b>Goal:</b> Predict stable structure given a specific composition (ie., chemical formula)
  </div>
  <div class="text-xs mt-2">
  <b>Evaluation metrics:</b> RMSE, Match Rate with ground truth
  </div>
</div>

<div v-click class="col-span-2 bg-gray-50 p-3 rounded-lg border text-center text-sm">
  Our study compares different generative approaches across both tasks
</div>
</div>

<!--
Let's understand the two fundamental generative tasks we're exploring in this project.

[click] First is De Novo Generation, or DNG. This is the more ambitious task where we aim to generate completely new materials from scratch. The model must learn to create both the chemical composition (what elements to use) and the 3D structure (how to arrange those atoms).

To evaluate DNG models, we look at:
- Validity: Are the generated structures physically plausible?
- Coverage: Do they represent diverse and realistic materials?
- Property distributions: Do their physical properties match those of real materials?

[click] The second task is Crystal Structure Prediction, or CSP. Here, we already know the chemical composition (like SiO₂ for quartz), but we need to predict the stable 3D arrangement of those atoms.

CSP is evaluated using:
- RMSE: How close are the predicted atom positions to the ground truth?
- Match Rate: What percentage of predictions match known structures within a reasonable tolerance?

[click] In our comparative study, we evaluate different generative approaches on both of these tasks to understand their strengths and limitations.
-->

---
layout: default
---

# Flow Matching: A More Efficient Alternative to Diffusion

<div class="grid grid-cols-2 gap-8">
<div>
<v-clicks>

- **Diffusion Models:** Stochastic random walks
  - Add random noise gradually (forward)
  - Learn to denoise step-by-step (reverse)
  - Uses SDE: $dx = f(x,t)dt + g(t)dw$

- **Flow Matching:** Deterministic straight paths
  - Direct transport from noise → data
  - Learn vector field for optimal flow
  - Uses ODE: $\frac{dx}{dt} = v_\theta(t, x)$

- **Advantages:**
  - More computationally efficient sampling
  - Simpler to train and implement
  - More flexible choice of base distribution

</v-clicks>
</div>

<div class="flex flex-col items-center justify-center">
  <!-- ![alt text](public/image-1.png) -->
  <img v-click="1" src="/image-1.png" class="h-48" />
  <!-- ![alt text](public/image.png) -->
  <img v-click="2" src="/image.png" class="h-48 mt-4" />
  <div v-click="2" class="text-xs mt-2 ml--5">

  FM learns **deterministic paths** from noise to data distribution

  </div>
</div>
</div>

<!--
Let me explain Flow Matching and how it differs from diffusion models you might be more familiar with.

[click] Diffusion models work by gradually adding random noise to data in the forward process, then learning to reverse this process step by step. They're based on Stochastic Differential Equations, which involve randomness at each step. The equation shows how the change in x depends on both a deterministic term f and a stochastic term dw.

[click] Flow Matching, in contrast, learns deterministic straight-line paths from noise to data. Instead of random walks, it focuses on learning a vector field that transports points optimally between distributions. This approach uses Ordinary Differential Equations, which are deterministic. The equation shows how the change in x over time depends only on the learned vector field v_θ.

[click] The advantages of Flow Matching include significantly better computational efficiency during sampling, simpler training (no complex noise schedules to tune), and more flexibility in choosing base distributions, which is especially helpful for materials with complex geometries.

[click] In this illustration, you can see how Flow Matching learns direct paths from the noise distribution to the data distribution. Rather than meandering through a stochastic process, it follows optimal transport trajectories.

[click] This approach is particularly well-suited for our materials generation task because crystal structures have complex symmetries and constraints that are easier to handle with deterministic flows.
-->

---
layout: default
---

# FlowMM: Training and Sampling for Material Generation

<!-- ![alt text](public/image-2.png) -->
<img src="/image-2.png" class="" />

<div class="grid grid-cols-2 gap-4">
<div v-click class="col-span-1">

#### **Training the Vector Field:**
- Define base distributions for: atom positions (uniform on torus), atom types (binary encoding), lattice parameters (informed priors)
- Learn vector field $v_\theta$ that follows optimal transport paths
- Incorporates crystal symmetries: translation, rotation, permutation

</div>

<div v-click class="col-span-1">

#### **Sampling = Solving an ODE:**
- Draw from base distributions
- Integrate: $\frac{dx}{dt} = v_\theta(t, x)$ from $t=0$ to $t=1$
- Only ~50-250 steps needed (vs. 1000+ for diffusion)
- Result: Realistic 3D material structure

</div>
</div>

<!--
Now let's look at how FlowMM specifically works for generating materials. The image at the top visualizes how the vector field transforms random noise into realistic material structures.

[click] For training, FlowMM needs to learn a vector field that can transform simple distributions into complex material structures. It defines separate base distributions for different components:
- For atom positions, it uses a uniform distribution on a torus (to handle periodic boundary conditions)
- For atom types, it uses an efficient binary encoding rather than one-hot vectors
- For lattice parameters, it uses informed priors based on real materials

The model learns a vector field that follows optimal transport paths between these base distributions and real materials, while respecting crystal symmetries like translation, rotation, and permutation.

[click] For sampling, we simply solve an Ordinary Differential Equation. We:
1. Draw samples from our base distributions
2. Numerically integrate the ODE dx/dt = v_θ(t,x) from t=0 to t=1
3. The integration can be done with standard numerical methods like Euler or Runge-Kutta

The remarkable efficiency advantage is that we only need about 50-250 integration steps to get high-quality materials, compared to 1000+ steps typically needed for diffusion models. The result is a complete material specification with 3D atomic positions, atom types, and unit cell parameters that respect physical constraints and symmetries.
-->

---
layout: default
---

# Dataset and Evaluation Metrics

<div class="grid grid-rows-2 gap-6 h-full">
<div v-click class="border-2 p-5 rounded-lg bg-blue-50 flex flex-col items-center">
  <h3 class="text-2xl text-blue-700 mb-3">MP-20 Dataset</h3>
  <div class="flex items-center gap-10">
  <!-- ![alt text](public/image-3.png) -->
  <img src="/image-3.png" class="h-28" />
  <div class="flex flex-col gap-2">
    <div class="text-lg"><b>45,231</b> materials</div>
    <div class="text-lg"><b>89</b> elements</div>
    <div class="text-lg"><b>1-20</b> atoms per unit cell</div>
  </div>
  </div>
  <div class="text-sm mt-3 text-gray-700 max-w-3xl">
    Experimentally known inorganic materials with mostly globally stable structures.
  </div>
</div>

<div class="grid grid-cols-2 gap-8">
  <div v-click class="border-2 p-4 rounded-lg bg-green-50">
    <h3 class="text-xl text-green-700 mb-2">DNG Metrics</h3>
    <div class="grid gap-2 text-sm">
      <div><b>Validity:</b></div>
      <div class="pl-4">- Structural (atom spacing)</div>
      <div class="pl-4">- Compositional (charge neutrality)</div>
      <div><b>Coverage:</b></div>
      <div class="pl-4">- Precision (realism of generated)</div>
      <div class="pl-4">- Recall (diversity of generated)</div>
      <div><b>Property Distribution:</b></div>
      <div class="pl-4">- Density</div>
      <div class="pl-4">- Number of elements</div>
    </div>
  </div>

  <div v-click class="border-2 p-4 rounded-lg bg-purple-50">
    <h3 class="text-xl text-purple-700 mb-2">CSP Metrics</h3>
    <div class="grid gap-2 text-sm">
      <div><b>Match Rate:</b></div>
      <div class="pl-4">- % of predictions matching ground truth</div>
      <div class="pl-4">- Measured within structural tolerance</div>
      <div><b>RMSE:</b></div>
      <div class="pl-4">- Error in predicted atom positions</div>
      <div class="pl-4">- Normalized by unit cell dimensions</div>
    </div>
  </div>
</div>
</div>

<!--
Let's discuss the dataset and metrics we'll be using to evaluate our comparative study.

[click] Our focus is the MP-20 dataset - a comprehensive collection of 45,231 materials with diverse compositions and structures drawn from the Materials Project database. This dataset includes:
- 89 different chemical elements
- Materials with 1 to 20 atoms per unit cell
- Experimentally verified inorganic materials

What makes MP-20 particularly valuable is that it contains mostly globally stable materials that can actually be synthesized in a laboratory. This means a model that performs well on MP-20 has real potential for practical materials discovery.

[click] For De Novo Generation - where we generate completely new materials from scratch - we evaluate using three families of metrics:
- Validity: Do the generated structures have reasonable atom spacing and charge-neutral compositions?
- Coverage: Do we generate diverse materials (recall) that are realistic (precision)?
- Property Distribution: Do statistical properties like density and elemental diversity match real materials?

[click] For Crystal Structure Prediction - where we predict the 3D structure given a composition - we use two primary metrics:
- Match Rate: The percentage of predictions that match ground truth structures within tolerance
- RMSE: The error in predicted atomic positions, normalized by the unit cell dimensions

These metrics together give us a comprehensive view of how well different generative approaches perform on the two key tasks in materials discovery.
-->

---

# Results Table

---

# Generated Samples
<
