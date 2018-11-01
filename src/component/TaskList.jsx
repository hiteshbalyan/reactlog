import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {inject, observer} from "mobx-react";
import List from "@material-ui/core/List/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const style = (theme) => (theme);
const TaskList = inject('store')(observer(
    /**
     * @param {Object} props Receives props
     * @param {TasksStore} props.store
     */
    ({store}) => {

      let listItem = store.map((item) => (
          <ListItem key={item.id}>
            <ListItemText inset primary={item.title}/>
            <ListItemIcon button="true">
              <IconButton onClick={() => {
                store.removeTask(item)
              }}><DeleteIcon/></IconButton>
            </ListItemIcon>
          </ListItem>
      ));

      return <List component="nav">
        {listItem}
      </List>
    }
));

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.any,
};

export default withStyles(style)(TaskList)