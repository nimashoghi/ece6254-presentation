I am writing a presentation for a graduate class. Below are the guidelines I am following:

The second component is the project presentation and slides. Your project slides must be submitted to Canvas no later than April 13th by 11:59 PM. We will project these slides in class so teams can present their slides. The presentations will happen in class on April 15th, 17th, and 22nd. The presentation should be modeled after a standard scientific/technical slide presentation. You can decide how to divide up the presentation. It can be one presenter or several—whatever makes the most sense. The presentation must be concise (i.e., practice) and no more or less than 5 minutes (subject to change). We will strictly enforce the time limit and will cut you off mid-sentence if necessary. The slides should cover the following:

- Need: an attention-grabbing intro section and elevator pitch that motivates the project
- Approach: concisely describe the approach your team took
- Experiments/Theory: what are the main results of your project
- Conclusions: what conclusions can you make from your project

Note for online students: Groups will all students in the online section are asked to submit a recorded video with their slides by the April 13th by 11:59 PM deadline.

---

The presentation is based off the following abstract:

# Generative Models for 3D Atomistic Structure Discovery: A Comparative Study

**Nima Shoghi, Timothy Soetojo, Jamshid Hassanpour**

## Abstract

We propose a systematic study of generative models for 3D atomistic structure prediction, comparing recent approaches that include diffusion models, variational autoencoders, and flow matching methods. Through the implementation and evaluation of standard material datasets, our aim is to identify key strengths and limitations of each approach, particularly by focusing on their handling of physical constraints and symmetries. Our findings will contribute to improving the effectiveness of generative models for materials discovery.

## Project Overview & Approach

The discovery of novel materials and molecular structures has transformative potential across multiple domains, from next-generation batteries and catalysts to therapeutic drug development[1, 2]. While generative models have achieved remarkable success in domains like computer vision and natural language processing[3, 4], generating three-dimensional atomistic structures remains a fundamental challenge in computational materials science[5].

This project aims to systematically evaluate and advance the state-of-the-art in generative models for 3D atomistic structures. The core challenges stem from the inherent complexity of the problem domain: structures must satisfy physical constraints (e.g., bond lengths, angles) while preserving fundamental symmetries (e.g., SO(3) invariance[6, 7]). Furthermore, the limited availability of training data compared to traditional machine learning domains requires careful consideration of data efficiency and generalization[8].

Our approach consists of three key components. First, we will conduct a comprehensive analysis of existing approaches, including Crystal Diffusion Variational Autoencoders (CDVAE)[5], equivariant diffusion models[9], flow matching methods[10], and fine-tuned large language models[11]. Second, we will implement and evaluate these methods across carefully selected benchmark datasets, such as MP-20[12]. Finally, we will assess model performance using a multi-faceted evaluation framework that considers both proxy metrics (statistical measures of generation quality that are computationally efficient to calculate, e.g., structural validity, composition coverage, and property distribution matching) and stability metrics (computationally intensive measures of physical realizability, e.g., energy above convex hull, structure uniqueness, and thermodynamic stability)[13, 12].

Our investigation aims not only to provide a rigorous comparative analysis of existing methods but also to identify promising directions for methodological improvements. By systematically analyzing the strengths and limitations of current approaches, we seek to develop insights that can guide future research in generative models for material discovery.

## Technical Approach & Timeline

Our investigation follows a carefully structured progression through several key phases. We begin with a comprehensive literature analysis of state-of-the-art methods in 3D structure generation, focusing on architectural innovations that address rotational equivariance and physical constraints[6, 14] (2 weeks). This foundation informs our implementation efforts, which will prioritize methods demonstrating theoretical soundness in handling symmetries while maintaining computational tractability[7] (4 weeks).

The evaluation framework will be designed to allow systematic comparison in multiple generative approaches, incorporating both efficiency metrics and physical realizability measures[13]. To manage computational constraints while maintaining research rigor, we adopt an incremental validation strategy: initial development using proxy metrics, followed by comprehensive stability analysis on promising candidates (2 weeks). The final phase focuses on synthesizing information, identifying methodological improvements, and preparing documentation (2 weeks).

Our risk mitigation strategy includes regular validation against published benchmarks, efficient use of computational resources, and maintaining flexibility in our research direction based on initial findings.
