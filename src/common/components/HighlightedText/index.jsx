import useHighlightSentences from '@/common/hooks/useHighlightSentences';

const HighlightedText = ({ text, sentencesToHighlight, highlightStyle }) => {
  const highlightedText = useHighlightSentences(text, sentencesToHighlight, highlightStyle);

  return <>{highlightedText}</>;
};

export default HighlightedText;
