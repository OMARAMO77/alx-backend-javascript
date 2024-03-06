import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const prms1 = uploadPhoto();
  const prms2 = createUser();

  return Promise.all([prms1, prms2]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
