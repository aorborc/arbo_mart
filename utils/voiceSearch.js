// // import Voice from '@react-native-voice/voice';
// import { Audio } from 'expo-av';

// export const startVoiceSearch = async (onResult, onError) => {
//   try {
//     // Request microphone permission
//     const permission = await Audio.requestPermissionsAsync();
//     if (permission.status !== 'granted') {
//       onError('Permission to access microphone was denied');
//       return;
//     }

//     // Set up voice handlers
//     Voice.onSpeechStart = () => console.log('Speech recognition started');
//     Voice.onSpeechEnd = () => console.log('Speech recognition ended');
//     Voice.onSpeechResults = (event) => {
//       if (event.value && event.value.length > 0) {
//         onResult(event.value[0]);
//       }
//     };
//     Voice.onSpeechError = (error) => {
//       onError(error.message || 'An error occurred during speech recognition');
//     };

//     // Start listening
//     await Voice.start('en-US');
//   } catch (error) {
//     onError(error.message || 'An error occurred during speech recognition');
//   }
// };

// export const stopVoiceSearch = async () => {
//   try {
//     await Voice.stop();
//     // Clean up listeners
//     Voice.onSpeechStart = null;
//     Voice.onSpeechEnd = null;
//     Voice.onSpeechResults = null;
//     Voice.onSpeechError = null;
//   } catch (error) {
//     console.error('Error stopping voice search:', error);
//   }
// }; 