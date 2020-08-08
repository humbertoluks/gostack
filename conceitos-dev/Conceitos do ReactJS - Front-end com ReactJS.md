#  Front-end com ReactJS



### Comandos utilizados para a criaćão do primeiro sistema ReactJS

yarn init -y         

yarn add express

yarn add uuid4

yarn add react react-dom

yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

* Babel: Converter (transpilar) código do React para um código que o browser entenda
* Webpack: Para cada tipo de arquivo (.js, .css, .png) wu vou converter de uma maneira diferente

yarn add @babel/cli 

yarn add babel-loader

yarn add webpack-dev-server -D

yarn webpack-dev-server --mode development

 yarn add style-loader css-loader

 yarn add file-loader 

yarn add axios

yarn add @babel/plugin-transform-runtime -D

## Anotações

### Conceitos

Conceitos que compõem qualquer sistema React

* Componente
* Propriedade
* Estado



**Arquitetura React Native**

JS > MetroBundler > Bundle > Bridge > ( IOS | Android) 

### Fragment

ReactJS não podemos ter dois componentes seguidos sem estar envovidos, por exemplo <App /><App />, então poderiamos colocalos dentro de uma <div>, mas se não quisermos "sujar" o código poderiamos escrever dentro de um Fragment



Fragment é representado por uma tag vazia <>< /> ela não gera retorno no HTML





##  Emet

* **div#id :"<div id="app"></div>"**