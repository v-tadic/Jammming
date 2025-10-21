# 🎵 Jammming

Jammming is a modern web application that allows users to search for songs using the Spotify API, create custom playlists, and save them directly to their Spotify account. The app integrates with Spotify using the **Authorization Code Flow with PKCE** (Proof Key for Code Exchange), providing a secure way for users to authenticate without exposing sensitive credentials.

This project is built using **React.js** for the user interface, **Vite** for fast and modern frontend tooling, and **CSS** for styling.

---

## 🚀 Features

- 🔐 **Login with Spotify**: Secure user login using PKCE (OAuth 2.0 flow).
- 🔎 **Search Tracks**: Real-time search across the Spotify music catalog.
- ➕ **Add to Playlist**: Add and remove tracks from a custom playlist.
- 💾 **Save to Spotify**: Save your custom playlist directly to your Spotify account.

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **React.js** | JavaScript library for building interactive UIs |
| **Vite** | Fast frontend build tool with instant HMR |
| **CSS** | Styling for layout, responsiveness, and animations |
| **Spotify Web API** | Interface for music search, playlist creation, and user authentication |
| **OAuth 2.0 PKCE Flow** | Secure method for authenticating users in browser-based apps |

---

## 🔐 About PKCE Authentication Flow

This app uses **OAuth 2.0 Authorization Code Flow with PKCE** to authenticate users securely with Spotify. PKCE (Proof Key for Code Exchange) enhances security in public clients (like SPAs) by avoiding the need to store a client secret in the browser.

### How it works:
1. When a user clicks "Login with Spotify", the app generates a **code verifier** and **code challenge**.
2. The user is redirected to Spotify's authorization server with the challenge.
3. After the user approves access, Spotify redirects back to the app with an **authorization code**.
4. The app then exchanges that code (along with the original verifier) for an **access token**, without ever exposing sensitive client secrets.

> This ensures your app is secure, even though it runs entirely in the browser.

### This project was built as a portofolio project on Codecademy💻
