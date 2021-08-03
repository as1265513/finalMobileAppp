import call from 'react-native-phone-call';

const callnum = ({ phone }) => {
  const args = {
    number: phone.toString(), // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  call(args).catch(console.error);
};

export default callnum;
