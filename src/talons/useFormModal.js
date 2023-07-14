import { useMutation } from '@apollo/client';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../config/firebaseConfiguration';
import {
  createCustomer,
  createCustomerWithSocials,
  generateToken,
} from '../graphql/queries';

const useFormModal = () => {
  const [userWithSocials, { error }] = useMutation(createCustomerWithSocials);
  const [createNewUser, { error: userError }] = useMutation(createCustomer);
  const [getToken, { error: tokenError }] = useMutation(generateToken);
  if (error) {
    console.log(error);
  }

  async function handleGoogleCredentials() {
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = result.user.accessToken;
      console.log(token);
      const loading = toast.loading('Please wait while login with google');
      const { data } = await userWithSocials({
        variables: {
          token,
        },
      });
      console.log(data);
      if (data.verifySocialUser.signupWithSocial === true) {
        toast.update(loading, {
          autoClose: 2000,
          render: 'login with google successfully',
          type: 'success',
          isLoading: false,
        });

        const { data } = await createNewUser({
          variables: {
            tokenId: token,
          },
        });
        console.log(data);
        if (data.createCustomer) {
          toast.success('User Created Successfully');
        }
      }
      if (data.verifySocialUser.signupWithSocial === false) {
        toast.update(loading, {
          autoClose: 2000,
          render:
            'This email is already in use please try with different google email',
          type: 'error',
          isLoading: false,
        });
      }
      if (data.verifySocialUser.loginWithSocial === true) {
        const { data } = getToken({
          variables: {
            token,
          },
        });
        if (data) {
          toast.update(loading, {
            autoClose: 2000,
            render: 'login with google successfully',
            type: 'success',
            isLoading: false,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    handleGoogleCredentials,
  };
};

export default useFormModal;
