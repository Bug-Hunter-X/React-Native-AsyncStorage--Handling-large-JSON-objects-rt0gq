In React Native, an uncommon bug can occur when using AsyncStorage with large amounts of data or complex data structures.  The issue stems from AsyncStorage's limitations in handling large JSON objects.  Attempting to store a large JSON object can lead to unexpected behavior, including silent failures, app crashes, or data corruption.  The error messages are not always explicit, making debugging challenging.

```javascript
//bug.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const largeDataObject = {
  // ... a very large JSON object ...
};

const storeData = async () => {
  try {
    await AsyncStorage.setItem('myKey', JSON.stringify(largeDataObject));
    console.log('Data saved successfully!');
  } catch (e) {
    console.error('Error saving data: ', e);
  }
};

storeData();
```