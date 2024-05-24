import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    return web; // You can switch based on platform if needed
  }

  static const FirebaseOptions web = FirebaseOptions(
      apiKey: "AIzaSyCIlwATDGbY8BvZIiT6GCZ-IX4ujJhRYFA",
      authDomain: "demo11-27cc3.firebaseapp.com",
      projectId: "demo11-27cc3",
      storageBucket: "demo11-27cc3.appspot.com",
      messagingSenderId: "255068066537",
      appId: "1:255068066537:web:48f292137a6b18b37a9678",
      measurementId: "G-XEL80PCR2D");
}
