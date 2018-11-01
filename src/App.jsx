import React from 'react';
import {observer} from 'mobx-react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Primary from "./layout/Primary";
/**/
import DevTools from 'mobx-react-devtools';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

@observer
class App extends React.Component {
  render() {
    return <MuiThemeProvider theme={theme}>
      <Primary />
      <DevTools/>
    </MuiThemeProvider>
  }
}

export default App;