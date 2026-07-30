# Birthday & Valentine React App

## Routes

Your app now has two main routes:

- **`/`** - Valentine's Day interactive page (original app)
- **`/birthday`** - Birthday celebration page with animations

## Birthday Page Features

✨ **Animations & Effects:**
- Floating balloons with random colors
- Falling confetti pieces
- Twinkling sparkles
- Bouncing cake emoji
- Smooth fade-in animations for text
- Zoom animation for the image

🎂 **Components:**
- Cake emoji with bounce animation
- "Happy Birthday!" heading
- Personalized message subtitle
- Birthday celebration image
- Birthday wishes messages

## Adding the Birthday Image

To display the birthday image on the `/birthday` page:

1. Place your `kbss.jpeg` file in: `public/assets/img/kbss.jpeg`
2. The image will automatically load and display with beautiful styling

The image placeholder is already configured in the component - just add the file!

## File Structure

```
src/
├── App.jsx              # Router configuration
├── App.css              # Valentine page styles
├── Valentine.jsx        # Valentine page component
├── Birthday.jsx         # Birthday page component
├── Birthday.css         # Birthday page styles
├── main.jsx            # React entry point
└── index.css           # Global styles

public/assets/img/
├── New_Girl.png        # Valentine celebration image
└── kbss.jpeg           # (Add your birthday image here)
```

## Commands

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run deploy`** - Deploy to GitHub Pages

## Birthday Page URL

Once running, visit: `http://localhost:5174/birthday`

## Customization

You can customize the birthday page by editing [Birthday.jsx](src/Birthday.jsx):

- Change messages in the `<p>` tags
- Adjust animation timing in [Birthday.css](src/Birthday.css)
- Modify colors and styles as needed
- Change the number of balloons/confetti/sparkles by adjusting the `numBalloons` and `numConfetti` values

Enjoy the celebrations! 🎉
