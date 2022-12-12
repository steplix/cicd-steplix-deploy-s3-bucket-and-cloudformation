import { useMemo } from 'react';

export const useAvatarName = (name, surname) => {
  if (!name || !surname) throw new Error('Name and surname are required');

  const cutFirstNameLetter = useMemo(() => name.charAt(0).toUpperCase(), [name]);
  const cutFirstSurnameLetter = useMemo(() => surname.charAt(0).toUpperCase(), [surname]);
  const nameInitials = useMemo(
    () => `${cutFirstNameLetter}${cutFirstSurnameLetter}`,
    [cutFirstNameLetter, cutFirstSurnameLetter]
  );

  return nameInitials;
};
