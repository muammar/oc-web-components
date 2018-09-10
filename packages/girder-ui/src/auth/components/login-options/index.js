import React, { Component } from 'react';

import { girderLogo } from './logos';
import { googleLogo } from './logos';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

class LoginOptions extends Component {
  render = () => {
    const {show, girder, oauth, handleClose, handleGoogle, handleGirder} = this.props;

    const actions = [
      <Button key="cancel" color="primary" onClick={handleClose}>
        Cancel
      </Button>
    ]

    return (
      <Dialog
        aria-labelledby="login-dialog-title"
        open={show}
        onClose={handleClose}
      >
        <DialogTitle id="login-dialog-title">Login Provider</DialogTitle>
          <List>
            { oauth &&
            <ListItem button onClick={handleGoogle}>
              <ListItemText primary="Sign in with Google" />
              <ListItemIcon>
                <img style={{height: "1.25rem"}} src={googleLogo} alt="google" />
              </ListItemIcon>
            </ListItem>
            }
            { girder &&
            <ListItem button onClick={handleGirder}>
              <ListItemText primary="Sign in with Girder" />
              <ListItemIcon>
                <img style={{height: "1.25rem"}} src={girderLogo} alt="girder" />
              </ListItemIcon>
            </ListItem>
            }
          </List>
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>
    );
  }
}

export default LoginOptions;