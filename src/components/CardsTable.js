import MediaCard from './Card';
import data from '../data'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  container: {
    alignContent: 'center',
    width: '960px'
  },

  table: {
    width: ''
  },

  td: {
    width: '0px',
    margin: '0px',
    padding: 0
  }
});

export default function CardsTable() {
  const classes = useStyles()
  const rowsNumber = data.length/6
  
  let rowsTemp = []
  let position = [0, 1, 2, 3, 4, 5]

  for(let i = 0; i < rowsNumber; i++) {
    rowsTemp.push(i)
  }
  
  console.log(rowsTemp)

  return (
    <>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
            </TableHead>
            <TableBody>
              {rowsTemp.map(row => (
                <TableRow>
                  {position.map(position => (
                    <TableCell className={classes.td}>
                      <MediaCard 
                        answer={data[row*6 + position].answer} 
                        image={data[row*6 + position].image} 
                        audio={data[row*6 + position].audio} 
                        number={row*6 + position + 1}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}
