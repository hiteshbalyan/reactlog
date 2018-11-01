import React from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Input'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

const styles = (theme) => ({
  fab: {
    margin: '10px',
    textAlign: 'right',
    bottom: 0,
    right: 0,
  }
});

@observer
@inject('store')
class AddTask extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  inputUpdate(e) {
    this.setState({input: e.target.value});
  }

  handler(e) {
    e.preventDefault();
    this.props.store.addTask(this.state.input);
  }

  render() {
    let {store, classes} = {...this.props};

    return <div className={classes.fab}>
      <Grid container spacing={8}>
        <Grid item md={11}>
          <Input onChange={this.inputUpdate.bind(this)} fullWidth={true} autoFocus={true} placeholder="what are you working on?"/>
        </Grid>
        <Grid item md={1}>
          <Button aria-label="Add" variant="text" color="secondary" onClick={this.handler.bind(this)}>
            <AddIcon/>
          </Button>
        </Grid>
      </Grid>
    </div>
  }
}

export default withStyles(styles)(AddTask);