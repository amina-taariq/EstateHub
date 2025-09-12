import { Account, Avatars, Client, OAuthProvider } from 'appwrite';
import { Linking } from 'react-native';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '@env';

export const config = {
  endpoint: PUBLIC_APPWRITE_ENDPOINT,
  projectId: PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId);

export const account = new Account(client);
export const avatar = new Avatars(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL('home');
    const response = account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri,
    );
    if (!response) throw new Error('Create OAuth2 token failed');
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri,
    );
    if (browserResult.type !== 'success')
      throw new Error('Create OAuth2 token failed');
    const url = new URL(browserResult.url);
    const secret = url.searchParams.get('secret')?.toString();
    const userId = url.searchParams.get('userId')?.toString();
    if (!secret || !userId) throw new Error('Create OAuth2 token failed');
    const session = await account.createSession(userId, secret);
    if (!session) throw new Error('Failed to create session');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}