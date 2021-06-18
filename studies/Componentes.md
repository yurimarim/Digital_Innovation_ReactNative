# Componentes
    - Permite dividir a interface (UI) em partes independentes, reutilizáveis, ou seja, trata cada parte 
da aplicação como um **BLOCO ISOLADO** livre de dependência externas.

    - Cada componente é possível passar **propriedades** para o componente. Nessas propriedades ele vai receber
trata-la dentro do componente de forma isolada.

    - Os componentes são como funções JS que retorna algo: conjunto de componentes / conjunto de estruções / lógica etc.
Eles aceitam entradas arbitrárias (chamada "props")

 ## Propriedades

```js

const Usuario = (props) {
    return <Text>Olá, {props.name}</Text>;
}


const App = () => {
    return <Usuario name="Pablo" />
}

```

### Estados
    - Diferente das propriedades, o estado não é repassado ao componente e sim configurado dentro dele.
Pense no estado como as propriedades de nossa classe que devem ser armazenadas para renderizarmos o componente da forma correta.
 