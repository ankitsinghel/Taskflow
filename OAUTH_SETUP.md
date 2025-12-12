# OAuth Setup Instructions for TaskFlow

This guide will help you configure Google and GitHub OAuth providers in your Supabase project.

## Prerequisites

- A Supabase project (create one at [supabase.com](https://supabase.com))
- Google Cloud Console account
- GitHub account

## Step 1: Configure Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **URL Configuration**
3. Add the following to **Redirect URLs**:
   - `http://localhost:3000/auth/callback` (for development)
   - `https://yourdomain.com/auth/callback` (for production)

## Step 2: Configure Google OAuth

### Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Configure the OAuth consent screen if prompted
6. Select **Web application** as the application type
7. Add authorized redirect URIs:
   - `https://your-project-ref.supabase.co/auth/v1/callback`
   - Get your project ref from Supabase dashboard URL
8. Copy the **Client ID** and **Client Secret**

### Add Google Provider to Supabase

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Find **Google** and click to enable it
3. Paste your **Client ID** and **Client Secret**
4. Click **Save**

## Step 3: Configure GitHub OAuth

### Create GitHub OAuth App

1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in the application details:
   - **Application name**: TaskFlow (or your app name)
   - **Homepage URL**: `http://localhost:3000` (for development)
   - **Authorization callback URL**: `https://your-project-ref.supabase.co/auth/v1/callback`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** and copy it

### Add GitHub Provider to Supabase

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Find **GitHub** and click to enable it
3. Paste your **Client ID** and **Client Secret**
4. Click **Save**

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   DATABASE_URL=your-database-connection-string
   ```

   You can find these values in your Supabase project settings under **API**.

## Step 5: Test the OAuth Flow

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/login`
3. Click on "Continue with Google" or "Continue with GitHub"
4. Complete the OAuth flow
5. You should be redirected to `/projects` after successful authentication

## Troubleshooting

### Common Issues

**Redirect URI Mismatch**

- Ensure the redirect URI in Google/GitHub matches exactly with Supabase callback URL
- Format: `https://your-project-ref.supabase.co/auth/v1/callback`

**Authentication not persisting**

- Check that cookies are enabled in your browser
- Verify middleware is properly configured
- Check browser console for any errors

**"Invalid OAuth State" error**

- Clear your browser cookies and try again
- Ensure your Supabase URL and anon key are correct

**Provider not working**

- Verify the provider is enabled in Supabase dashboard
- Double-check Client ID and Client Secret
- Ensure redirect URIs are configured correctly

**{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}**

- In Supabase dashboard go to **Authentication → Providers → GitHub**, toggle it **On**, and paste the GitHub Client ID/Secret, then **Save**.
- Confirm your GitHub OAuth App callback matches Supabase: `https://your-project-ref.supabase.co/auth/v1/callback`.
- Redeploy/restart the dev server so updated env values are picked up.

## Security Notes

- Never commit `.env.local` to version control
- Keep your Client Secrets secure
- Use environment-specific redirect URLs
- Regularly rotate your OAuth credentials in production

## Next Steps

After setting up OAuth, you may want to:

- Customize the login page design
- Add user profile management
- Implement role-based access control
- Add more OAuth providers (Microsoft, Apple, etc.)

For more information, visit the [Supabase Auth documentation](https://supabase.com/docs/guides/auth).
