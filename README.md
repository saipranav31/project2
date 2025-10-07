<div align="center">

<h3>💬 Real‑Time Chat (Express + Socket.IO)</h3>

<p>
  <a href="https://github.com/saipranav31">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-saipranav31-181717?logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/pedaprolu-sai-pranav-301505298/">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Sai%20Pranav-0A66C2?logo=linkedin&logoColor=white" />
  </a>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white" />
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-5.x-000000?logo=express&logoColor=white" />
  <img alt="Socket.IO" src="https://img.shields.io/badge/Socket.IO-4.x-010101?logo=socketdotio&logoColor=white" />
</p>

</div>

Simple real‑time chat server using Express and Socket.IO. Opens a minimal UI at the root path and broadcasts messages to all connected clients.

---

## Table of Contents
- ✨ [Features](#features)
- 🧰 [Prerequisites](#prerequisites)
- 🏁 [Getting Started](#getting-started)
- ▶️ [Run](#run)
- 📖 [Usage](#usage)
- 🗂️ [Project Structure](#project-structure)
- 🛠️ [Customization](#customization)
- 🆘 [Troubleshooting](#troubleshooting)
- 🔗 [Connect](#connect)

## Features
- **Express server** serving a lightweight chat UI
- **Socket.IO** for bi‑directional real‑time messaging
- Single‑file implementation (`app.js`) for easy understanding

## Prerequisites
- Node.js 18+ installed
- npm (comes with Node.js)

## Getting Started
```bash
# Install dependencies
npm install
```

## Run
```bash
# Start the server
node app.js

# The server will print the URL, typically:
# http://localhost:3000
```

Optionally set a custom port:
```bash
# macOS/Linux
PORT=4000 node app.js

# Windows PowerShell
$env:PORT=4000; node app.js
```

## Usage
1. Open the printed URL in multiple browser tabs/windows.
2. Type a message and press Send — it broadcasts to all connected clients.

### Preview
<!-- Replace the placeholder below with a screenshot or GIF if desired -->
<img alt="Chat preview" src="https://via.placeholder.com/900x480?text=Real-time+Chat+Preview" />

## Project Structure
```
project2/
  ├─ app.js               # Express + Socket.IO server and inline UI
  ├─ package.json         # Dependencies
  ├─ package-lock.json    # Lockfile
  └─ node_modules/        # Installed packages
```

## Customization
- Update the inline HTML/CSS in `app.js` to change the UI.
- Add persistence (e.g., a database) if you need message history.
- Add authentication/rooms for more advanced scenarios.

## Troubleshooting
- Ensure the correct Node.js version (`node -v`).
- If the port is busy, set another `PORT` value as shown above.
- Reload the page if clients don’t receive messages; check the server logs.

## Connect
- GitHub: [@saipranav31](https://github.com/saipranav31)
- LinkedIn: [Sai Pranav](https://www.linkedin.com/in/pedaprolu-sai-pranav-301505298/)

