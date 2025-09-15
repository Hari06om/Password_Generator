# Password Generator

A modern, customizable password generator built with React and Tailwind CSS. Generate secure passwords with configurable length and character types including uppercase, lowercase, numbers, and symbols.

## Features

- **Customizable Length**: Generate passwords between 8-20 characters
- **Character Type Selection**: 
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*()_+~`|}{[]:;?><,./-=)
- **Real-time Generation**: Password updates automatically when settings change

- 
- **One-Click Copy**: Copy generated password to clipboard
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, dark theme with orange accents

## Screenshots

The application features a centered card layout with:
- Password display field with copy button
- Length slider control
- Character type checkboxes
- Generate password button

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd password-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Ensure Tailwind CSS is configured in your project:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

### Generating a Password

1. **Set Password Length**: Use the slider to select desired length (8-20 characters)
2. **Choose Character Types**: Check boxes for character types you want to include:
   - Uppercase letters
   - Lowercase letters
   - Numbers
   - Symbols
3. **Generate**: Click the "Generate Password" button
4. **Copy**: Click the "Copy" button to copy the password to your clipboard

### Important Notes

- **Character Selection Required**: Select at least one character type to generate a meaningful password
- **Automatic Updates**: The `useCallback` hook ensures the password generation function updates when any dependency changes
- **Clipboard Access**: The copy function uses the modern `navigator.clipboard.writeText()` API

## Code Structure

```
src/
├── App.jsx          # Main password generator component
├── App.css          # Custom styles (if any)
└── main.jsx         # Application entry point
```

## Key Components and Functions

### State Management
- `length`: Password length (8-20 characters)
- `password`: Generated password string
- `uppercase`: Include uppercase letters toggle
- `lowercase`: Include lowercase letters toggle  
- `numbers`: Include numbers toggle
- `symbols`: Include symbols toggle

### `generatePassword()`
- Uses `useCallback` for performance optimization
- Builds character set based on selected options
- Generates random password using `Math.random()`
- Dependencies: `[length, uppercase, lowercase, numbers, symbols]`

### Character Sets
- **Uppercase**: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
- **Lowercase**: `abcdefghijklmnopqrstuvwxyz`
- **Numbers**: `0123456789`
- **Symbols**: `!@#$%^&*()_+~`|}{[]:;?><,./-=`

## Styling

The application uses Tailwind CSS for styling with a consistent theme:
- **Background**: Dark gray (`bg-gray-800`)
- **Accent Color**: Orange (`bg-orange-500`, `text-orange-500`)
- **Text**: White and gray combinations
- **Interactive Elements**: Hover effects on buttons

### Key Classes Used
- Layout: `max-w-xl`, `mx-auto`, `shadow-md`, `rounded-lg`
- Spacing: `px-6`, `py-5`, `my-10`, `mb-6`, `gap-x-4`
- Colors: `bg-gray-800`, `text-orange-500`, `text-white`
- Interactive: `hover:bg-orange-600`, `cursor-pointer`

## Security Considerations

- **Client-Side Generation**: Passwords are generated entirely in the browser
- **No Network Requests**: No password data is sent to external servers
- **Random Generation**: Uses `Math.random()` for character selection
- **Immediate Use**: Passwords are not stored after generation

## Browser Compatibility

- **Clipboard API**: Requires HTTPS in production for `navigator.clipboard`
- **Modern Browsers**: Supports all modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive**: Works on mobile and tablet devices

## Potential Enhancements

- Add password strength indicator
- Implement secure random number generation (`crypto.getRandomValues()`)
- Add password history (with option to clear)
- Include pronounceable password option
- Add export functionality (PDF, text file)
- Implement custom character sets
- Add dark/light theme toggle
- Include password complexity requirements checker

## Known Issues

- Password generation starts with a space character (minor formatting issue in `generatePassword` function)
- No validation for "no character types selected" scenario

## Built With

- **React 18**: Frontend framework with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **JavaScript ES6+**: Modern JavaScript features

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Tailwind CSS for the styling framework
- React team for the excellent hooks API
- Modern web standards for clipboard functionality
