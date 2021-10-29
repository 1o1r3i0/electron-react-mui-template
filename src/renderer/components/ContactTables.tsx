import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  nameKana: string,
  relationship: number,
  phoneNumber: string,
  mailAddress: string
) {
  return { name, nameKana, relationship, phoneNumber, mailAddress };
}

const rows = [
  createData(
    '田中　太郎',
    'タナカ　タロウ',
    1,
    '000-0000-0000',
    'test@test.com'
  ),
  createData('佐藤　浩', 'サトウ　ヒロシ', 1, '000-0000-0000', 'test@test.com'),
  createData(
    '横山　愛子',
    'ヨコヤマ　アイコ',
    1,
    '000-0000-0000',
    'test@test.com'
  ),
  createData(
    '寺岡　靖子',
    'テラオカ　ヤスコ',
    1,
    '000-0000-0000',
    'test@test.com'
  ),
  createData(
    '秋葉　義夫',
    'アキバ　ヨシオ',
    1,
    '000-0000-0000',
    'test@test.com'
  ),
];

export default function ContactTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>名前</StyledTableCell>
            <StyledTableCell>フリガナ</StyledTableCell>
            <StyledTableCell>間柄</StyledTableCell>
            <StyledTableCell align="right">電話番号</StyledTableCell>
            <StyledTableCell align="right">メールアドレス</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.nameKana}</StyledTableCell>
              <StyledTableCell>{row.relationship}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.mailAddress}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
