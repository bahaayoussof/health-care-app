import {
  CheckCircle,
  Heart,
  Smile,
  Meh,
  Frown,
  Sparkles,
} from "@tamagui/lucide-icons";

// Mood options with emojis
export const moodOptions = [
  { id: "great", emoji: "😊", label: "Great", icon: Smile },
  { id: "good", emoji: "🙂", label: "Good", icon: Heart },
  { id: "okay", emoji: "😐", label: "Okay", icon: Meh },
  { id: "bad", emoji: "😔", label: "Bad", icon: Frown },
];

// Enhanced AI suggestions based on mood and sleep
export const getAISuggestions = (mood: string, sleepHours: number) => {
  const suggestions = [];

  // Sleep-based suggestions
  if (sleepHours < 6) {
    suggestions.push({
      title: "Sleep Improvement",
      text: "Try to get more sleep tonight - aim for 7-9 hours for optimal health",
      icon: "🌙",
      priority: "high",
    });
  } else if (sleepHours > 9) {
    suggestions.push({
      title: "Sleep Balance",
      text: "You got plenty of rest! Try to maintain a consistent sleep schedule",
      icon: "⏰",
      priority: "medium",
    });
  }

  // Mood-based suggestions
  if (mood === "bad") {
    suggestions.push({
      title: "Mindfulness Practice",
      text: "Take a few deep breaths and practice mindfulness for 5-10 minutes",
      icon: "🧘",
      priority: "high",
    });
  } else if (mood === "okay") {
    suggestions.push({
      title: "Energy Boost",
      text: "Try some light stretching or a quick workout to boost your energy",
      icon: "💪",
      priority: "medium",
    });
  } else if (mood === "great" || mood === "good") {
    suggestions.push({
      title: "Positive Momentum",
      text: "Great energy! Consider doing something you enjoy",
      icon: "✨",
      priority: "low",
    });
  }

  // General wellness suggestions
  suggestions.push({
    title: "Hydration",
    text: "Stay hydrated throughout the day - aim for 8 glasses of water",
    icon: "💧",
    priority: "medium",
  });

  suggestions.push({
    title: "Breaks",
    text: "Take regular breaks every hour to stretch and rest your eyes",
    icon: "👀",
    priority: "medium",
  });

  // Limit to 4 suggestions to avoid overwhelming
  return suggestions.slice(0, 4);
};
