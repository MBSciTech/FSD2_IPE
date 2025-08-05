# FSD2_IPE
IPE practice for sem 4 collage.

Sure! Here's a clean, **FSD2-ready revision note** on the **Node.js `fs` module** you can use for quick study or paste into your notes.

---

## 📘 Node.js `fs` Module – File System Cheat Sheet

### ✅ Importing `fs` module

```js
const fs = require('fs');
```

---

### 📄 1. Write to a file (overwrite)

```js
fs.writeFileSync('file.txt', 'Hello, world!');
```

* Creates or **overwrites** file content.

---

### ➕ 2. Append to a file

```js
fs.appendFileSync('file.txt', '\nNew line added!');
```

* Adds content **without deleting** existing data.

---

### 📖 3. Read from a file

```js
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

* Use `'utf8'` to avoid getting buffer data.

---

### ❌ 4. Delete a file

```js
fs.unlinkSync('file.txt');
```

---

### 🔍 5. Check if a file exists

```js
if (fs.existsSync('file.txt')) {
  console.log('File exists');
}
```

---

### 📁 6. Create a folder

```js
fs.mkdirSync('myFolder');
```

---

### 🗑️ 7. Remove a folder

```js
fs.rmdirSync('myFolder');
```

---

### 🧠 Tips:

* All methods shown are **synchronous (blocking)**.
* For non-blocking versions, use: `fs.writeFile`, `fs.readFile`, etc. with callbacks.
* Or use `fs.promises` for `async/await` style.

---

### 📦 Bonus: Read & Write JSON

```js
// Write JSON
const obj = { name: "Roshan", age: 20 };
fs.writeFileSync('data.json', JSON.stringify(obj));

// Read JSON
const raw = fs.readFileSync('data.json', 'utf8');
const parsed = JSON.parse(raw);
console.log(parsed.name);
```

---

Let me know if you'd like this as a downloadable **PDF** or want a version with small code challenges for each function.

Perfect! Let’s now focus on **Asynchronous File Operations using `fs` module** in Node.js.

---

## 📦 Node.js `fs` – Asynchronous Methods

You have **two ways** to do async file operations:

---

### 🔹 Method 1: `fs` with **Callbacks**

### 🔧 `fs.writeFile()`

```js
const fs = require('fs');

fs.writeFile('async.txt', 'This is async write!', (err) => {
    if (err) return console.error('❌ Write Error:', err);
    console.log('✅ File written successfully');
});
```

---

### 🔧 `fs.readFile()`

```js
fs.readFile('async.txt', 'utf8', (err, data) => {
    if (err) return console.error('❌ Read Error:', err);
    console.log('📄 File content:', data);
});
```

---

### 🔧 `fs.appendFile()`

```js
fs.appendFile('async.txt', '\nNew line added.', (err) => {
    if (err) return console.error('❌ Append Error:', err);
    console.log('✅ Data appended');
});
```

---

### 🔧 `fs.unlink()` (delete file)

```js
fs.unlink('async.txt', (err) => {
    if (err) return console.error('❌ Delete Error:', err);
    console.log('🗑️ File deleted');
});
```

---

### 🧠 Output runs non-blocking:

```js
console.log('Before');
fs.readFile('async.txt', 'utf8', (err, data) => {
    console.log('Inside read:', data);
});
console.log('After');
```

📌 Output:

```
Before
After
Inside read: (file content)
```

---

### 🔹 Method 2: `fs.promises` with **async/await** (Modern)

```js
const fs = require('fs').promises;

async function fileOps() {
    try {
        await fs.writeFile('async2.txt', 'Hello from async/await!');
        console.log('✅ Written');

        const data = await fs.readFile('async2.txt', 'utf8');
        console.log('📄 Read:', data);

        await fs.appendFile('async2.txt', '\nAppended line.');
        console.log('✅ Appended');

        await fs.unlink('async2.txt');
        console.log('🗑️ Deleted');
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

fileOps();
```

---

## 📝 Summary Table

| Operation | Sync               | Async (Callback) | Async (Promise)            |
| --------- | ------------------ | ---------------- | -------------------------- |
| Write     | `writeFileSync()`  | `writeFile()`    | `fs.promises.writeFile()`  |
| Read      | `readFileSync()`   | `readFile()`     | `fs.promises.readFile()`   |
| Append    | `appendFileSync()` | `appendFile()`   | `fs.promises.appendFile()` |
| Delete    | `unlinkSync()`     | `unlink()`       | `fs.promises.unlink()`     |

---

Would you like this in a PDF note with both sync & async examples for tomorrow’s IPE?

Absolutely! Let’s break down **cookies in Express.js** in a super clear way — perfect for your FSD2 IPE.

---

## 🍪 What are Cookies?

Cookies are small pieces of **data stored in the user's browser** that are sent with every HTTP request.
In Express.js, we can use cookies to:

* **Store user data** (like login info)
* Track sessions
* Save user preferences temporarily

---

## 🔧 1. How to Use Cookies in Express.js

### ✅ Step 1: Install middleware

```bash
npm install cookie-parser
```

---

### ✅ Step 2: Set up in your Express app

```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser()); // enable cookies
```

---

## 🍪 Common Cookie Operations

### 1️⃣ **Set a Cookie**

```js
res.cookie('name', 'Maharshi');
```

👉 You can also set options like expiration:

```js
res.cookie('name', 'Maharshi', { maxAge: 10000 }); // 10 sec
```

---

### 2️⃣ **Read a Cookie**

```js
const userName = req.cookies.name;
console.log('Cookie:', userName);
```

---

### 3️⃣ **Delete (Clear) a Cookie**

```js
res.clearCookie('name');
```

---

## 🧪 Example: Cookie Demo

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/set', (req, res) => {
    res.cookie('city', 'Ahmedabad', { maxAge: 15000 });
    res.send('🍪 Cookie has been set');
});

app.get('/read', (req, res) => {
    res.send('Stored Cookie: ' + req.cookies.city);
});

app.get('/clear', (req, res) => {
    res.clearCookie('city');
    res.send('🚫 Cookie cleared');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

Try:

* `http://localhost:3000/set` → sets cookie
* `http://localhost:3000/read` → reads cookie
* `http://localhost:3000/clear` → deletes cookie

---

## 📝 Notes for IPE:

| Operation     | Code Example                                    |
| ------------- | ----------------------------------------------- |
| Set Cookie    | `res.cookie('key', 'value')`                    |
| Read Cookie   | `req.cookies.key`                               |
| Expire Cookie | `res.cookie('key', 'value', { maxAge: 10000 })` |
| Clear Cookie  | `res.clearCookie('key')`                        |
| Middleware    | `app.use(cookieParser())`                       |

---

Would you like **short MCQs or interview questions** on cookies to practice more for tomorrow?
