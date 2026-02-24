# React Crypto - Cryptocurrency Price Tracker

## About the Project

React Crypto is a modern web application that allows users to track and monitor cryptocurrency prices in real-time. The application provides a user-friendly interface to search for cryptocurrencies and view their current market prices converted to USD.

## What the Application Does

- **Cryptocurrency Search**: Users can search and browse through the top 20 cryptocurrencies by market capitalization
- **Price Tracking**: Real-time cryptocurrency prices fetched from the CryptoCompare API
- **Currency Conversion**: Display cryptocurrency prices in USD with live conversion rates
- **Data Validation**: Ensures all API responses match the expected data structure using Zod schemas

## Tools & Technologies Used

### Frontend Framework & Language
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Superset of JavaScript that adds static typing
- **Vite** - Modern build tool for fast development and optimized production builds

### State Management
- **Zustand** - Lightweight state management library with middleware support
- **Zustand DevTools** - Middleware for debugging and monitoring state changes

### Data Fetching & Validation
- **Axios** - Promise-based HTTP client for API requests
- **Zod** - TypeScript-first schema validation library

### Build & Development Tools
- **npm** - Package manager
- **ESLint** - Code quality and style enforcement

## Styling

The application uses **vanilla CSS** for styling with a focus on:
- Clean and minimalist design
- Responsive layout that adapts to different screen sizes
- Clear visual hierarchy for better user experience
- Intuitive component spacing and typography

CSS files used:
- `index.css` - Global styles and base styling

## API Used

### CryptoCompare API

**Endpoints:**
- **Top Cryptocurrencies**: `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
  - Fetches the top 20 cryptocurrencies by market capitalization
  - Returns detailed information including coin name and full name

- **Current Price**: Endpoint for fetching real-time cryptocurrency prices in USD
  - Provides current market prices for selected cryptocurrency pairs

**Documentation**: [CryptoCompare Official API](https://www.cryptocompare.com/api)

## Project Structure

```
src/
├── components/           # React components
│   ├── CriptoCryptoSearchForm.tsx    # Search form component
│   └── CryptoPriceDisplay.tsx        # Price display component
├── services/            # API service functions
│   └── CryptoService.ts
├── schemas/             # Zod validation schemas
│   └── currency-schema.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── data/                # Static data and utilities
│   └── index.ts
├── App.tsx              # Main application component
├── index.css            # Global styles
└── main.tsx             # Application entry point

store.ts                # Zustand store configuration
vite.config.ts          # Vite configuration
tsconfig.json           # TypeScript configuration
```

## Key Features Implemented

✅ Global state management with Zustand  
✅ Type-safe API responses using Zod schemas  
✅ Error handling for API requests  
✅ Dynamic data fetching from CryptoCompare API  
✅ Responsive UI components  
✅ Search functionality for cryptocurrencies  
✅ DevTools integration for state debugging  

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Development

The project uses:
- **Hot Module Replacement (HMR)** via Vite for fast development
- **Source Maps** for easier debugging
- **ESLint** for code quality enforcement

---

**Created for**: Jorge Luis Escobedo Solana  
**Date**: February 2026
