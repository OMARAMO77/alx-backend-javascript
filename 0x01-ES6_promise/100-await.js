import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const prms1 = await uploadPhoto();
    const prms2 = await createUser();

    return ({ photo: prms1, user: prms2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
