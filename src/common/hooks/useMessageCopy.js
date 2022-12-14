import { useEffect, useMemo, useState } from 'react';

export const useMessageCopy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const showMessageCopied = useMemo(
    () => (isCopied ? 'opacity-1 duration-75' : 'opacity-0'),
    [isCopied],
  );

  useEffect(() => {
    if (isCopied) {
      const copyTimeout = setTimeout(() => {
        setIsCopied(false);
      }, 1300);

      return () => clearTimeout(copyTimeout);
    }
  }, [isCopied]);

  return { isCopied, setIsCopied, showMessageCopied };
};
