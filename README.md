# Health Care App

A simple health check-in app built with React Native and Tamagui, allowing users to log their mood, sleep hours, and notes, and receive personalized suggestions.

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bahaayoussof/health-care-app
   cd health-care
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run start
   # or
   yarn start
   ```
4. **Run on your device or emulator:**
   - For Expo: Use the Expo Go app or your preferred emulator.

---

## 🛠️ Tech Stack Used

- **React Native** (with Expo)
- **Tamagui** (UI kit for cross-platform design)
- **TypeScript**

---

## 💡 Implementation Approach

- Used Tamagui for consistent, themeable UI components across platforms.
- State management handled with React hooks (`useState`) for form and UI logic.
- Modularized UI: Suggestions, animations, and cards are separated into reusable components.

---

## 🎨 Design Decisions

1. **UI Structure:**

   - The main screen uses a vertical stack (`YStack`) for clear, mobile-friendly layout, with sections for mood, sleep, notes, and suggestions.
   - Used `ScrollView` to ensure the form is accessible on all device sizes.

2. **Animation Logic:**
   - After submitting, an animated success component is shown before displaying suggestions, providing positive feedback and a smooth transition.
   - The animation completion triggers the display of personalized suggestions, improving user experience.

---

## 🚧 Future Improvements

- **Add persistent storage:**
  - If more time were available, I would implement local or cloud storage to save user check-ins and track progress over time.
