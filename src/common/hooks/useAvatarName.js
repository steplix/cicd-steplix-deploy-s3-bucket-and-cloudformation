import { useEffect, useState } from 'react';

export const useAvatarName = (name, surname) => {
  const [nameInitials, setnameInitials] = useState('');

  useEffect(() => {
    if (!name || !surname) return;
    const cutFirstNameLetter = name.charAt(0).toUpperCase();
    const cutFirstSurnameLetter = surname.charAt(0).toUpperCase();

    setnameInitials(`${cutFirstNameLetter}${cutFirstSurnameLetter}`);
  }, [name, surname]);

  return nameInitials;
};
