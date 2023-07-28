import './App.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
      <div className='container'>
        <Header name="Night coffee" links={['Home', 'Cardápio', 'Receitas', 'Quem somos', 'Contato']}></Header>
        <Main titleMain="Bem vindo ao Night coffee" srcImg="https://img.freepik.com/vetores-gratis/cafe-amor-espuma-com-ilustracao-de-icone-dos-desenhos-animados-de-feijao_138676-2575.jpg?w=2000" messageMain="Ver cafes"></Main>
        <Footer contact={{ tel: '(31) 9999-9999', whatsApp: '(31) 8888-8888', facebook: 'nightCoffee', instagram: 'nightCoffee', email: 'coffeeNight@gmail.com'}} textFooter="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"></Footer>
      </div>
  );
}

export default App;
