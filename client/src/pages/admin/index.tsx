import { useEffect, useMemo, useState } from 'react';
import { createFlashCard, fetchFlashCards } from '../../api/cards';
import Button from '../../components/button';
import Container from '../../components/container';
import { Input } from '../../components/input';
import { LoaderDark } from '../../components/loader';
import Page from '../../components/page';
import Text from '../../components/text';
import { Flashcard } from '../../types/shared';
import FlashCardList from '../../components/flashcardlist';

const Admin = () => {
  const [newFlashCard, setNewFlashCard] = useState<Partial<Flashcard>>({
    name: '',
    description: '',
  });
  const isFormDisabled = useMemo(() => {
    const { name, description } = newFlashCard;
    if (name && description && name.length && description.length) {
      return false;
    }
    return true;
  }, [newFlashCard]);
  const [loading, setLoading] = useState<boolean>(false);
  const [flashCards, setFlashCards] = useState<Flashcard[]>([]);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [listFlashCards, setListFlashCards] = useState<boolean>(true);
  const fetchCards = async () => {
    try {
      setLoading(true);
      const { flashCards: fC } = await fetchFlashCards();
      setFlashCards(fC);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const createCard = async () => {
    try {
      const { name, description } = newFlashCard;
      if (!name || !description) return;
      setCreateLoading(true);
      const { flashCard } = await createFlashCard(name, description);
      setFlashCards([flashCard, ...flashCards]);
    } catch (e) {
      console.log(e);
    } finally {
      setCreateLoading(false);
      setListFlashCards(true);
    }
  };
  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    setNewFlashCard({
      name: '',
      description: '',
    });
  }, [listFlashCards]);

  return (
    <Page>
      <Container fullHeight fullWidth paddingTop="30px" inline justifyContent="center">
        {(listFlashCards && loading) && (
          <LoaderDark width={50} height={50} center />
        )}
        {(listFlashCards && !loading) && (
        <Container fullWidth paddingLeft="30px" paddingRight="30px">
          <Container inline justifyContent="space-between" fullWidth>
            <Text text="Flashcards" />
            <Button text="Create flashcard" variant="tertiary" onClick={() => setListFlashCards(false)} />
          </Container>
          <FlashCardList flashCards={flashCards} />
        </Container>
        )}
        {!listFlashCards && (
          <Container>
            <Input size="lg" label labelText="Name" onChangeText={(name: string) => setNewFlashCard({ ...newFlashCard, name })} />
            <Input size="lg" label labelText="Description" type="textarea" onChangeText={(description: string) => setNewFlashCard({ ...newFlashCard, description })} />
            <Container justifyContent="center" inline fullWidth>
              <Container inline justifyContent="space-between" width="300px">
                <Button text="Create" loading={createLoading} variant="tertiary" size="sm" disabled={isFormDisabled} onClick={() => createCard()} />
                <Button text="Cancel" variant="danger" size="sm" onClick={() => setListFlashCards(true)} />
              </Container>
            </Container>
          </Container>
        )}
      </Container>
    </Page>
  );
};

export default Admin;
