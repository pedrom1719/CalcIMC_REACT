import { useEffect, useState } from 'react'

import './App.css'

import InputMask from 'react-input-mask';
import Input from './Components/Input'

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [IMC, setIMC] = useState(0);
  const [category, setCategory] = useState('');
  const [displayDesc, setDisplayDesc] = useState(false);
  const categoriesIMC = {
    IMC_01: {
      categ: 'Abaixo do Normal',
      range: '18,5 ou menos',
      desc: 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.',
      color: '#0499f2'
    },
    IMC_02: {
      categ: 'Normal',
      range: 'Entre 18,6 e 24,9',
      desc: 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.',
      color: '#42dd42',
    },
    IMC_03: {
      categ: 'Sobrepeso',
      range: 'Entre 25,0 e 29,9',
      desc: 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.',
      color: '#ffc515',
    },
    IMC_04: {
      categ: 'Obesidade Grau 1',
      range: 'Entre 30,0 e 34,9',
      desc: 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.',
      color: '#ff8300',
    },
    IMC_05: {
      categ: 'Obesidade Grau 2',
      range: 'Entre 35,0 e 39,9',
      desc: 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. ',
      color: '#ff2544',
    },
    IMC_06: {
      categ: 'Obesidade Grau 3',
      range: 'Acima de 40,0',
      desc: 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.',
      color: '#d91772',
    }
  };

  // Observando alteracoes no Peso e Altura, e definindo IMC onChange
  useEffect(function(){

    if (height > 0 && weight > 0) {
      let mathIMC = weight / (height * height);
      setIMC(mathIMC.toFixed(2));
      setDisplayDesc(true);
      getCategory(mathIMC);

    } else {
      setIMC('--');
      setCategory('--'); 
      setDisplayDesc(false);
    }

  }, [height, weight]);

  // Setando Altura
  function getAltura(e){
    let inputAltura = parseFloat(e.target.value);
    setHeight(inputAltura);
  }

  // Setando Peso
  function getPeso(e){
    let inputPeso = parseFloat(e.target.value);
    setWeight(inputPeso);
  }

  // Setando Categoria
  function getCategory(imcValue){
    if(imcValue <= 18.5){
      setCategory('IMC_01');

    }else if(imcValue > 18.5 && imcValue <= 24.9){
      setCategory('IMC_02');

    }else if(imcValue > 24.9 && imcValue <= 29.9){
      setCategory('IMC_03');

    }else if(imcValue > 29.9 && imcValue <= 34.9){
      setCategory('IMC_04');

    }else if(imcValue > 34.9 && imcValue <= 39.9){
      setCategory('IMC_05');

    }else if(imcValue > 40){
      setCategory('IMC_06');
    }
  }

  return (
    <>
      <div className="main_container">
        <h1>Calculadora de IMC</h1>

        <div className="input_container">
          <Input
            placeholder="00.0"
            inputValue={getPeso}
            medida="Peso/KG"
            iconName="fi fi-br-arrows-h"
          />
          <Input
            placeholder="0.00"
            inputValue={getAltura}
            medida="Altura/M"
            iconName="fi fi-br-arrows-h-copy"
          />
        </div>

        <div className={`result ${displayDesc ? 'display_desc' : ''}`}>
          <span>
            <b>IMC: </b> 
            {IMC}
          </span>
          <span>
            <b>Categoria: </b> 
            {category in categoriesIMC ? categoriesIMC[category].categ : '--'}
          </span>
        </div>

        <div className={`category_desc ${displayDesc ? 'display_desc' : ''}`}>
            <h4 style={{ color: (category in categoriesIMC) ? categoriesIMC[category].color : '' }}>
              {category in categoriesIMC ? categoriesIMC[category].categ : ''}
            </h4>
            <h6>{category in categoriesIMC ? categoriesIMC[category].range : ''}</h6>
            <p>{category in categoriesIMC ? categoriesIMC[category].desc : ''}</p>
        </div>
      </div>
    </>
  )
}

export default App
