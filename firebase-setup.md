# Firebase Setup Guide

## 1. Install Dependencies

```bash
npm install firebase react-firebase-hooks
```

## 2. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Follow the setup wizard
4. Enable Authentication:
   - Go to Authentication → Sign-in method
   - Enable "Email/Password"
5. Create Firestore Database:
   - Go to Firestore Database
   - Click "Create database"
   - Start in production mode (we'll add rules next)

## 3. Configure Firebase

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the Web icon (`</>`) to add a web app
4. Copy the Firebase config values
5. Add them to your `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 4. Deploy Firestore Security Rules

1. Go to Firestore Database → Rules
2. Copy the contents of `firestore.rules` file
3. Paste into the Firebase Console
4. Click "Publish"

**Important:** Make sure to update the rules if you want to restrict access to a specific user UID (see the commented section in `firestore.rules`).

## 5. Create User Account

1. Go to Authentication → Users
2. Click "Add user"
3. Enter an email and password
4. Save the email/password - you'll use this to log into `/leads`

## 6. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/leads`
3. Sign in with the email/password you created
4. Try adding a lead and viewing it in the table

## Security Notes

- The security rules only allow authenticated users to read/write leads
- You can further restrict access by UID if needed (see `firestore.rules`)
- Never commit your `.env.local` file to version control
- Make sure Firebase config values are prefixed with `NEXT_PUBLIC_` for client-side access