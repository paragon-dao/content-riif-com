---
title: "One Encoder, Four Domains: How GLE Unifies Biosignal, Genomic, Atmospheric, and Neural AI"
description: "The General Learning Encoder (GLE) uses DCT-II frequency-domain encoding to create a universal representation layer across audio, DNA, EEG, and atmospheric data. This document maps the architecture to four deployed products and the patent portfolio protecting it."
date: "2026-04-04"
author: "Philip Phuong Tran — Paragon Biosignals"
tags: ["Research", "GLE", "Genomics", "Architecture"]
project: "paragon-platform"
---

## The Core Insight

Most AI systems are built domain by domain. A breathing model, a genomic model, an EEG model, and an atmospheric model are designed, trained, and deployed as four separate engineering efforts with four separate architectures.

We took a different approach. We asked: what if the encoding layer were universal?

The **General Learning Encoder (GLE)** applies DCT-II frequency-domain transformation to compress any time-series or sequential signal into a fixed-length coefficient vector. The same 128-coefficient representation works across audio, genotype arrays, neural recordings, and atmospheric sensor data — not because these signals are the same, but because DCT-II extracts frequency-domain structure that is domain-general.

This is not a theoretical claim. It is deployed in production across four domains today.

## Four Domains, One Architecture

### 1. Biosignal Processing — Haven Phone

**Domain:** Respiratory audio and voice affect analysis from smartphone microphones.

**How GLE works here:** Raw audio (48kHz) is downsampled to 4kHz for breathing DSP and 16kHz for voice analysis. The GLE encoder transforms 10-second audio segments into 128 DCT-II coefficients per sample, producing a 20x144 feature matrix that captures breathing rate, depth, regularity, and spectral characteristics.

**Results:**
- Breathing classification: macro F1 79.7% (4 classes: normal, shallow, deep, breath-hold)
- Voice affect detection: 93.0% accuracy
- Privacy: 727:1 compression ratio, 0% speaker re-identification across three independent attacks

**Deployed at:** [haven.riif.com](https://haven.riif.com) — live, free, no account required.

**Paper:** [Haven Phone: A Multimodal Biosignal Clinical Decision Support Tool](https://www.researchgate.net/publication/403017066)

### 2. Genomic Fairness — Paragon Biosignals

**Domain:** Cross-ancestry polygenic risk score fairness across 5 ancestral populations.

**How GLE works here:** 80.8 million genetic variants from whole-genome sequencing are encoded via DCT-II into 128 frequency-domain coefficients per chromosome. The same encoding that compresses audio compresses genotype arrays — extracting population-level frequency structure while destroying individual-level identifying information.

**Results:**
- Ancestry classification from 128 coefficients: 81.9% accuracy (5 populations)
- Bottleneck dimensionality (d) controls fairness: 46.6pp variation vs. 2.2pp from adversarial training
- Cross-ancestry transfer: +0.077 R² improvement (European → East Asian height prediction)
- Genotype reconstruction: 0% success across three attacks

**Deployed at:** [paragonbiosignals.com](https://paragonbiosignals.com) — Docker-based fairness tool + Fairness Certificates.

### 3. Neural Signal Processing — EEG Foundation

**Domain:** Subject-invariant EEG representations for brain-computer interfaces.

**How GLE works here:** Multi-channel EEG signals (64 channels, 256Hz) are encoded per-channel via DCT-II. The same bottleneck dimensionality mechanism that controls ancestry leakage in genomics controls subject identity leakage in EEG — forcing the model to learn task-relevant neural patterns rather than subject-specific artifacts.

**Results:**
- Subject-invariant representations validated across 20 subjects
- Bottleneck d controls subject leakage with the same 8-27x effectiveness as in genomics
- Cross-domain validation confirms the finding is domain-general, not dataset-specific

### 4. Atmospheric Intelligence — Great Salt Lake Sentinel

**Domain:** Dust event forecasting and air quality monitoring for the Great Salt Lake basin.

**How GLE works here:** PM2.5, PM10, wind speed, humidity, and temperature time-series from EPA and NOAA sensors are encoded via DCT-II. The frequency-domain representation captures seasonal patterns, diurnal cycles, and event signatures that predict dust storms 24-48 hours before they reach populated areas.

**Deployed at:** [paragondao.org/great-salt-lake/dust](https://paragondao.org/great-salt-lake/dust) — real-time dust forecasting for Salt Lake City residents.

## The Privacy Architecture

The same DCT-II encoding that enables cross-domain AI also solves the privacy problem across all four domains:

| Domain | Raw signal | GLE output | Compression | Re-identification |
|--------|-----------|------------|-------------|-------------------|
| Audio (breathing) | 1,280,000 bits | 1,760 bits | 727:1 | 0% |
| Genomics (WGS) | 80.8M variants | 128 coefficients | ~630,000:1 | 0% genotype reconstruction |
| EEG (64ch) | 16,384 samples/s | 128 coefficients/ch | ~128:1 | Subject-invariant by design |

The compression is irreversible. Not because it is encrypted, but because the information is mathematically destroyed. This distinction matters: encryption can be broken with sufficient compute. Destruction cannot. The privacy guarantee is not computational — it is information-theoretic.

## The Patent Portfolio

This architecture is protected by a portfolio of US provisional patent applications covering:

- The cross-modal DCT-II encoding method and its application to genotype, biosignal, neural, and atmospheric data
- The dual-stream adversarial architecture for separating protected attributes from task-relevant features
- The discovery that bottleneck dimensionality controls fairness 8-27x more effectively than adversarial training strength
- The privacy-by-destruction encoding pipeline and its use in regulatory compliance

## The Unifying Principle

The GLE is not four separate applications of the same math. It is one system with one insight: **frequency-domain encoding creates a universal representation layer where fairness, privacy, and cross-population transfer can be controlled by a single architectural parameter (d).**

- In genomics, d controls how much ancestry information leaks through — enabling fair PRS across populations.
- In biosignals, d controls how much speaker identity leaks through — enabling privacy-preserving health monitoring.
- In EEG, d controls how much subject identity leaks through — enabling generalizable brain-computer interfaces.
- In atmospheric data, the encoding captures seasonal and event frequency structure without overfitting to station-specific noise.

The same parameter. The same mechanism. Four domains. Two deployed products. Four patents.

This is the architecture behind [Paragon Biosignals](https://paragonbiosignals.com).

---

*For technical details on each domain, see the individual papers linked above. For licensing inquiries, contact phil@paragonbiosignals.com.*
