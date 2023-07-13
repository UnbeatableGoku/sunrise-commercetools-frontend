import { useMutation } from '@apollo/client';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebaseConfiguration';
import { createCustomerWithSocials } from '../graphql/queries';

const useFormModal = () => {
  const [userWithSocials, { error }] = useMutation(createCustomerWithSocials);
  async function handleGoogleCredentials() {
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = result.user.accessToken;
      const { data } = await userWithSocials({
        variables: {
          token,
        },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    handleGoogleCredentials,
  };
};

export default useFormModal;
