import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Contact from '../classes/Contact';

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

type Props = {
  mockDataContactList: Contact[];
  onClick: any;
};

export default function ContactTables(props: Props) {
  const { mockDataContactList } = props;
  const { onClick } = props;

  return (
    <div>
      <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
        <Table
          sx={{ minWidth: 300 }}
          aria-label="customized table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>名前</StyledTableCell>
              <StyledTableCell>フリガナ</StyledTableCell>
              <StyledTableCell>間柄</StyledTableCell>
              <StyledTableCell align="right">電話番号</StyledTableCell>
              <StyledTableCell align="right">携帯電話番号</StyledTableCell>
              <StyledTableCell align="right">メールアドレス</StyledTableCell>
              <StyledTableCell align="center">詳細</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDataContactList.map((row, index) => (
              <StyledTableRow key={row.userId}>
                <StyledTableCell>{row.userId}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.userName}
                </StyledTableCell>
                <StyledTableCell>{row.userNameKana}</StyledTableCell>
                <StyledTableCell>{row.userRelationship}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.mobilePhoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.mailAddress}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="edit"
                    color="secondary"
                    onClick={() => {
                      onClick(index);
                    }}
                  >
                    <ArticleOutlinedIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
