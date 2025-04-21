---
layout: cover
background: https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1800
class: text-center
theme: neversink
transition: slide-left
---


# Generative Models for 3D Atomistic Structure Discovery

<div class="absolute top-5 w-full flex flex-row items-center justify-center right-2">
<img src="/image-9.png" class="w-105" />
</div>

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
Good morning. This project explores how we can use AI to discover new materials via generative approaches.
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
  <!-- <video v-click="3" src="https://unified-materials.github.io/unimat/materials/unimat.mp4" class="h-60 rounded shadow" autoplay loop muted /> -->
  <!-- ![alt text](public/image-14.png) -->
  <img v-click="3" src="/image-14.png" class="w-100 rounded shadow" />
</div>
</div>

<!--
[click] Every technology starts with a material discovery, but the traditional path from lab to market takes 20+ years.

[click] The core challenge is the vastness of the combinatorial space.

[click] By training generative models on known stable structures, we can create a "virtual lab" that generates novel, physically realistic candidates.

This has the potential to revolutionize fields like batteries, carbon capture, and drug delivery.
-->

---
layout: default
clicksStart: 2
---

# Material Structure

<div class="grid grid-cols-12 gap-4">
<div class="col-span-7">
<v-clicks>

- **3D Atoms + Periodicity**
  - Atoms with positions and element types
  - Infinitely repeating crystalline patterns

- **Efficient Representation:**
  - **Unit Cell/Lattice:** Repeating 3D box
  - **Atom Types:** Elements in the material
  - **Fractional Coords:** Positions (0-1)

</v-clicks>
</div>

<div v-click="1" class="col-span-5 flex flex-col justify-center items-center gap-4">
  <img src="/image-4.png" class="w-full max-h-48 object-contain" />
  <img src="/image-5.png" class="w-full max-h-100 object-contain" />
</div>
</div>

<!--

A bulk material is simply atoms arranged in a tiny three‑dimensional building block called a unit cell that repeats endlessly in all directions to form the whole solid.

-->

---
layout: default
clicksStart: 3
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
<!-- ![alt text](public/image-13.png) -->
<img src="/image-13.png" class="w-100" />

</div>

</div>

<!--

Our first method involves fine-tuning LLMs for crystal generation. LLMs like LLaMA are trained to complete text sequences one word at a time.

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

To generate crystals with LLMs, we start by converting 3D crystal structures into simple text strings. This turns a complex 3D problem into a 1D sequence generation task. We fine-tune the model using Low-Rank Adaptation. Sampling works just like text generation—token by token—until we decode the output back into a 3D crystal.

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
- Full crystal is encoded into $z$ to predict coarse properties.
- Atom type and coordination is perturbed by noise.
- Diffusion model denoises the structure conditioned on $z$, noisy structure and predicted properties.

</div>

<div v-click class="col-span-1">

#### **Sampling Stage:**
- Sample latent vector $z$ with Gaussian distribution.
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
The third approach we explore is FlowMM.

[click] Diffusion models like CDVAE follow Stochastic Differential Equations that combine deterministic drift with random Brownian motion. This approach uses Langevin dynamics which performs a non-optimal random walk through probability space, requiring many sampling steps and making generation less efficient (as shown in the top figure).

[click] Flow Matching instead learns deterministic and smooth paths directly from noise to data. It focuses on learning a vector field that optimally transports points between distributions using Ordinary Differential Equations.

[click] Flow Matching offers key advantages:
- Faster sampling (50-250 steps vs 1000+ for diffusion)
- Flexible base distributions

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
[click] For training, FlowMM learns a vector field that transforms simple distributions into complex material structures:
- Define physics-informed base distributions and deterministic paths between initial and target distributions, e.g., simple linear interpolation
- Learn vector field $v_\theta$ that transforms these distributions into realistic crystal structures
- Carefully designed to preserve crystal symmetries (translation, rotation, permutation)

[click] For sampling, the process is elegantly simple:

- Draw samples from base distributions
- Solve an ODE from t=0 to t=1 using 50-250 steps (vs. 1000+ for diffusion)

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
[click]

- **MP-20 dataset**: 45 231 experimentally verified inorganic materials from Materials Project

[click] However, evaluating generative models for materials presents unique challenges:

- **DFT bottleneck**: gold‐standard stability checks are too slow at scale
- **Proxy metrics**: approximate validity and quality without full quantum sims
- **Physical invariances**: rotation, translation, atom permutation, cell choice
- **Key trade‐off**: generating diverse structures vs. ensuring physical realism

-->

---
layout: default
---

# Experiments: Generative Tasks

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click class="border p-4 rounded-lg bg-blue-50">
  <h3 class="text-xl text-blue-700 mb-2">De Novo Generation</h3>
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
  <h3 class="text-xl text-green-700 mb-2">Crystal Structure Prediction</h3>
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
</div>

<!--
[click] **De Novo Generation**: Creating materials from scratch, both composition and structure.
- Evaluating with validity (physical plausibility), coverage (diversity), and property distribution (matching real materials).

[click] **Crystal Structure Prediction**: Given a composition (like SiO₂), predict its 3D structure.
- Evaluated using RMSE and match rate against known structures.
-->

---
layout: default
---

# Results

<div v-click>

<style>
table thead tr th {
  text-align: center;
}
</style>

#### De Novo Generation

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
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">99.61</span></td>
        <td class="p-1 border-t border-l">0.56</td>
        <td class="p-1 border-t border-l">1.11</td>
      </tr>
      <tr class="hover:bg-gray-100">
        <td class="p-1 font-bold border-t">FlowMM</td>
        <td class="p-1 border-t border-l">99.27</td>
        <td class="p-1 border-t border-l">82.61</td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">99.68</span></td>
        <td class="p-1 border-t border-l">99.50</td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">0.16</span></td>
        <td class="p-1 border-t border-l"><span class="font-bold text-green-600">0.17</span></td>
      </tr>
    </tbody>
  </table>
</div>

</div>

<div v-click>

#### Crystal Structure Prediction

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
Here are our results. We'll quickly go to the analysis section for our analysis.
-->

---
layout: default
clicksStart: 4
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
[click] CDVAE: Pioneering approach with reasonable results, but now surpassed by newer methods.

[click] LLaMA-2: Strong performance, generates valid structures outside the training distribution. Showing LLMs have implicit materials knowledge. Impressive given LLMs are just using text.

[click] FlowMM: Overall winner with superior or similar validity, coverage, and property distribution matching and best structure prediction.

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
