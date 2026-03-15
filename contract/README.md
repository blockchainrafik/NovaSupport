# NovaSupport Contract

This Soroban workspace contains a single minimal contract under `contracts/support_page/`.

## Purpose

The initial contract is intentionally small:

- accept a support action
- require supporter authorization
- emit a support event
- keep a simple support counter

## Why It Is Small

The MVP only needs to show clear Soroban intent for the Stellar Wave submission. This contract is a safe extension point for future work such as:

- token transfer enforcement
- recurring support logic
- onchain profile ownership
- milestones or attestations

## Local Use

```bash
cd contract
cargo test
```

