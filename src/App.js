import Carousel from './carousel/carousel'; 
import './App.css';
import lapis from './assets/Icons_SVG/icon-numero-1.svg';
import etiqueta from './assets/Icons_SVG/icon-numero-2.svg';
import Stars from './Components/rating';
import carrinho from './assets/Icons_SVG/icon carrinho.svg';
import coracao from './assets/Icons_SVG/icon-desejos.svg';
function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Carousel/>
      </div>
      <div className="description">
        <div className='caminho'> 
        Calçados/Masculino/Esportes/
       <h4> Casual</h4>
        </div>
        <div className='casual'>
        <h2>Casual</h2>
        </div>
        <div className='titulo'>
        <strong>Tênis Nike Air Max 2090 Masculino</strong>
        </div>
       <div classname='classificacao'>
        <div className='lapis'>
        <h3>55148</h3>
        <img src={lapis}/>
        </div>
        
        <div className='etiqueta'>
        <h3>APO900</h3>
        <img src={etiqueta}/>
        </div>
       <div className='stars'>
        <Stars/>
       </div>
       <div className='texto'>
         
         <h1>Traga o passado para o futuro com o Nike Air Max 2090. Inspirado no icônico Air Max 90, o 2090 conta com o amortecimento Nike Air debaixo do pé, que proporciona conforto inigualável, enquanto a tela transparente na parte de cima se mistura com as características atemporais do OG para um look moderno e ousado.</h1>
       </div>
        
        <div className='tamanho'>
          <h1>TAMANHO</h1>
          <button className='btntama'>37</button>
          <button className='btntamb'>38</button>
          <button className='btntamc'>39</button>
          <button className='btntamd'>40</button>
          <button className='btntame'>41</button>
          <button className='btntamf'>42</button>
          <button className='btntamg'>43</button>
          <button className='btntamh'>44</button>
          <button className='btntami'>45</button>
         
        </div>
       </div>
       
      <button className='btncarrinho'>
        <img src={carrinho}/>
        ADCIONAR AO CARRINHO
      </button>
      <button className='listd'>
        <img src={coracao}/>
        + LISTA DE DESEJOS
      </button>
      <div className='frete'>
      <h1>
          CALCULAR FRETE E ENTREGA
        </h1>
      <form>
       <label>Calcule o frete e o prazo de entrega estimados para sua região. Informe seu CEP:</label>
       <input type='text' placeholder='CEP'/>
       <button className='calcular'>CALCULAR</button>
        <h3>Não sei meu CEP</h3>
      </form>
      </div>
      </div>
    
      
    </div>
  );
}

export default App;
