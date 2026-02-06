import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';

export default function App() {
  return (
 <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      {/* Imagem ilustrativa */}
      <Image
        source={require('./assets/unnamed.png')}
        style={styles.image}
      />

   {/* Título */}
      <Text style={styles.title}>Join Us!</Text>

{/*Campo Nome */}
   <View style={styles.inputGroup}>
        <Text style={styles.label}>Your Name :</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#aaa"
          />
          <Text style={styles.icon}>👤</Text>
        </View>
      </View>

{/*Campo Email */}
<View style={styles.inputGroup}>
        <Text style={styles.label}>Your Email :</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="hello@gmail.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
          <Text style={styles.icon}>➜</Text>
        </View>
      </View>

{/* Campo Senha */}
 <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="••••••••••••"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
          />
          <Text style={styles.icon}>🔒</Text>
        </View>
      </View>

      <Text style={styles.orText}>or</Text>

      {/* Icones */}
          <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.socialText}>▶</Text>
        </TouchableOpacity>
      </View>

{/* Botão Criar Conta */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  image: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 28,
    fontFamily: 'Serif',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#e8f4f8',
    borderColor: '#00bcd4',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingBottom: 8,
    paddingTop: 4,
    marginTop: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  icon: {
    fontSize: 16,
    color: '#aaa',
    fontFamily: 'Serif',
    opacity: 0.7,
  },
  orText: {
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  socialIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#00bcd4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00bcd4',
  },
  button: {
    backgroundColor: '#00bcd4',
    paddingVertical: 14,
    paddingHorizontal: 78,
    borderRadius: 25,
    shadowColor: '#00bcd4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Serif',
  },
});