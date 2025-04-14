---
layout: cover
background: https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1800
class: text-center
theme: neversink
transition: slide-left
---


# Generative Models for 3D Atomistic Structure Discovery

<div class="absolute bottom-10">

<span class="font-700">
Nima Shoghi, Timothy Soetojo, Jamshid Hassanpour
</span>

Slides: [nima.sh/ece6254-presentation](https://nima.sh/ece6254-presentation)

</div>

<div class="absolute bottom-15 right-15">
<QRCode data="https://nima.sh/ece6254-presentation" />
</div>

<!--
Good afternoon everyone. Today we're presenting our project on generative models for 3D atomistic structure discovery.

This project explores how we can use AI to discover new materials by generating stable 3D atomic structures. Our work compares several cutting-edge deep learning approaches for this challenging task.

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
  <video v-click="3" src="https://unified-materials.github.io/unimat/materials/unimat.mp4" class="h-60 rounded shadow" autoplay loop muted />
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
  <div v-click="1" class="flex items-center justify-center mt--10">

  <!-- ![alt text](public/image-4.png) -->
  <img src="/image-4.png" class="w-40 rounded shadow" />
  <div class="text-xs ml-2">Atoms within one unit cell</div>
  </div>
  <div v-click="2" class="flex items-center justify-center">

  <!-- ![alt text](public/image-5.png) -->

  <div class="flex flex-col items-center gap-2 ml--20">
  <img src="/image-5.png" class="w-159 rounded shadow" />
  <div class="text-xs ml-2">Infinitely repeating structure</div>
  </div>

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

-->

---
layout: default
---

# Crystal Text LLM: Intro --- Large Language Models

<div class="grid grid-cols-2 gap-4">

<div>

<v-clicks>

- **Core Idea:** Predict next words given previous ones
- **Generation:** Sample tokens sequentially.
  - `Input -> LLM -> Next Token`
  - Repeat: `Input + Next Token -> LLM -> ...`

- **Pre-trained on vast text corpora** containing:
  - Natural language (books, articles, etc.)
  - Code (Python, JavaScript, etc.)
  - Scientific literature (papers, patents, etc.)

</v-clicks>

</div>

<div v-click="1" class="flex align-center justify-center my-auto">

<!-- ![alt text](public/nlpgif.gif) -->
<img src="/nlpgif.gif" class="w-100" />

</div>

</div>

<!--

Crystal Text LLM uses large language model techniques to predict the next token from the previous text, generating content one step at a time. It’s trained on massive data—books, code, and technical papers—giving it broad capabilities to understand and produce human-like text.

-->

---
layout: default
---

# Crystal Text LLM: Fine-tuning & Sampling

<div class="grid grid-cols-2 gap-4">

<div>
<div class="flex flex-col items-center justify-center">
<div v-click class="mt-4 p-4 bg-yellow-50 rounded border border-green-200 text-base w-full">
<span class="font-bold text-yellow-700">Approach:</span> Fine-tune a pre-trained LLM (LLaMA-2) on text-encoded crystals.
</div>
<div v-click class="mt-4 p-4 bg-green-50 rounded border border-green-200 text-base w-full">
<span class="font-bold text-green-700">Input Format:</span> Converts complex 3D structure into a simple text sequence.
</div>
<div v-click class="mt-4 p-4 bg-purple-50 rounded border border-purple-200 text-base w-full">
<span class="font-bold text-purple-700">Training:</span> Efficiently adapts LLM using LoRA and task prompts.
</div>
<div v-click class="mt-4 p-4 bg-orange-50 rounded border border-orange-200 text-base w-full">
<span class="font-bold text-orange-700">Output:</span> Generates a text string representing a novel crystal.
</div>
</div>
</div>

<div class="flex flex-col items-center gap-2 mt-5">

<!-- ![alt text](public/image-8.png) -->
<img v-click="2" src="/image-8.png" class="w-75" />

<!-- ![alt text](public/image-7.png) -->
<!-- ![alt text](public/image-12.png) -->
<img v-click="3" src="/image-12.png" class="w-65 mt-10" />

</div>


</div>

<!--
So, how do we apply LLMs to generate crystals? The Crystal Text LLM paper proposes a straightforward approach.

[click] Instead of designing complex architectures, they fine-tune a large, pre-trained LLM (LLaMA-2) on crystal data. The idea is to leverage the powerful pattern recognition abilities the LLM already possesses from its text pre-training.

[click] They represent the crystal structure – lattice parameters, atom types, and fractional coordinates – as a simple, formatted string. This converts the 3D problem into a 1D sequence generation task that LLMs excel at.

[click] Fine-tuning is done efficiently using techniques like LoRA (Low-Rank Adaptation), which only modifies a small fraction of the model's parameters. They use specific prompts to train the model for different tasks like unconditional generation, generating based on desired properties (conditional), or filling in missing atoms (infilling). Data augmentations, like randomly shifting coordinates, help the model learn physical symmetries.

[click] Generating a new crystal is then just standard autoregressive sampling. The model generates the formatted string token by token, and this string is then parsed back into a 3D crystal structure. This method achieved surprisingly good results, generating stable materials at high rates.
-->


---
layout: default
---
# CDVAE: Crystal Diffusion Variational AutoEncoder

<div class="grid grid-cols-2 gap-8">
<div>
<v-clicks>

- **VAE:** What to generate?
  - Captures overall structure of a crystal (atom, coordinates, lattice) and encodes it into a fixed latent space.
  - The latent space is modeled by a Gaussian distribution.

- **Score-based Diffusion:** How to generate accurately?
  - Learns a score function to guide Langevin dynamics.
  - Iteratively denoises atomic structures.



</v-clicks>
</div>

<div class="flex flex-col items-center justify-center">
  <!-- ![alt text](public/image-10.png) -->
  <img v-click="1" src="/image-10.png" class="h-48" />
  <!-- ![alt text](public/image-11.png) -->
  <img v-click="2" src="/image-11.png" class="h-48 mt-4" />
  <div v-click="2" class="text-xs mt-2 ml--5">



  </div>
</div>
</div>

---
layout: default
---
# CDVAE: Training and Inference

<div class="grid grid-cols-2 gap-4">
<div v-click class="col-span-1">

#### **Training Stage:**
- Full crystal is encoded into z to predict coarse properties.
- Atom type and coordination is perturbed by noise.
- Diffusion model denoises the structure conditioned on z, noisy structure and predicted properties.

</div>

<div v-click class="col-span-1">

#### **Sampling Stage:**
- Sample latent vector z with Gaussian distribution.
- VAE predicts atoms, lattice and composition distribution.
- Coorinations in the unit cell are initialized randomly.
- Score model refined the noisy structure for a more precise output.

</div>
</div>

---
layout: default
---

# Flow Matching vs. Diffusion

<div class="grid grid-cols-2 gap-6">
<div>
<v-clicks>

- **Diffusion:** Stochastic process
  - Random noise + gradual denoising
  - SDE: $dx = f(x,t)dt + g(t)dw$

- **Flow Matching:** Deterministic transport
  - Direct paths from noise → data
  - ODE: $\frac{dx}{dt} = v_\theta(t, x)$

- **Key Advantages:**
  - Faster sampling (fewer steps)
  - Flexible base distributions
  - Better for complex geometries

</v-clicks>
</div>

<div class="flex flex-col items-center justify-center">
  <img v-click="1" src="/image-1.png" class="h-48" />
  <img v-click="2" src="/image.png" class="h-48 mt-3" />
</div>
</div>

<!--
Let me explain how Flow Matching differs from diffusion models and why it's better for our materials task.

[click] Diffusion models use a stochastic process - they gradually add random noise to data, then learn to reverse this noise step by step. They're based on Stochastic Differential Equations which incorporate both deterministic and random components. This randomness makes them less efficient and harder to control.

[click] Flow Matching instead learns deterministic paths directly from noise to data. It focuses on learning a vector field that optimally transports points between distributions using Ordinary Differential Equations. The paths are smooth and direct, following principles of optimal transport.

[click] This approach offers several key advantages:
- Sampling requires significantly fewer steps (50-250 vs 1000+ for diffusion)
- It allows more flexible choice of base distributions, which is crucial for modeling physical structures
- The deterministic nature makes it better suited for handling the complex symmetries and constraints of crystal structures

The visualizations show how diffusion takes a meandering path through noise, while flow matching follows direct trajectories. This efficiency translates directly to faster material generation with better physical properties.
-->

---
layout: default
---

# FlowMM: Training and Sampling

<img src="/image-2.png" class="h-56 mx-auto" />

<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click class="col-span-1 border-l-4 border-blue-500 pl-3">

### Training

- Define physics-informed base distributions
- Learn vector field $v_\theta$ for optimal transport
- Preserve crystal symmetries

</div>

<div v-click class="col-span-1 border-l-4 border-green-500 pl-3">

### Sampling

- Draw from base distributions
- Solve ODE: $\frac{dx}{dt} = v_\theta(t, x)$
- 50-250 steps → realistic 3D structures

</div>
</div>

<!--
Now let's look at how FlowMM specifically works for generating materials. The image visualizes how the vector field transforms random noise into realistic material structures.

[click] For training, FlowMM learns a vector field that transforms simple distributions into complex material structures:

- It uses physics-informed base distributions: uniform on torus for atom positions, binary encoding for atom types, and informed priors for lattice parameters
- The model learns a vector field following optimal transport principles between these simple distributions and real materials
- Throughout this process, it maintains critical crystal symmetries: translation, rotation, and permutation invariance

[click] For sampling, the process is elegantly simple - we solve an Ordinary Differential Equation:

- First draw samples from the base distributions
- Then numerically integrate the ODE from t=0 to t=1
- This needs only 50-250 integration steps compared to 1000+ for diffusion models
- The result is a physically realistic material with proper atomic positions, types, and unit cell parameters

The deterministic nature of flow matching allows for this significant efficiency gain while producing high-quality structures that respect physical constraints.
-->

---
layout: default
---

# Experiments: Dataset and Evaluation Challenges

<div class="grid grid-rows-2 gap-1">
<div v-click class="border-2 p-1 rounded-lg bg-blue-50 flex flex-col items-center">
  <h3 class="text-2xl text-blue-700 mb-3">MP-20 Dataset</h3>
  <div class="flex items-center gap-10">
    <img src="/image-3.png" class="h-28" />
    <div class="flex flex-col gap-2">
      <div class="text-lg"><b>45,231</b> materials</div>
      <div class="text-lg"><b>89</b> elements</div>
      <div class="text-lg"><b>1-20</b> atoms per unit cell</div>
    </div>
  </div>
  <div class="text-sm mt-3 text-gray-700 max-w-3xl">
    A realistic dataset of experimentally known inorganic materials with mostly globally stable structures.
  </div>
</div>

<div v-click class="border-2 p-3 rounded-lg bg-amber-50">
  <h3 class="text-2xl text-amber-700 mb-2">Evaluation Challenges</h3>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center justify-center flex-col">
      <div class="text-4xl mb-2">⚛️</div>
      <div class="font-bold text-center">Gold Standard: DFT</div>
    </div>
    <div class="flex items-center justify-center flex-col">
      <div class="text-4xl mb-2">🔄</div>
      <div class="font-bold text-center">Physical Invariances</div>
    </div>
    <div class="flex items-center justify-center flex-col">
      <div class="text-4xl mb-2">📊</div>
      <div class="font-bold text-center">Proxy Metrics Needed</div>
    </div>
    <div class="flex items-center justify-center flex-col">
      <div class="text-4xl mb-2">⚖️</div>
      <div class="font-bold text-center">Quality vs. Diversity</div>
    </div>
  </div>
</div>
</div>

<!--
Let's start by understanding our dataset and the challenges in evaluating generative models for materials.

[click] Our study uses the MP-20 dataset - a comprehensive collection of 45,231 materials drawn from the Materials Project database. This dataset includes:
- 89 different chemical elements
- Materials with 1 to 20 atoms per unit cell
- Experimentally verified inorganic materials

What makes MP-20 particularly valuable is that it contains mostly globally stable materials that can actually be synthesized in a laboratory. This means a model that performs well on MP-20 has real potential for practical materials discovery.

[click] However, evaluating generative models for materials presents unique challenges:

First, while Density Functional Theory (DFT) calculations would be the gold standard for verifying if generated materials are truly stable, these quantum mechanical simulations are computationally prohibitive to run at scale.

Second, materials have multiple physical invariances - they remain identical under rotation, translation, permutation of atoms, and different choices of unit cell. This makes direct comparison difficult.

Third, because of these constraints, we must rely on proxy metrics that approximate physical validity and quality without running full quantum simulations.

Finally, there's an inherent trade-off between generating diverse structures and ensuring they're all physically realistic. Our metrics need to balance these considerations carefully.
-->

---
layout: default
---

# Experiments: Generative Tasks

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

<div v-click>

<style>
table thead tr th {
  text-align: center;
}
</style>

### De Novo Generation

<div class="border-2 rounded-lg overflow-hidden">
  <table class="w-full text-center text-sm">
    <thead class="bg-blue-600 text-white">
      <tr>
        <th class="p-1">Model</th>
        <th colspan="2" class="p-1 border-l border-white">Validity (%) ↑</th>
        <th colspan="2" class="p-1 border-l border-white">Coverage (%) ↑</th>
        <th colspan="2" class="p-1 border-l border-white">Property Distribution ↓</th>
      </tr>
      <tr class="bg-blue-500 text-white text-xs">
        <th></th>
        <th class="p-1">Structural</th>
        <th class="p-1">Composition</th>
        <th class="p-1">Recall</th>
        <th class="p-1">Precision</th>
        <th class="p-1">Density</th>
        <th class="p-1"># Elements</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">LLaMA-2</td>
        <td class="p-1 border-t border-l">93.46</td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">91.11</span></td>
        <td class="p-1 border-t border-l">90.69</td>
        <td class="p-1 border-t border-l">93.60</td>
        <td class="p-1 border-t border-l">3.61</td>
        <td class="p-1 border-t border-l">1.10</td>
      </tr>
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">CDVAE</td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">99.98</span></td>
        <td class="p-1 border-t border-l">86.08</td>
        <td class="p-1 border-t border-l">99.09</td>
        <td class="p-1 border-t border-l">99.61</td>
        <td class="p-1 border-t border-l">0.56</td>
        <td class="p-1 border-t border-l">1.11</td>
      </tr>
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">FlowMM</td>
        <td class="p-1 border-t border-l">99.27</td>
        <td class="p-1 border-t border-l">82.61</td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">99.68</span></td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">99.50</span></td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">0.16</span></td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">0.17</span></td>
      </tr>
    </tbody>
  </table>
</div>

</div>

<div v-click>

### Crystal Structure Prediction

<div class="border-2 rounded-lg overflow-hidden mt-2">
  <table class="w-full text-center text-sm">
    <thead class="bg-purple-600 text-white">
      <tr>
        <th class="p-1">Model</th>
        <th class="p-1 border-l border-white">Match Rate (%) ↑</th>
        <th class="p-1 border-l border-white">RMSE ↓</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">LLaMA-2</td>
        <td class="p-1 border-t border-l">54.79</td>
        <td class="p-1 border-t border-l">0.0626</td>
      </tr>
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">CDVAE</td>
        <td class="p-1 border-t border-l">28.01</td>
        <td class="p-1 border-t border-l">0.1909</td>
      </tr>
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">FlowMM</td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">62.51</span></td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">0.0472</span></td>
      </tr>
    </tbody>
  </table>
</div>

</div>

<!--
Let's examine the performance of our three models on both generative tasks.

[click] For De Novo Generation:

- LLaMA-2 shows strong compositional validity at 91.11%, meaning it generates materials with appropriate charge neutrality. However, its worse coverage metrics indicates that it doesn't strictly adhere to the underlying distribution of real materials from MP-20, possibly due to its LLM pre-training.

- CDVAE achieves nearly perfect structural validity at 99.98%, ensuring all generated structures have reasonable atom spacing. However, this seems to be a fairly easy task that FlowMM can match as well. CDVAE's property distribution metrics are mediocre.

- FlowMM demonstrates excellent performance across most metrics. It has high structural validity, the best coverage metrics, and dramatically outperforms other models in property distribution matching. This suggests FlowMM generates materials that most closely match the statistical properties of real materials.

[click] For Crystal Structure Prediction:

- Here we see FlowMM dominates with both the highest match rate at 62.51% and the lowest RMSE at 0.0472. This means FlowMM is best at predicting the correct structure for a given composition and with the highest accuracy.

- LLaMA-2 performs reasonably well but falls behind FlowMM, while CDVAE significantly underperforms in this task.

These results suggest that flow matching's deterministic approach to learning transformations between distributions is particularly well-suited for material structure tasks, outperforming both diffusion-based approaches and large language models on most key metrics.
-->

---
layout: default
---

# Analysis and Conclusions

<div class="grid grid-cols-3 gap-4">
  <div v-click class="border-2 p-3 rounded-lg bg-purple-50">
    <h3 class="text-lg font-bold text-purple-700 mb-2">CDVAE</h3>
    <ul class="text-sm space-y-1">
      <li>Pioneering work in material generation</li>
      <li>Excellent structural validity</li>
      <li>Established important benchmarks</li>
    </ul>
  </div>

  <div v-click class="border-2 p-3 rounded-lg bg-yellow-50">
    <h3 class="text-lg font-bold text-yellow-700 mb-2">LLaMA-2</h3>
    <ul class="text-sm space-y-1">
      <li>Surprisingly strong performance</li>
      <li>Best compositional validity</li>
      <li>Pre-training provides advantages</li>
    </ul>
  </div>

  <div v-click class="border-2 p-3 rounded-lg bg-blue-50">
    <h3 class="text-lg font-bold text-blue-700 mb-2">FlowMM</h3>
    <ul class="text-sm space-y-1">
      <li>Overall winner across most metrics</li>
      <li>Superior property distribution matching</li>
      <li>Deterministic approach better captures real distributions</li>
    </ul>
  </div>
</div>

<div v-click class="mt-4 border-2 p-3 rounded-lg bg-green-50">
<h3 class="text-lg font-bold text-green-700 mb-1">Future Directions</h3>
<div class="grid grid-cols-2 gap-2">
<div class="text-sm font-bold text-center">

FlowMM + LLM Hybrid Models (see [FlowLLM @ NeurIPS 24](https://arxiv.org/abs/2410.23405))

</div>
<div class="text-sm font-bold text-center">
Scaling to Complex Structures
</div>
</div>
</div>

<!--
Let's analyze what we've learned from our comparative study of these three approaches to material generation.

[click] CDVAE was the pioneering work that introduced generative models to 3D material structure. It achieves nearly perfect structural validity, ensuring generated structures have reasonable atom spacing. However, while it established important benchmarks for the field, it's now been surpassed by newer approaches in most metrics.

CDVAE's diffusion-based approach was innovative but has limitations in capturing the full distribution of material properties. It performs adequately on coverage metrics but struggles with match rate in crystal structure prediction tasks.

[click] LLaMA-2 delivers surprisingly strong performance, particularly in compositional validity where it leads. This suggests that large language models contain substantial implicit knowledge about materials science, likely due to pre-training on vast repositories of scientific code and papers.

LLaMA-2's strength in compositional validity indicates it has learned important chemical rules about which elements can combine in stable ways. Its strong performance despite not being specifically designed for this task opens interesting avenues for leveraging LLMs in scientific domains.

[click] FlowMM emerges as the clear winner across most metrics. It dominates in property distribution matching - approximately 6 times better than CDVAE on certain metrics. It also achieves both the highest match rate and lowest RMSE for crystal structure prediction.

FlowMM's deterministic ODE-based approach seems fundamentally better suited to capturing the real distribution of materials compared to stochastic SDE-based methods. Its flexible choice of base distributions allows it to model the underlying physics more effectively.

[click] Looking to the future, the most promising directions appear to be:

1. Developing hybrid approaches that combine FlowMM's efficient flow matching capabilities with the vast knowledge embedded in large language models. This could leverage the complementary strengths of each approach.

2. Scaling these models to handle larger and more complex structures beyond 20 atoms per unit cell, improving compositional validity in flow-based models, and incorporating more sophisticated symmetry constraints would further advance the field of computational materials discovery.
-->

<!--
Let's analyze what we've learned from our comparative study of these three approaches to material generation.

[click] CDVAE was the pioneering work that introduced generative models to 3D material structure. It achieves nearly perfect structural validity at 99.98%, ensuring all generated structures have reasonable atom spacing. However, while it established important benchmarks for the field, it's now been surpassed by newer approaches in most metrics.

[click] LLaMA-2 delivers surprisingly strong performance, particularly in compositional validity where it leads at 91.11%. This suggests that large language models contain substantial implicit knowledge about materials science, likely due to pre-training on vast repositories of scientific code and papers. This finding opens interesting avenues for leveraging LLMs in scientific domains.

[click] FlowMM emerges as the clear winner across most metrics. It dominates in property distribution matching - approximately 6 times better than CDVAE on certain metrics. It also achieves both the highest match rate at 62.51% and the lowest RMSE at 0.0472 for crystal structure prediction. Its deterministic ODE-based approach seems fundamentally better suited to capturing the real distribution of materials compared to stochastic SDE-based methods.

[click] Looking to the future, the most promising direction appears to be developing hybrid approaches that combine FlowMM's efficient flow matching capabilities with the vast knowledge embedded in large language models. Additionally, scaling these models to handle larger structures beyond 20 atoms per unit cell and improving compositional validity in flow-based models would further advance the field of computational materials discovery.
-->

---

# Thank you! --- Questions?

<div class="grid grid-cols-5 gap-4 items-center">
  <div class="col-span-4">
    <div class="bg-white p-4 rounded-lg shadow">
      <img v-click="[0,1]" src="/image-9.png" class="vclick-display-none" />
      <img v-click="1" src="/image-6.png" class="vclick-display-none" />
    </div>

  </div>
  <div class="col-span-1 flex flex-col items-center gap-4">
    <div class="bg-white p-3 rounded-lg">
      <QRCode data="https://ece6254.nima.sh" />
    </div>
    <a href="https://ece6254.nima.sh" class="text-white bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
      Interactive Demo: ece6254.nima.sh
    </a>
    <div class="text-white text-xs mt-2">
      20K generated structures in UMAP space<br>
      Colored by generating model<br>
      Embeddings extracted with JMP
    </div>
  </div>
</div>

<!--
Here we're visualizing 20,000 different material structures generated by our three models. This visualization gives us a qualitative way to compare the distribution of materials created by each approach.

We extracted embeddings from all structures using a popular pre-trained model called JMP, which captures key structural and chemical features of materials. Then we projected these high-dimensional embeddings down to 2D using UMAP for visualization.

Each point represents a single generated structure, and the colors indicate which model produced it. This allows us to see how the different models explore the materials space - where they overlap and where they generate unique structures.

You can explore this visualization interactively by visiting our demo site or scanning the QR code. The interactive version allows you to hover over points to see the specific structures and their properties.
-->
