# 📱 Tela de Login Mobile

Tela de cadastro/login desenvolvida com **React Native** e **Expo**, utilizando apenas componentes nativos do React Native.

## 📸 Preview

A tela apresenta um formulário de cadastro com:

- Ilustração temática no topo
- Título "Join Us!"
- Campos de **Nome**, **Email** e **Senha**
- Ícones de login social (Google, Facebook, YouTube)
- Botão "Create an account"

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (~54.0)
- Componentes 100% nativos (sem libs externas de UI/ícones)

## 🚀 Como executar

```bash
# Clone o repositório
git clone https://github.com/Thales971/tela-login-mobile.git

# Acesse a pasta do projeto
cd tela-login-mobile/login-mobile

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Escaneie o QR Code com o app **Expo Go** no celular ou pressione `a` para abrir no emulador Android / `i` para iOS.

## 📁 Estrutura do Projeto

```
login-mobile/
├── App.js          # Tela principal de cadastro
├── app.json        # Configurações do Expo
├── index.js        # Ponto de entrada
├── package.json    # Dependências
└── assets/         # Imagens e ícones
```

## ✨ Funcionalidades

- Layout responsivo com `ScrollView`
- Campos estilizados com fundo azul claro
- Bordas em ciano (`#00bcd4`)
- Campo de senha com `secureTextEntry`
- Teclado de email com `keyboardType="email-address"`
- Botão com sombra (iOS e Android)

## 📝 Licença

Este projeto é de uso livre para fins de estudo.
