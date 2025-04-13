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

# Dataset and Evaluation Challenges

<div class="grid grid-rows-2 gap-6 h-full">
<div v-click class="border-2 p-5 rounded-lg bg-blue-50 flex flex-col items-center">
  <h3 class="text-2xl text-blue-700 mb-3">MP-20 Dataset</h3>
  <div class="flex items-center gap-10">
    <img src="https://storage.googleapis.com/qdrant-us/images/1af552c9354a2c55f8264ec1c0ed4db6.png" class="h-28" />
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

<div v-click class="border-2 p-4 rounded-lg bg-amber-50">
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

# Evaluation Metrics

<div class="grid grid-cols-12 gap-8 h-full">
<div v-click class="border-2 p-4 rounded-lg bg-green-50 col-span-8">
<h3 class="text-xl text-green-700 mb-2">De Novo Generation Metrics</h3>

**Validity:**
- Structural: minimum atom distance > 0.5$\text{Å}$
- Compositional: charge neutrality

**Coverage:**
- Recall: % of real materials matched
- Precision: % of generated materials realistic

**Property Distribution:**
- Density: earth mover's distance to real distribution
- Number of elements: statistical match to real data

</div>

<div v-click class="border-2 p-4 rounded-lg bg-purple-50 col-span-4">
<h3 class="text-xl text-purple-700 mb-2">Crystal Structure Prediction Metrics</h3>

**Match Rate:** % of predictions matching ground truth structure

**RMSE:** Error in predicted atom positions

</div>
</div>

<!--
Now let's look at the specific metrics we use to evaluate our generative models, given the constraints we just discussed.

[click] For De Novo Generation - creating entirely new materials from scratch - we evaluate using three families of metrics:

Validity checks whether generated structures are physically plausible:
- Structural validity requires minimum atom distances greater than 0.5 Ångströms
- Compositional validity requires overall charge neutrality

Coverage measures both diversity and quality:
- Recall (COV-R) tells us what percentage of real materials are matched by our generated set
- Precision (COV-P) tells us what percentage of our generated materials are realistic

Property distribution metrics assess how well statistical properties of generated materials match real ones:
- We use earth mover's distance to compare density distributions
- We measure how well the distribution of number of elements matches real materials

[click] For Crystal Structure Prediction - predicting the 3D structure given a composition - we use two primary metrics:

Match Rate measures the percentage of predictions that match ground truth structures within tolerance.

RMSE quantifies the error in predicted atomic positions, normalized by the cube root of volume per atom, which approximates the atom radius.

These metrics together give us a comprehensive view of performance while working within our computational constraints.
-->

---
layout: default
---

# De Novo Generation Results

<div class="overflow-auto">
<table class="border-collapse w-full text-sm">
  <thead>
    <tr class="bg-gray-100">
      <th class="border p-2">Model</th>
      <th class="border p-2" colspan="2">Validity (%)</th>
      <th class="border p-2" colspan="2">Coverage (%)</th>
      <th class="border p-2" colspan="2">Property Distribution ↓</th>
    </tr>
    <tr class="bg-gray-50">
      <th class="border p-2"></th>
      <th class="border p-2">Comp.</th>
      <th class="border p-2">Struct.</th>
      <th class="border p-2">Precision</th>
      <th class="border p-2">Recall</th>
      <th class="border p-2">Density</th>
      <th class="border p-2"># Elements</th>
    </tr>
  </thead>
  <tbody>
    <tr v-click class="hover:bg-blue-50">
      <td class="border p-2 font-bold">LLaMA-2</td>
      <td class="border p-2">91.7%</td>
      <td class="border p-2">87.8%</td>
      <td class="border p-2">95.6%</td>
      <td class="border p-2">94.7%</td>
      <td class="border p-2">3.850</td>
      <td class="border p-2">0.959</td>
    </tr>
    <tr v-click class="hover:bg-blue-50">
      <td class="border p-2 font-bold">CDVAE</td>
      <td class="border p-2 bg-green-100">100.0%</td>
      <td class="border p-2">86.7%</td>
      <td class="border p-2">99.5%</td>
      <td class="border p-2">99.2%</td>
      <td class="border p-2">0.688</td>
      <td class="border p-2">0.278</td>
    </tr>
    <tr v-click class="hover:bg-blue-50">
      <td class="border p-2 font-bold">FlowMM</td>
      <td class="border p-2">81.7%</td>
      <td class="border p-2 bg-green-100">99.3%</td>
      <td class="border p-2 bg-green-100">99.7%</td>
      <td class="border p-2 bg-green-100">99.4%</td>
      <td class="border p-2 bg-green-100">0.907</td>
      <td class="border p-2 bg-green-100">0.209</td>
    </tr>
  </tbody>
</table>
</div>

<div class="grid grid-cols-2 gap-6 mt-8">
  <div v-click class="border p-3 rounded-lg bg-blue-50">
    <h3 class="text-lg text-blue-700 mb-1">Key Findings:</h3>
    <ul class="text-sm">
      <li>FlowMM excels in structural validity and coverage metrics</li>
      <li>CDVAE achieves perfect compositional validity</li>
      <li>LLaMA-2 trails in most metrics despite being a much larger model</li>
    </ul>
  </div>

  <div v-click class="border p-3 rounded-lg bg-green-50">
    <h3 class="text-lg text-green-700 mb-1">Property Distribution:</h3>
    <ul class="text-sm">
      <li>Lower numbers are better (Earth Mover's Distance)</li>
      <li>FlowMM most closely matches real material property distributions</li>
      <li>All models struggle more with density than element distribution</li>
    </ul>
  </div>
</div>

<!--
Let's examine the results of our De Novo Generation experiments across the three models we tested.

[click] LLaMA-2, despite being a large language model with billions of parameters, shows decent performance but lags behind the specialized models in most metrics.

[click] CDVAE achieves perfect compositional validity - every material it generates has a charge-neutral composition. However, it falls a bit short on structural validity compared to FlowMM.

[click] FlowMM demonstrates exceptional performance across most metrics:
- It achieves the highest structural validity at 99.3%
- It leads in both coverage metrics, showing it generates diverse yet realistic materials
- It has the best property distribution scores for both density and element counts

[click] The key takeaway is that FlowMM generally outperforms other models in generating valid, diverse, and realistic materials, though CDVAE maintains an advantage in compositional validity.

[click] For property distribution metrics, where lower scores indicate better performance, FlowMM most closely matches the statistical properties of real materials from our test set. This suggests that materials generated by FlowMM would be more likely to exhibit realistic physical properties.
-->$$
