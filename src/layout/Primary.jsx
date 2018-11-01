import React from 'react';
//import {inject, observer} from 'mobx-react';
import * as PropTypes from "prop-types";
/*UI*/
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from "@material-ui/core/styles/withStyles";
import AddTask from "../component/AddTask";
import TaskList from "../component/TaskList";

const style = (theme) => ({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    position: 'relative',
    margin: 'auto',
    height: '100%',
    minWidth: '460px',
    maxWidth: '800px',
  },
  minHeight510: {minHeight: '510px'},
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  containerBody: {},
  footer: {
    width: '100%'
  }
});

@withStyles(style)
export default class Primary extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    //store: PropTypes.any
  };

  render() {
    let {classes, store} = {...this.props};
    return <div className={classes.container}>
      <Paper elevation={1}>
        <div className={[classes.containerBody, classes.minHeight510].join(' ')}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit">Task List</Typography>
            </Toolbar>
          </AppBar>
          <TaskList/>
        </div>
        <div className={classes.footer}>
          <AddTask/>
        </div>
      </Paper>
    </div>
  }
}
