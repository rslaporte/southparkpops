import CardsTable from './components/CardsTable';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {

  }, 

  header: {
    alignContent: 'center',
    display: 'inline',
    textAlign: 'center',
    margin: '20px 50px 0px 0px'
  },

  body: {
    alignContent: 'center',
    margin: 'auto',
    display: 'table',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    alignSelf: 'center'
  },

  title: {
    fontSize: 36
  },

  text: {
    fontSize: 16
  }
});

function App() {
    const classes = useStyles()

    return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1 className={classes.title}> South Park Pops </h1>
        <h3 className={classes.text}> Descubra a qual personagem pertence cada uma das falas a seguir</h3>
      </header>
      <body className={classes.body}>
        <CardsTable />
      </body>
    </div>
  );
}

export default App;
