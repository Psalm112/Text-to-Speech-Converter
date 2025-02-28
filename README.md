# Next.js Text-to-Speech Converter

A robust and fully-featured text-to-speech web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Convert text to speech using the Web Speech API
- Select from multiple available voices
- Adjust speech rate and pitch
- Play, pause, and stop functionality
- Save text to file
- Responsive design

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- Web Speech API - Browser API for text-to-speech functionality

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  Clone the repository
    ```bash
    git clone https://github.com/yourusername/text-to-speech-app.git
    cd text-to-speech-app
2.  Install dependencies
    npm install
    # or
    yarn install
3.  Run the development server
    npm run dev
    # or
    yarn dev
4.  Open http://localhost:3000 in your browser to see the application



Usage
1. Enter or paste text in the text area
2. Select a voice from the dropdown menu
3. Adjust speed and pitch as desired
4. Use the control buttons to play, pause, stop, or save the text


Browser Compatibility
This application relies on the Web Speech API, which is supported in most modern browsers:
- Chrome (33+)
- Edge (14+)
- Firefox (49+)
- Safari (7+)

Note: Voice selection availability depends on the user's operating system and browser.


Deployment
This is a Next.js application and can be deployed on Vercel, Netlify, or any other platform that supports Next.js:
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start



Limitations
- The Web Speech API does not natively support exporting audio files
- For production applications requiring audio download, consider integrating a backend TTS API such as Google Cloud Text-to-Speech or Amazon Polly

License
- This project is licensed under the MIT License - see the LICENSE file for details.



Acknowledgments

https://nextjs.org/docs - Next.js Documentation
https://tailwindcss.com/docs - Tailwind CSS Documentation
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API - Web Speech API Documentation