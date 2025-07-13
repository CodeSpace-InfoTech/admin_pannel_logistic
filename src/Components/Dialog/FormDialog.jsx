import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from '../../redux/slices/dialogSlice';

const FormDialog = () => {
  const dispatch = useDispatch();
  const { isOpen, dialogueData } = useSelector((state) => state.dialog);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const isEdit = dialogueData !== null;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{isEdit ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={isEdit ? dialogueData.name : ''}
        />
        <TextField
          margin="dense"
          id="position"
          label="Position"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={isEdit ? dialogueData.position : ''}
        />
        <TextField
          margin="dense"
          id="office"
          label="Office"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={isEdit ? dialogueData.office : ''}
        />
        <TextField
          margin="dense"
          id="age"
          label="Age"
          type="number"
          fullWidth
          variant="standard"
          defaultValue={isEdit ? dialogueData.age : ''}
        />
        <TextField
          margin="dense"
          id="startDate"
          label="Start Date"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={isEdit ? dialogueData.startDate : ''}
        />
        <TextField
          margin="dense"
          id="salary"
          label="Salary"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={isEdit ? dialogueData.salary : ''}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>{isEdit ? 'Save' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;