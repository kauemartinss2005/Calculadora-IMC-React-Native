import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";

export default function Main() {
  const [altura, setAltura] = useState<string>("");

  const [peso, setPeso] = useState<string>("");

  const [resultado, setResultado] = useState<number | null>(null);

  const [mensagem, setMensagem] = useState<string>("");

  function calcularIMC() {
    const alturaFormatada = altura.replace(",", ".");

    const pesoFormatado = peso.replace(",", ".");

    const alt = parseFloat(alturaFormatada);

    const pes = parseFloat(pesoFormatado);

    if (!alt || !pes || isNaN(alt) || isNaN(pes)) {
      setMensagem("Por favor, digite valores válidos.");

      setResultado(null);

      return;
    }

    const imc = pes / (alt * alt);

    setResultado(parseFloat(imc.toFixed(2)));

    if (imc < 18.5) setMensagem("Abaixo do peso");
    else if (imc < 24.9) setMensagem("Peso ideal");
    else if (imc < 29.9) setMensagem("Levemente acima do peso");
    else if (imc < 34.9) setMensagem("Obesidade grau I");
    else if (imc < 39.9) setMensagem("Obesidade grau II");
    else setMensagem("Obesidade grau III (Mórbida)");

    Keyboard.dismiss();
  }

  function resetar() {
    setAltura("");

    setPeso("");

    setResultado(null);

    setMensagem("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Altura</Text>

      <TextInput
        style={styles.input}
        keyboardType="numbers-and-punctuation"
        placeholder="0"
        value={altura}
        onChangeText={setAltura}
      />

      <Text style={styles.label}>Peso</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0"
        value={peso}
        onChangeText={setPeso}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={resultado ? resetar : calcularIMC}
      >
        <Text style={styles.buttonText}>
          {resultado ? "Novo Cálculo" : "Calcular"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.explicacao}>Preencha o peso e a altura</Text>

      {resultado !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Seu IMC é:</Text>

          <Text style={styles.resultValue}>{resultado}</Text>

          <Text style={styles.message}>{mensagem}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: -45,
    backgroundColor: "#ffffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "600",
    color: "#000000ff",
  },

  input: {
    backgroundColor: "#f2f2f2d7",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
    width: "100%",
  },

  button: {
    backgroundColor: "#ff0043",
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },

  buttonText: {
    fontSize: 18,
    color: "#ffffffff",
    fontWeight: "bold",
  },

  explicacao: {
    paddingVertical: 15,
    textAlign: "center",
  },

  resultContainer: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 15,
  },

  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },

  resultValue: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ff0043",
    marginVertical: 5,
  },

  message: {
    fontSize: 20,
    marginTop: 5,
    color: "#ff0043",
    fontWeight: "500",
    textAlign: "center",
  },
});
