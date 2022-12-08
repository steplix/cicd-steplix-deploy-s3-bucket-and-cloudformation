import { useMemo } from 'react';

export const useAvatarName = (name, surname) => {
  const fullFirstName = useMemo(() => {
    if (!name) return 'Default';

    return name;
  }, [name]);

  const fullSurname = useMemo(() => {
    if (!surname) return 'Name';

    return surname;
  }, [surname]);

  const cutFirstNameLetter = useMemo(() => fullFirstName.charAt(0).toUpperCase(), [fullFirstName]);
  const cutFirstSurnameLetter = useMemo(() => fullSurname.charAt(0).toUpperCase(), [fullSurname]);
  const nameInitials = useMemo(() => {
    const initials = `${cutFirstNameLetter}${cutFirstSurnameLetter}`;

    if (initials.length > 2) {
      return initials.slice(0, 2);
    }

    if (initials.length === 1) {
      return initials + initials;
    }

    if (initials.length === 0) {
      return 'AA';
    }

    return initials;
  }, [cutFirstNameLetter, cutFirstSurnameLetter]);

  return [nameInitials, fullFirstName, fullSurname];
};
