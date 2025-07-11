# Vendora UI Component Library (HTML + CSS + JS)

A clean, modular component library inspired by [shadcn/ui](https://ui.shadcn.dev/), built from scratch using only **HTML**, **CSS**, and **JavaScript**. This library is themeable, accessible, and designed to be easy to extend and integrate into any vanilla project.

---

## 📁 Project Structure

```
project-root/
│
├── index.html                # Showcase file demonstrating all components
│
├── css/
│   ├── main.css              # Global styles + theme variables
│   ├── utils.css             # Utility classes (e.g., spacing, flex)
│   └── components/
│       ├── button.css
│       ├── toast.css
│       ├── card.css
│       ├── input.css
│       ├── table.css
│       ├── modal.css
│       └── alert.css
│
├── js/
│   └── components/
│       ├── toast.js          # Toast logic
│       └── modal.js          # Modal open/close logic
```

---

## ✨ Features

- ✅ Pure HTML, CSS, and JS (no frameworks)
- 💅 Themeable via `:root` variables (OKLCH color system)
- 🧱 Modular component structure
- 📦 Zero dependencies
- 📱 Fully responsive and accessible base components

---

## 🚀 Components Included


| Component  | Features                                                                               |
| ------------ | ---------------------------------------------------------------------------------------- |
| **Button** | Variants:`primary`, `secondary`, `outline`, `destructive`, sizes (`sm`, `lg`, `block`) |
| **Toast**  | Stacking, variants:`success`, `error`                                                  |
| **Card**   | Header, content, and footer layout                                                     |
| **Input**  | Sizes, error states, disabled state                                                    |
| **Table**  | Styled table wrapper with header and body                                              |
| **Modal**  | Dynamic and static modals with overlay                                                 |
| **Alert**  | Variants:`success`, `error`, `warning`, `info`                                         |

---

## 🔥 Usage

### 1. Clone the Repository

```bash
git clone https://github.com/VimukthiKothalawala/vendora-frontend
cd vendora-frontend
```

### 2. Open `index.html`

Simply open the file in your browser to see all components in action.

```bash
open index.html
```

---

## 💡 Customization

You can modify the theme by editing `:root` variables in `/css/main.css`. Colors use the **OKLCH color space** for better visual harmony.

---

## 📄 License

MIT License — free to use and modify.
