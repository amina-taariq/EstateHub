import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID, // Required - your OAuth 2.0 web client ID
  iosClientId: GOOGLE_IOS_CLIENT_ID, // Optional - iOS client ID (if different from webClientId)
  scopes: ['profile', 'email'],
  offlineAccess: true, // Optional - if you want refresh tokens
  hostedDomain: '', // Optional - restrict sign-in to specific domain
  forceCodeForRefreshToken: true, // Optional - Android only
});

const GoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export async function Googlelogin() {
  try {
    console.log('login');
    const result = await GoogleLogin();
    const user = result.data?.user;
    console.log(user);
    return { success: true, user };
  } catch (error) {
    console.log(
      'Login error:',
      error?.response?.data?.error?.message || error.message,
    );
    return { success: false, error };
  }
}

export async function handleGoogleLogout() {
  try {
    await GoogleSignin.signOut();
    // Perform additional cleanup and logout operations.
  } catch (error) {
    console.log('Google Sign-Out Error: ', error);
  }
}
