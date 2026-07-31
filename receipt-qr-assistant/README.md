# OneSip Receipt & QR Assistant

English staff-facing mobile web app for OneSip.

## Features

- Take or upload a receipt photo
- Browser-based English OCR
- Match receipt lines to 59 OneSip products
- Detect quantities and create a per-cup checklist
- Correct matches and quantities manually
- Open the matching machine QR code for each drink
- Search by English name, Chinese name, or product code

## Vercel deployment

Use `receipt-qr-assistant` as the **Root Directory** when importing this repository into Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonesip%2Fonesip-assistant&root-directory=receipt-qr-assistant&project-name=onesip-receipt-qr-assistant)

The deployed site must use HTTPS for live camera access. OCR loads Tesseract.js from a CDN on first use.