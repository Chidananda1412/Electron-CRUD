# 🧩 Electron-CRUD

A lightweight desktop application built using **Electron** that allows users to **view**, **edit**, **add**, and **delete** structured data stored locally in a `data.json` file. This app demonstrates how to implement full **CRUD operations** in a desktop environment using HTML, CSS, JavaScript, and Node.js.

---

## 📌 Project Overview

**Electron-CRUD** provides a clean and interactive UI to manage tabular data:

- 📄 Read and render JSON data in a dynamic HTML table  
- 📝 Edit data via a separate prefilled form window  
- ➕ Add new records using a form window  
- ❌ Delete entries and update both UI and local JSON  
- 💾 All changes are persisted in a local `data.json` file  

Perfect for learning how Electron apps communicate between **main** and **renderer** processes using `ipcMain` and `ipcRenderer`.

---

## ⚙️ Installation

### 🧱 Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)  
- Git (optional, for cloning the repo)

### 🔧 Steps to Set Up Locally

```bash
# Clone the repo
git clone https://github.com/chidananda1412/Electron-CRUD.git
cd Electron-CRUD

# Install dependencies
npm install

# Run the app
npm start
