import {
  readableDate,
  readableToStorableDateString,
} from '../../constants/dateFunctions';
import { isMM_DD_YYYY } from '../../constants/dateFunctions';

// functions
export const onDateChange = (event, selectedDate, setters) => {
  setters.setShow(false); // Always hide the picker
  if (selectedDate) {
    setters.setError('');
    const newDate = readableDate(selectedDate);
    setters.setDateInput(newDate); // must be a string
    setters.setDate(selectedDate); // must be a date object
  }
};

export const handleTextInputChange = (text, setters) => {
  //testing
  setters.setDateInput(text);
  const isValidDate = isMM_DD_YYYY(text);
  if (!isValidDate) {
    setters.setError('Date must be MM/DD/YYYY format.');
  } else {
    // convert to storable date
    const storableDate = readableToStorableDateString(text);
    setters.setError('');
    setters.setDate(new Date(storableDate)); // must be a date object
  }
};
