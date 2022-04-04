import { useEffect, useState } from 'react';
import { fetchValidFlashCards, updateFlashCard } from '../../api/cards';
import Button from '../../components/button';
import Container from '../../components/container';
import { LoaderDark } from '../../components/loader';
import Page from '../../components/page';
import Text from '../../components/text';
import { getNextAvailableTime } from '../../helpers';
import { Flashcard, ValidBinNumbers } from '../../types/shared';

const Home = () => {
  const [currCard, setCurrCard] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [flashCards, setFlashCards] = useState<Flashcard[]>([]);
  const [showDefinition, setShowDefinition] = useState<boolean>(false);

  const fetchCards = async () => {
    try {
      setLoading(true);
      const { flashCards: fC } = await fetchValidFlashCards();
      setCurrCard(0);
      setFlashCards(fC);
      setTotalCards(fC.length);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const updateAndGoToNextCard = async (card: Flashcard, correctGuess: boolean) => {
    try {
      const date = new Date();
      const nextBin = (card.bin < 11 ? card.bin + 1 : card.bin) as ValidBinNumbers;
      date.setSeconds(date.getSeconds() + (!correctGuess ? 0 : getNextAvailableTime(nextBin)));
      const values = {
        bin: correctGuess ? card.bin + 1 : 1,
        correctGuesses: correctGuess ? card.correctGuesses + 1 : card.correctGuesses,
        incorrectGuesses: !correctGuess ? card.incorrectGuesses + 1 : card.incorrectGuesses,
        nextAvailableTime: date,
      };
      const { flashCard } = await updateFlashCard(card.id, values);
      const updatedCards = flashCards.filter((fc) => fc.id !== flashCard.id);
      setFlashCards(updatedCards);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    // update cards every 5 secs
    const interval = setInterval(() => {
      if (flashCards.length === 0) {
        fetchCards();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Page>
      <Container fullHeight fullWidth inline justifyContent="center" paddingTop="30px" paddingBottom="30px">
        {loading && <LoaderDark width={60} height={60} center />}
        {(!loading && flashCards.length >= 1) && (
          <Container block fullWidth paddingLeft="20px" paddingRight="20px">
            <Container fullWidth justifyContent="space-between" block inline alignItems="center">
              <Container inline justifyContent="center" alignItems="center">
                <Container marginTop="10px" marginBottom="10px" marginRight="10px">
                  <Text text={`${(totalCards - flashCards.length) + 1}/${totalCards} - `} />
                </Container>
                <Text text={flashCards[currCard].name} />
              </Container>
            </Container>
            {!showDefinition ? (
              <Button text="Show definition" variant="tertiary" size="sm" onClick={() => setShowDefinition(true)} />
            ) : (
              <>
                <Text light text={flashCards[currCard].description} />
                <Container inline alignItems="center">
                  <Text light text="Did you get the correct definition?" />
                  <Container marginLeft="10px" marginRight="10px">
                    <Button text="I got it" variant="tertiary" onClick={() => updateAndGoToNextCard(flashCards[currCard], true)} />
                  </Container>
                  <Container marginLeft="10px" marginRight="10px">
                    <Button text="I did not get it" variant="danger" onClick={() => updateAndGoToNextCard(flashCards[currCard], false)} />
                  </Container>
                </Container>
              </>
            )}
          </Container>
        )}
        {(!loading && !flashCards.length) && (<Text text="You have no more words to review; you are permanently done!" />)}
      </Container>
    </Page>
  );
};

export default Home;
