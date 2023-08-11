import React from 'react';

const useHighlightSentences = (text, sentences, highlightStyle) => {
  const highlightedText = React.useMemo(() => {
    if (!text || !sentences || sentences.length === 0) {
      return text;
    }

    const parts = [];
    let lastIndex = 0;

    sentences.forEach((sentence, index) => {
      const startIndex = text.toLowerCase().indexOf(sentence.toLowerCase(), lastIndex);

      if (startIndex !== -1) {
        const endIndex = startIndex + sentence.length;

        parts.push(text.substring(lastIndex, startIndex));
        parts.push(
          <span key={index} className={highlightStyle}>
            {text.substring(startIndex, endIndex)}
          </span>,
        );
        lastIndex = endIndex;
      }
    });

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  }, [text, sentences, highlightStyle]);

  return highlightedText;
};

export default useHighlightSentences;
