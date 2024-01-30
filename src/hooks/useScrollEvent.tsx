export const useScrollXEvent = (targetRef) => {
  let pastScrollLeft = 0;
  const handleScroll = (event) => {
    const nowScrollLeft = event.target.scrollTop;
    if (nowScrollLeft !== pastScrollLeft) {
      const customEvent = new CustomEvent('scroll-y', {
        bubbles: true,
        cancelable: true,
      });
      targetRef.current.dispatchEvent(customEvent);
      pastScrollLeft = nowScrollLeft;
    }
  };

  const target = targetRef.current;
  target.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    target.removeEventListener('scroll', handleScroll);
  };
};
