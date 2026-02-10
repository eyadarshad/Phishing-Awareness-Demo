# Phishing Awareness Demo

Educational project demonstrating phishing attack mechanics through a GitHub login page replica. Created for security awareness and understanding credential harvesting techniques.

> **DISCLAIMER**: This project is for educational purposes only. Not intended for malicious use. The creator assumes no responsibility for misuse.

## Overview

This project replicates the GitHub login page to demonstrate how phishing attacks work. It captures user credentials and stores them in Firebase to illustrate data exfiltration techniques used by attackers.

**Educational Objectives:**
- Understand visual deception in phishing attacks
- Learn credential harvesting techniques
- Recognize social engineering tactics
- Practice identifying phishing attempts

## Tech Stack

- HTML5, CSS3, JavaScript
- PHP (form processing)
- Firebase (NoSQL database, hosting)
- GitHub Actions (CI/CD)

## Project Structure

```
├── .github/workflows/    # CI/CD automation
├── phishu/              # Additional resources
├── git.html             # Cloned GitHub login page
├── git.css              # GitHub styling
├── git.js               # Form handling
├── index.html           # Landing page
└── firebase.json        # Firebase config
```

## Setup

1. Clone repository
   ```bash
   git clone https://github.com/eyadarshad/Phishing-Awareness-Demo.git
   cd Phishing-Awareness-Demo
   ```

2. Install Firebase CLI
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

3. Configure and deploy
   ```bash
   firebase init
   firebase deploy
   ```

## How It Works

1. User visits cloned login page
2. Enters credentials in form
3. JavaScript intercepts submission
4. Data sent to Firebase backend
5. Credentials stored in database
6. Fake success message displayed

## Security Lessons

**Detection Methods:**
- Verify exact URL match
- Check SSL certificate validity
- Watch for browser security warnings
- Be suspicious of unexpected login requests

**Protection Strategies:**
- Enable two-factor authentication
- Use password managers (detect wrong domains)
- Verify email legitimacy
- Never click suspicious links

## Legal Notice

Creating phishing pages for malicious purposes is illegal. This project is designed for controlled educational environments only. Users are responsible for ensuring compliance with applicable laws.

## Contributing

Educational improvements welcome. Contributions enabling malicious use will be rejected.

## License

Educational use only. See repository for details.

---

**Remember: Always verify website authenticity before entering credentials. This demo shows why vigilance is critical.**
