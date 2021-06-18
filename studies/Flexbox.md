# Flex Box

- Foi projetado para fornecer um layout consistente em diferentes tamanhos de tela.
- Assim, como temos na WEB no React Native funciona igual.

- Ao utilizar o flexbox, é preciso ter em mente que **TODAS** as operações são relacionadas a **DOIS EIXOS**:
    * Main Axis (eixo principal);
    * Cross Axis (eixo transversal); - oposto do principal

O eixo principal é definido através de uma propriedade **flex-direction** e o eixo transversal encontra-se
na direção perpendicular a ele.


A propriedade **flex-direction** define a direção do eixo principal e pode ter **QUATRO** valores possíveis:

    * row          # linha
    * row-reverse
    * column       # coluna
    * column-reverse

Se o valor escolhido for o **row** ou o **row-reverse**, seu eixo principal se moverá ao longo da linha 
(na direção inline). # horizontal

![flex-direction: row](/studies/flex-direction-row.png)
Format: ![Alt Text](url)

Se o valor escolhido for **column** ou o **column-reverse**, o eixo principal moverá do topo até o fim
da página (na direção block). # vertical

![flex-direction: column](/studies/flex-direction-column.png)
Format: ![Alt Text](url)

--------------------------------------------------------------------------------------------------------

## Flex

Podemos utilizar proporções com a propriedade **flex** para ocuparmos o tamanho conforme o peso 
estabelecido para cada objeto (container);

![flex](/studies/flex.png)
Format: ![Alt Text](url)