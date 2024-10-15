# Octopus Translator App

This is a simple React-based translator application that uses the DeepL API for translating text between various languages.

## Features

- Translate text from one language to another
- Supports multiple languages (English, Ukrainian, Spanish, French, German, etc.)
- Automatic language detection option available
- **Copy Translation**: Easily copy the translated text to your clipboard
- **Language Detection**: Automatically detects the language of the input text when using the "Detect language" option

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **DeepL API**: External service for text translation.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

## Prerequisites

To run this project locally, you need:

- Node.js (>= 12.x)
- NPM or Yarn
- A valid DeepL API key (you can get it by signing up at [DeepL API](https://www.deepl.com/pro#developer))

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/translator-app.git
   cd translator-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

4. Open the app in your browser at `http://localhost:3000`.

## API Reference

The app uses the **DeepL API** for translation. For more details on the API, you can check out the [DeepL API documentation](https://www.deepl.com/pro#developer).

### Additional Instructions

If you want to deploy the app, make sure to update the `.env` file with your production API key.
