import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
//import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TransactionsPage from './Pages/TransactionsPage'
import WalletsPage from './Pages/WalletsPage'
import DevelopmentPage from './Pages/DevelopmentPage'
import SupplyPage from './Pages/SupplyPage'
import AboutPage from './Pages/AboutPage'
import SummaryPage from './Pages/SummaryPage'
import Layout from './Layout/Layout';

function App() {

  const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#283593',
      },
      secondary: {
        main: '#9E7F00',
      },
      background: {
        default: '#101010',
        paper: '#161616',
      },
    },
    shape: {
      borderRadius: 20,
    },
    props: {
      MuiButton: {
        size: 'small',
      },
      MuiButtonGroup: {
        size: 'small',
      },
      MuiCheckbox: {
        size: 'small',
      },
      MuiFab: {
        size: 'small',
      },
      MuiFormControl: {
        margin: 'dense',
        size: 'small',
      },
      MuiFormHelperText: {
        margin: 'dense',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiInputBase: {
        margin: 'dense',
      },
      MuiInputLabel: {
        margin: 'dense',
      },
      MuiRadio: {
        size: 'small',
      },
      MuiSwitch: {
        size: 'small',
      },
      MuiTextField: {
        margin: 'dense',
        size: 'small',
      },
      MuiList: {
        dense: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: 'small',
      },
      MuiTooltip: {
        arrow: true,
      },
    },
    overrides: {
      MuiSwitch: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  };

const themeObject = createTheme(themeOptions);
  
  return (
    <div className="MainPage">
      <ThemeProvider theme={themeObject}>
        <BrowserRouter>
            <Routes>
              <Route path="/transactions" element={<Layout><TransactionsPage className="SubPage"/></Layout>} />
              <Route path="/wallets" element={<Layout><WalletsPage className="SubPage"/></Layout>} />
              <Route path="/development" element={<Layout><DevelopmentPage className="SubPage"/></Layout>} />
              <Route path="/supply" element={<Layout><SupplyPage className="SubPage"/></Layout>} />
              <Route path="/about" element={<Layout><AboutPage className="SubPage"/></Layout>} />
              <Route path="/" element={<Layout><SummaryPage className="SubPage"/></Layout>} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
